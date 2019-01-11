




  var Player = function(name, score, status){
    this.name = name;
    this.score = score;
    this.status = status;
  }
  
  Player.prototype.scorePlus = function(){
    this.score += roundTotal;
  }
  
  var playerOne = {};
  var playerTwo = {};
  //function that throws dice
  var rolled = 0;
  var roundTotal = 0;
  var roll = function(){
    rolled = Math.floor(Math.random()*6) + 1;
    $("#new-dice").remove();
    $(".dice-img").prepend("<img id='new-dice' src='images/dice"+rolled+".png' alt='Dice "+rolled+"'>");
    if (rolled != 1){
      roundTotal += rolled
    } else {
      roundTotal = 0;
      turnPlayer();
    }
  }