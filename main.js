const team = {
  _players: [
          {
firstName: 'Victor',
lastName: 'Oshimen',
age: 20
},
{
firstName: 'Marcus',
lastName: 'Rashford',
age: 23
},
{
firstName: 'Jadon',
lastName: 'Sancho',
age: 20
}
  ],
  _games: [
    {
opponent: 'Chelsea',
teamScore: 4,
opponentScore: 1
},
{
opponent: 'Villereal',
teamScore: 5,
opponentScore: 0
},
{
opponent: 'West Ham',
teamScore: 3,
opponentScore: 1
},
  ],

get players () {
return this._players;
},  
get games () {
return this._games;
},

addPlayer (firstName, lastName, age) {
 let player = {
   firstName : firstName,
   lastName : lastName,
   age : age
 };
  this.players.push(player);
},

addGame (opp, myScore, oppScore ) {
  let game = {
    opponent : opp,
    teamScore : myScore,
    opponentScore : oppScore
  };
  this.games.push(game);
}

};



team.addPlayer('Mason', 'Mount', 26);
team.addPlayer('Emmanuel', 'Dennis', 27);
team.addPlayer('Bukayo', 'Saka', 20);

team.addGame('Norwich', 4, 1 );
team.addGame('Burnley', 2, 1 );
team.addGame('Manchester City', 3, 0 );

console.log(team.players());








