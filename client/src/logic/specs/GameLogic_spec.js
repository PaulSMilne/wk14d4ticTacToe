var GameLogic = require('../GameLogic.js')
var assert = require('assert')


describe('Game', function(){
     beforeEach(function(){
          logic = new GameLogic();
     })

     it('should start with two empty arrays of player moves', function(){
          assert.equal(0, logic.player1.length)
          assert.equal(0, logic.player2.length)
     })

     it('should keep track of the total number of moves', function(){
          logic.player1=[1,3,8]
          logic.player2=[2,4,]
          let totalMoves = logic.totalMoves()
          assert.equal(5, totalMoves)
     })

     it('should push a specified number into one of the playerMoves arrays', function(){
          logic.playerMove(logic.player1, 3)
          logic.playerMove(logic.player1, 2)
          assert.deepEqual([3,2], logic.player1)
     })

     it('should compare two arrays to determine if one is a subset of the other', function(){
          let array1=[5,1,3,9,2]
          let array2=[1,2,3]
          let wins = logic.checkMoves(array1, array2);
          assert.equal(3, wins)
     })

     it ('should return false when checking for win if the players moves are less than 3', function(){
          let moves=[5,1]
          let result = logic.winCheck(moves)
          assert.equal(false, result)
     })

     it ('should return true when checking for win if the players moves contains a winning combination', function(){
          let moves = [5,1,6,4,7]
          let result = logic.winCheck(moves)
          assert.equal(true,result)
     })
     it ('should return false when checking for win if the players moves doesn not contain a winning combination', function(){
          let moves = [5,1,6,4,]
          let result = logic.winCheck(moves)
          assert.equal(false,result)
     })
})