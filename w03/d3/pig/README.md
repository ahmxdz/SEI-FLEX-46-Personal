- Two players take turns rolling a die
- Each player keeps score. Each time a player rolls, the score on
the die is added to their total score (unless it is a 1, in which case
their total gets set to zero and they lose their turn)
- On each turn a player has the option to either roll or hold. If a player
holds, their total score doesnt change, but the next player gets to roll
- The first player to have a total of MAX_SCORE or greater, wins the game


## Example of Game Play

p1  
--> r
3
totalScore = 3
---> r
4
totalScore = 7
--> r
1
totalScore = 0

p2
-->r
1
totalScore = 0

p1
-->r
6
totalScore = 6
-->h

p2
-->r
.
.
.
etc
