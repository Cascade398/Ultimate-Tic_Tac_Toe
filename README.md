# Ultimate-Tic_Tac_Toe

Ultimate Tic-Tac-Toe (https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe) is is a board game composed of nine tic-tac-toe boards arranged in a 3 × 3 grid. Players take turns playing in the smaller tic-tac-toe boards until one of them wins in the larger tic-tac-toe board. Compared to the traditional tic-tac-toe, strategy in this game is conceptually more difficult and has proven more challenging for computers.

Similar to projects of making a Tic-Tac-Toe game, a staple of beginner programming courses, I have tried to implement an Ultimate Tic-Tac-Toe board. This project has been implemented using HTML, CSS and Javascript. The Ultimate_TTT directory stores all the assets, including the stylesheet and the scripts, with the HTML providing a web-based UI.

# Rules

Each small 3 × 3 tic-tac-toe board is referred to as a local board, and the larger 3 × 3 board is referred to as the global board.

The game starts with X playing wherever they want in any of the 81 empty spots. This move "sends" their opponent to its relative location. For example, if X played in the top right square of their local board, then O needs to play next in the local board at the top right of the global board. O can then play in any one of the nine available spots in that local board, each move sending X to a different local board.

If a move is played so that it is to win a local board by the rules of normal tic-tac-toe, then the entire local board is marked as a victory for the player in the global board. In case of a draw on the local board, both players can use is to complete the 
Once a local board is won by a player or it is filled completely, no more moves may be played in that board. If a player is sent to such a board, then that player may play in any other board.

Game play ends when either a player wins the global board or there are no legal moves remaining, in which case the game is a draw.

![image](https://user-images.githubusercontent.com/18391873/133785861-8808f4eb-f66f-416c-8c34-79d13ef22bcc.png)

In this implementation, the yellow squares show the squares where the player is allowed a move. The squares of a local board which has been won are filled with the mark of player who won that board, and in case of a draw the sqaures are marked "D". In case a player wins, the three local boards which "create" the winning set are colored green. To assist the user, a text below the board tells which player has the turn, or if the game is over if a player won it/game is drawn. Below the text the reset button is present, in case the user wish to restart the game at any point.

![image](https://user-images.githubusercontent.com/18391873/133787470-5b6b7c28-99ea-4818-8a3d-03da69d7ed0a.png)


