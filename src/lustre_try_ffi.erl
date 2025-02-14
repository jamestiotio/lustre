-module(lustre_try_ffi).
-export([serve/3, response_default_headers/0, exec/1]).

serve({options, Name, Host, Port, NoStyles}, OnStart, OnPortTaken) ->
    Html =
        <<
            "<!DOCTYPE html>\n"
            "<html lang=\"en\">\n"
            "<head>\n"
            "  <meta charset=\"UTF-8\">\n"
            "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
            "  <title>Lustre preview server</title>\n",
            case NoStyles of
                true ->
                    <<"">>;
                false ->
                    <<"  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/lustre-labs/ui/priv/styles.css\">\n">>
            end/binary,
            "  <script type=\"module\">\n"
            "    import { main } from './",
            Name/binary,
            "/",
            Name/binary,
            ".mjs'\n"
            "\n"
            "    document.addEventListener(\"DOMContentLoaded\", () => {\n"
            "      main();\n"
            "    });\n"
            "  </script>\n"
            "</head>\n"
            "<body>\n"
            "  <div id=\"app\"></div>\n"
            "</body>\n"
            "</html>"
        >>,

    file:write_file("build/dev/javascript/index.html", Html),

    AbsPath =
        string:trim(
            filename:absname("build/dev/javascript"), trailing, "/."
        ),

    inets:start(),
    Address = {127, 0, 0, 1},

    ActualPort =
        case port_available(Port) of
            true ->
                Port;
            false ->
                OnPortTaken(Port),
                first_available_port(Port + 1)
        end,

    {ok, Pid} =
        httpd:start_service([
            {bind_address, Address},
            {document_root, AbsPath},
            {server_root, AbsPath},
            {directory_index, ["index.html"]},
            {server_name, binary_to_list(Host)},
            {port, ActualPort},
            {default_type, "text/html"},
            {mime_types, mime_types()},
            {customize, ?MODULE},
            {modules, [mod_alias, mod_dir, mod_get]}
        ]),

    OnStart(ActualPort),

    receive
        {From, shutdown} ->
            ok = httpd:stop_service(Pid),
            From ! done
    end.

port_available(Port) ->
    case gen_tcp:listen(Port, []) of
        {ok, Sock} ->
            ok = gen_tcp:close(Sock),
            true;
        _ ->
            false
    end.

first_available_port(Port) ->
    case port_available(Port) of
        true -> Port;
        false -> first_available_port(Port + 1)
    end.

mime_types() ->
    [
        {"html", "text/html"},
        {"htm", "text/html"},
        {"js", "text/javascript"},
        {"mjs", "text/javascript"},
        {"css", "text/css"},
        {"gif", "image/gif"},
        {"jpg", "image/jpeg"},
        {"jpeg", "image/jpeg"},
        {"png", "image/png"}
    ].

response_default_headers() ->
    [
        {"cache-control", "no-store, no-cache, must-revalidate, private"},
        {"pragma", "no-cache"}
    ].

exec(Cmd) ->
    Stdout = os:cmd(unicode:characters_to_list(Cmd)),

    unicode:characters_to_binary(Stdout).
