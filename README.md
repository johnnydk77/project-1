# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

Day	Deliverable	Status

Day 1	Project Description	Complete √

Day 2	Wireframes / Priority Matrix / Functional Components	Complete √

Day 3	Core Application Structure (HTML, CSS, etc.)	Complete √

Day 4	Pseudocode / JS MVP	Complete √

Day 5	Full Working JS	Complete √

Day 6	Present	Incomplete


## Project Description

It's time to play Connect Four! That family friendly classic that incorporates strategy and cunning to defeat the opponent!

Create a game of Connect Four for two competing players. The players will be able to place a game piece into the game board and have that move give them feedback. Each player will be able to place a piece into the gameboard until a winner is announced! The game will include a CSS animation that will reward whomever reaches the unltimate goal of placing four pieces in a row!

## Wireframes

https://docs.google.com/document/d/17ic8-phhzC_KGeopy9GP8YnEOqYrOGNZMPx985BHIuU/edit
https://docs.google.com/document/d/1W2r5doJ_4huqDOu3Fcl4XV7HpURBsDWfqet-H8w8WOE/edit

## Priority Matrix

https://docs.google.com/document/d/1FQdASinsUyHjOQZpCHHVTIDlDtfhqT6K5lMvt4uM8XQ/edit 
https://docs.google.com/document/d/1pgOa_Q8pEhpDbVJbB15u0FPDuEUg3b7ePQCX8QIr_YA/edit

### MVP/PostMVP - 5min


#### MVP 


// - Start Game
Add eventListener for moves check √


// - Switch Turns
If else statements {} check √

// - Pieces played in cells remain in place.  check √


// - Display Message for player’s turns check √


Track Player’s turn and alert to moves. check √

Check for winner (number of ways to win) very exhausting check √

Game reset check √



#### PostMVP 



add CSS animation that rewards winner with a game piece changing and becoming very special! 

I got two CSS animations.......so? Complete √

GAME COMPONENTS.

User should be able to drop an individual piece into a designated cell
 
When a piece is played the next player will choose the next cell and move to desired cell.
Visual feedback of player moves should be indicated.

Once a player has placed four pieces in a row the game is over and a winner will be announced.
		 
Once a winner has been declared the game will reset and be able to play again.


Anticipated Challenges:

  Getting js to be fully functional and able work without bugs.
  
  Having all design elements work with DOM elements properly.
  





Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component| Priority| Estimated Time| Time Invetsted| Actual Time|
| --- | :---: | :---: | :---: | :---:|
|Wireframes|	H|	3hrs|	0hrs|	2.5hrs|
|Project Worksheet|	M|1hrs	|0hrs	|0hrs|
|Game Init|	H|	4hrs|	0hrs|	0hrs|

Selecting Box	H	4hrs	0hrs	0hrs  check √

Switching Players	H	4hrs	0hrs	0hrs  check √

Winning Logic - One Row Only	H	4hrs	0hrs	0hrs check √

Landing Page	L	3hrs	0hrs	0hrs 

Game Reset	L	3hrs	0hrs	0hrs check √

Total	H	27hrs	0hrs	0hrs



## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

 const winningCombos = [
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [0, 8, 16, 24], [7, 15, 23, 31], [14, 22, 30, 38],
        [1, 9, 17, 25], [8, 16, 24, 32], [15, 23, 31, 39],
        [2, 10, 18, 26], [9, 17, 25, 33], [16, 24, 32, 40],
        [3, 11, 19, 27], [10, 18, 26, 34], [17, 25, 33, 41],
        [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24],
        [10, 16, 22, 28], [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31],
        [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38]

    ]

    ha,ha,ha,ha.

    But actually.....this snipet. Merely because after all the more complicated code figuring out the icing just about made me cry lol.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

 It was a mistake to not set the game to two players. I should have changed that early on. But I didn't.  

 So I needed to change the whole way that I was going get the for loops I wanted to use.





## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 The first major issues to pop up was how to not just toggle between the colors of the game, but how to get the "pieces" themselves to stay put. By using html/css to design the board and not a js grid this proved tricky. I wasn't able to get the colors to stay because the js wasn't recognizing a fixed postion on a grid. Thanks to Mohemmed I used parseInt to allow the id's to become an assigned integer value and exact location. 

 I was feeling pretty good about what I thought was going to be the biggest challenge. That was naive and foolish of me. Check winner. Ugh. Check winner proved way more difficult than anticipated. I knew that I needed to find a way to give the 69 different winning combinations a way to stop when reached. I knew a for loop was going to get me there. But that also may have been foolish on my part. In order for the for loop to recognize the exact location of the array being pushed required some new methods (Thanks Rachel!) Had to nest for loops and check the winning combos first inside the loop. Then had to create an outside for loop with a count to grab the pushed arrays from the previous loop. Hell, even worked on the diagonal (and yes I am still in shock and awe of that!)

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object





