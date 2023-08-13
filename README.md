## Analyze the app's functionality

 MVP (Minimal Viable Product)
As a user
- I want to be able to have 2 players, because that is how Tic Tac Toe is played
- I want to be able to take turns and know whose turn it is
- I want to alternate placing x and o into 1 of 3 columns
- I want to be able to win if I get 3 in a row
- I want to know who won or if it was a tie
- I want to be able to play the game again if it is over

If I have some time I would like to add these:

- I want a success animation
- I want to keep track of total wins and losses
- Add fun styling

## Think about the overall design (look and feel) of the app
- clean
- green and orange x and o

## Pseudocode

- 1 Define required constants

- 2 Define required variables used to track the state of the game

- 3 Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

- 4 Upon loading the app should:
  4.1 Initialize the state variables
  4.2 Render those values to the page
  4.3 Wait for the user to click a square

- 5 Handle a player clicking a square

- 6 Handle a player clicking the replay button

## Identify the application's state (application-wide data)
- game board- array of 3 nested arrays
```js
let board
```

- turn var
```js
let turn
```

- winner var
```js
let winner
```