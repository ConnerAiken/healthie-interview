# TODO App

Make a frontend-only todo list app.
● It has three vertical lists. Todo, Doing, and Done
● Items are created via a form (they can be stored in browser state, no need to have a backend)
● Items are draggable from one list to another
● Items can be reordered within a list
● When you drag an item into the Done list, confetti explodes on the screen! Or something else interesting. You can use a package for this.
● Overall the app has a usable design with a unique color palette. You are free to make whatever UI and UX decisions you want to make it usable. Don't worry, we aren't looking for a groundbreaking innovative design. Just lay things out decently and add some colors.

## How to run

-   Clone the repo
-   Run `npm install` in root of the `todo-app` folder
-   Run `npm start`
-   Load the app via `http://localhost:3000` in a browser

## Assumptions

-   I think redux would be overkill for this, maybe even a router since we only have one route. I prop drilled two levels though which is when I would start to consider something like the context api or redux.
-   I'll assume this is not a mobile responsive app but I'll make it relatively responsive
-   I assume it is ok to use packages for the draggable functionality

## What I would have done next

A couple things bothered me:

-   The position of where you drag the todo item should apply. In other words, if you drag an item to the middle of the list, it should go there and not at the top or bottom. So instead of a button-based reordering, I would do drag based.
-   The drag zone for the columns is not obvious
-   I'd apply useCallback/useMemo as necessary
-   I'd use an identifier for each todo, right now duplicate titles do not behave properly
-   I'd remedy the mixture of primeflex classes, scss and prime react customization and have a standardized approach
