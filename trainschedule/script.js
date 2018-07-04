var config = {
  apiKey: "AIzaSyCUXLm4MJrQAwWJtKH8TrebNus4CGBg5SU",
  authDomain: "trainscheduler-bbd45.firebaseapp.com",
  databaseURL: "https://trainscheduler-bbd45.firebaseio.com",
  projectId: "trainscheduler-bbd45",
  storageBucket: "trainscheduler-bbd45.appspot.com",
  messagingSenderId: "312095832761"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

var myTimer = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    $("#current-time").text(d.toLocaleTimeString());
}

// Initial Values
var train = "";
var destination = "";
var frequency = "";

// Capture Button Click
$("#add-train").on("click", function(event) {
  event.preventDefault();
  
  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  train = $("#train-input").val().trim();
  destination = $("#destination-input").val().trim();
  firstTrain = moment($("#first-train").val().trim(), "HH:mm").format("HH:mm");
  frequency = parseInt($("#frequency-input").val().trim());
  console.log(typeof firstTrain);
  // Creates local "temporary" object for holding employee data
  console.log(firstTrain);
  console.log(typeof firstTrain);
  var firstTrainConverted = moment(firstTrain, "hh:mm");
  console.log(firstTrainConverted);
  var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
  console.log(diffTime);
  var tRemainder = diffTime % frequency;
  console.log(tRemainder);
   var minutesTillTrain = frequency - tRemainder;
  console.log(minutesTillTrain);
  // var nextTrain = firstTrainConverted.add(diffTime + minutesTillTrain).minutes();
  var nextTrain = moment().add(minutesTillTrain, "minutes");
  var nextTrain2 = moment().add(2, "minutes")
  console.log("num1" + nextTrain);
  console.log("num2" + nextTrain2);
  nextTrain = moment(nextTrain).format("HH:mm");
  console.log("num1" + nextTrain);
  
//   
  
  
   // var currentTime = moment().format("HH:mm");
    // console.log(currentTime);
  
  // Code for the push
  dataRef.ref().push({
    
    train: train,
    destination: destination,
    frequency: frequency,
    nextTrain: nextTrain,
    minutesTillTrain: minutesTillTrain,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    
  });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {
  
  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().train);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().frequency);
  console.log(childSnapshot.val().nextTrain);
  console.log(childSnapshot.val().minutesTillTrain);
  
  
  // full list of items to the well
  $("#full-schedule").append
  ("<tr>" + 
  "<td class='train'>" + childSnapshot.val().train + "</td>" +
  "<td class='destination'>" + childSnapshot.val().destination + "</td>" +
  "<td class='frequency'>" + childSnapshot.val().frequency + "</td>" +
  "<td class='frequency'>" + childSnapshot.val().nextTrain + "</td>" +
  "<td class='frequency'>" + childSnapshot.val().minutesTillTrain + "</td>"
  + "</tr>");

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
    
dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
  // Change the HTML to reflect
  $("#train-display").text(snapshot.val().train);
  $("#destination-display").text(snapshot.val().destination);
  $("#frequency-display").text(snapshot.val().frequency);
  
});