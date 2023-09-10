# Managing state

We saw in the quickstart guide that Lustre applications are built using the
Model-View-Update architecture. For folks used to building with React or most
other frontend frameworks, it can be a bit of a shock to work without access to
local component state.

In this guide we'll look at how to manage state in a variety of scenarios
_without_ using local component state. It's important to get a solid grasp on
this _before_ looking at Lustre's approach to components because they're built on
the same principles!

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/lustre-base-97896c?file=%2Fsrc%2Fapp.gleam%3A1%2C1&embed=1" allowfullscreen></iframe>

## Semi-encapsulated components

Before reaching for Lustre's stateful components, you might consider a
semi-encapsulated approach. This is where you have a separate Gleam module that
defines it's own `Model`, `init`, `Msg`, and `update` (and optionally a `view`
too) but still manage things from your top-level application.

For example, we may define a `counter` module:

```gleam
// app/counter.gleam

import gleam/int
import lustre/element.{Element}
import lustre/element/html
import lustre/event

pub type Model = Int

pub fn init(_) -> Model {
  0
}

pub type Msg {
  Incr
  Decr
  Double
  Reset
}

pub fn update(model: Model, msg: Msg) -> Model {
  case msg {
    Incr -> model + 1
    Decr -> model - 1
    Double -> model * 2
    Reset -> 0
  }
}
```

Now we can create and manage multiple counters in our main application:

```
import app/counter

```

This approach can get quite sophisticated. For example you may want to make your
component's `Model` type opaque and optionally provide some helper functions to
extract any data parents may need to know about. You might also choose to split
your component's `Msg` type and keep a separate `InternalMsg` type that can't
be constructed outside of the module.

Taking the counter example from above, perhaps we want parents to be able to
reset the counter and query the current count, but all other messages are handled
internally:

```gleam
pub type Msg {
  Reset
  Internal(InternalMsg)
}

pub opaque type InternalMsg {
  Incr
  Decr
  Double
}
```

Once you find your semi-encampsulated components have a lot of internal state or
many messages that are only relevant to that component, it may be time to
consider a [stateful component](/docs/components) instead.

## Separating page state

```gleam
type Model {

}
```

## Preserving state across page changes

```gleam
type Model = Map(String, PageModel)

type PageModel {

}
```

## Sharing state between pages

```gleam
import gleam/map.{Map}

type Model {
  Model(
    shared: SharedModel,
    pages: Map(String, PageModel)
  )
}

type SharedModel {
  SharedModel()
}

type PageModel {

}
```
