class GameLogic {
     constructor() {
          this.player1 = [];
          this.player2 = [];
          this.winningMoves=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
     }

     totalMoves(){
     return this.player1.length + this.player2.length
     }

     playerMove(player, number){
          player.push(number); 
     }

     // player2Move(number){
     //      this.player2.push(number); 
     // }

     checkMoves(superset, subset){
          let counter=0
          subset.map(function(item){
               if(superset.includes(item)) {counter++}
          })
          return counter
     }

     winCheck(currentPlayer){
          if (currentPlayer.length < 3) return false;
          let result = this.winningMoves.map(function(combo){
               var result = this.checkMoves(currentPlayer, combo)
               if (result < 3){return false} 
               else {return true}
          }.bind(this))
          if (result.includes(true)){
               return true}
          else {return false}          
     }

}

module.exports = GameLogic;



