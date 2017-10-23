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
  console.log(counter);
  name = $("#player-name").val().trim();
  var playOneWin = 0;
  var playOneLoss = 0;
  database.ref("/playerinfo").push({
    name: name,
    onewin: playOneWin,
    oneloss: playOneLoss,
    dateadded: firebase.database.ServerValue.TIMESTAMP,
    counter: counter
    });
    }

  else if (counter === 1) {
    console.log(counter);
    name = $("#player-name").val().trim();
    var playTwoWin = 0;
    var playTwoLoss = 0;
    database.ref("/playerinfo").push({
      name: name,
      twowin: playTwoWin,
      twoloss: playTwoLoss,
      dateadded: firebase.database.ServerValue.TIMESTAMP,
  });
  name=name;
  twoWin=playTwoWin;
  twoLoss=playTwoLoss;
}
counter++;
});



database.ref("/playerinfo").on("child_added", function(childSnapshot) {
console.log(counter);
 if (counter === 0) {
  // full list of items to the well
  $("#playername-1").text("hi, " + childSnapshot.val().name);
  $("#one-score").text("Wins: " + childSnapshot.val().onewin + " Losses: " + childSnapshot.val().oneloss);
  $("#image-holder1 h4").text('');
  $('#image-holder1').append('<img id="paper1" src="assets/images/paper.png">');
  $('#image-holder1').append('<img id="paper1" src="assets/images/rock.png">');
  $('#image-holder1').append('<img id="paper1" src="assets/images/scissors.png">');
  $("name-submit").text('');
}
else if (counter === 1) {

  $("#playername-2").text("hi, " + childSnapshot.val().name);
  $("#two-score").text("Wins: " + childSnapshot.val().twoWin + " Losses: " + childSnapshot.val().twoLoss);
  $("#image-holder2 h4").text('');
  $("#image-holder2").append('<img id="paper2" src="assets/images/paper.png">');
  $("#image-holder2").append('<img id="paper2" src="assets/images/rock.png">');
  $("#image-holder2").append('<img id="paper2" src="assets/images/scissors.png">');
  $("#status-update h4").text("Player One, you're up! Select paper, rock, or scissors");
}
else {
  alert("you fucked up");
}

// Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

//When update to the Firebase server takes place, update accordingly
