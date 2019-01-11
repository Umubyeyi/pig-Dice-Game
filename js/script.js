




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
   //function to change players turns
   var turnPlayer = function(){
    if (playerOne.status == "enabled") {
      playerOne.status = "disabled";
      playerTwo.status = "enabled";
      $(".one-turn").hide();
      $(".two-turn").show();
    } else if (playerTwo.status == "enabled") {
      playerOne.status = "enabled";
      playerTwo.status = "disabled";
      $(".two-turn").hide();
      $(".one-turn").show();
    }
  }
  // function Winner
  var winner = function(){
    if (playerOne.score >= 50){
      $(".dice-img").text("!!!" + playerOne.name + "  WINS !!!")
      swal({
        title: "!!!" + playerOne.name + "  WINS !!!",
        icon: "success",
        button: "OK!",
      });
      $("#roll").prop("disabled", true);
      $("#hold").prop("disabled", true);
    } else if (playerTwo.score >= 50){
      $(".dice-img").text("!!!" + playerTwo.name + "  WINS !!!")
      swal({
        title: "!!!" + playerTwo.name + "  WINS !!!",
        icon: "success",
        button: "OK!",
      });
      $("#roll").prop("disabled", true);
      $("#hold").prop("disabled", true);
    }
  }
  