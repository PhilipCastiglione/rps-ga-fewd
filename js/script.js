function playGame() {
    // GET USER INPUT AND STORE IN VARIABLE
    var userInput = event.target.dataset.input;
    // UPDATE THE USER'S IMAGE ON THE PAGE
    $('.userResult').attr('src', 'images/' + userInput + '.jpg');

    // GET THE BOT INPUT AND STORE IN VARIABLE
    var botInput = function() {
      var r = Math.random();
      if (r < 0.3334) {
        return 'rock';
      } else if (r < 0.6667) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }();
    // UPDATE THE BOT'S IMAGE ON THE PAGE
    $('.botResult').attr('src', 'images/' + botInput + '.jpg');

    // DETERMINE THE WINNER AND STORE IN VARIABLE
    var winner = function() {
      if (userInput === botInput) {
        return 'draw';
      } else if (userInput === 'rock') {
        return (botInput === 'paper')? 'bot' : 'player';
      } else if (userInput === 'paper') {
        return (botInput === 'scissors')? 'bot' : 'player';
      } else {
        return (botInput === 'rock')? 'bot' : 'player';
      }
    }();

    // GET THE USER AND BOT SCORE ELEMENTS ON THE PAGE AND PUT THEM IN VARIABLES
    // THIS IS SO I CAN BE LAZY AND JUST USE THE SHORT VARIABLE NAME IN THE NEXT BIT
    var $u = $('.userScore');
    var $b = $('.botScore');
    var $g = $('.gameResult');

    // CHECK WHO THE WINNER WAS, THEN UPDATE THE GAME RESULT TEXT AND THE SCORES
    switch(winner) {
      case 'player':
        $g.text('WIN!');
        $u.text(+$u.text() + 1);
        break;
      case 'bot':
        $g.text('LOSE!');
        $b.text(+$b.text() + 1);
        break;
      case 'draw':
        $g.text('DRAW!');
        $u.text(+$u.text() + .5);
        $b.text(+$b.text() + .5);
        break;
    }
}

// BUT ACTUALLY ALL THAT STUFF WAS JUST A FUNCTION
// SO LET'S ACTUALLY DO IT WHEN THE DOCUMENT IS READY AND THE USER CLICKS
$(document).ready(function() {
  $('.userInput').click(playGame);
});