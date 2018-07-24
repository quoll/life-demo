# Conway's Game of Life Demo

This demonstrates building an implementation of Conway's Game
of Life in ClojureScript. On the way, it shows how to build
operations in ClojureScript, and how easy it can be to build
a web application.

The math, along with the description, is a direct copy of the
REPL driven development of the
[Life in APL](https://www.youtube.com/watch?v=a9xAKttWgP4) video

## Running

As with many ClojureScript applications, this one requires the
[Leiningen]|(https://leiningen.org) build tool. Go ahead and
install it. We'll wait.

To run the demo, run:

`lein figwheel`

Figwheel will complain about referenced vars that aren't defined,
but these warnings can be ignored.

Next, connect a browser to http://localhost:3449

## The Demo Code

The program takes the user through a series of screens in which
each step of implementing the code is built providing the user
with interactive text to execute, with the results displayed on
the page. The user can either execute the code as provided, or
experiment if desired.

The pages initially take the user through linear algebra operations
that duplicate the process shown in the APL video, showing how
the same thing can be achieved in ClojureScript to calculate
progress in Conway's Game of Life (CGoL). Then it shifts
to generating the data structures that ClojureScript uses for
generating web pages. Once this is done, the user can bring the
the functions for CGoL to bear, and display it in the window.

## Library Namespaces

To ease the operations for the user, and to closely mimic the APL
process, a few library namespaces have been created.

`life.matrix` includes several matrix functions to help implement
the APL approach, such as an operation for converting boolean
true/false to 1/0. There are also other APL-style boolean operations
that work on 1/0 and can be applied to matrices.

`life.display` does simple printing of 2D, 3D and 4D matrices,
similarly to the `disp` function in the APL video.

`life.web` is the web application. This is the thing that first gets
run. It sets up React, creates an atom to contain application state
and renders the page whenever the application state changes.

`life.page` contains the functions for displaying the page. It also
contains the data and script for the demo.

`live.evaluator` contains the code for executing the script or user
typed commands.


## License

Copyright © 2018 Paula Gearon

Distributed under the EPL 1.0 - the same as Clojure
