<h1> Pomodoro-Timer </h1>

<h2> Purpose </h2>

The goal of this project was to create a time-management app that is based off of the Pomodoro technique.

The project was completed by utilizing the following skills:

* Work with rendering and state management using React.

* Writing React function components.

<h2> Project Requirements </h2>

* All props are treated as read-only.

* Audio plays when the focus timer expires.

* Audio plays when the break timer expires.

* All state is updated using callbacks to avoid race conditions. Allowable exceptions are cases where the next state is not determined by the current state. For example, when disabling the timer, it is okay to just call setIsTimerRunning(false).

* There are at least three components.

* Each component has a single responsibility.

* The main Pomodoro is free of any conditional display logic. This means that there aren't any if statements in the render function; each component determines its own visibility.
