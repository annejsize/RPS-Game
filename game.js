// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLRhewtixJIkuLCz_BSEqCSBDw9CQitII",
  authDomain: "rps-game-40aa4.firebaseapp.com",
  databaseURL: "https://rps-game-40aa4.firebaseio.com",
  projectId: "rps-game-40aa4",
  storageBucket: "",
  messagingSenderId: "355140083797"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// ------------------------------------
// Initial Values


var playOneName = " ";
var playTwoName = " ";
var counter = 0;

// --------------------------------------------------------------
// What happens when the user clicks on the button;

$("#name-submit").on("click", function(event) {
  event.preventDefault();

if (counter === 0) {
      counter++;
      name = $("#player-name").val().trim();
      var playOneWin = 0;
      var playOneLoss = 0;

      // Code for the push
      database.ref().push({
        name: name,
        onewin: playOneWin,
        oneloss: playOneLoss,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

 name=name;
 oneWin=playOneWin;
 oneLoss=playOneLoss;

  // Add name, scores, and icons to player one sreen
  $("#playername-1").text("hi, " + name);
  $("#one-score").text("Wins: " + oneWin + " Losses: " + oneLoss);
  $("#image-holder1 h4").text('');
  $('#image-holder1').append('<img id="paper1" src="assets/images/paper.png">');
  $('#image-holder1').append('<img id="paper1" src="assets/images/rock.png">');
  $('#image-holder1').append('<img id="paper1" src="assets/images/scissors.png">');
  $("name-submit").text('');
} else if (counter ===1) {

  counter++;
  name = $("#player-name").val().trim();
  var playTwoWin = 0;
  var playTwoLoss = 0;

  // Code for the push
  database.ref().push({
    name: name,
    twowin: playTwoWin,
    twoloss: playTwoLoss,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  name=name;
  twoWin=playTwoWin;
  twoLoss=playTwoLoss;

  $("#playername-2").text("hi, " + name);
  $("#two-score").text("Wins: " + twoWin + " Losses: " + twoLoss);
  $("#image-holder2 h4").text('');
  $("#image-holder2").append('<img id="paper2" src="assets/images/paper.png">');
  $("#image-holder2").append('<img id="paper2" src="assets/images/rock.png">');
  $("#image-holder2").append('<img id="paper2" src="assets/images/scissors.png">');
  $("#status-update h4").text("Player One, you're up! Select paper, rock, or scissors");
}
});

//When update to the Firebase server takes place, update accordingly
