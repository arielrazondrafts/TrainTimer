// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIc9DoktG6znVkPYQHaxsU8mAxsDao3cA",
    authDomain: "traindata-facc8.firebaseapp.com",
    databaseURL: "https://traindata-facc8.firebaseio.com",
    projectId: "traindata-facc8",
    storageBucket: "traindata-facc8.appspot.com",
    messagingSenderId: "359220768101",
    appId: "1:359220768101:web:eb41735e2b6c5ce7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var trainData = firebase.database()
var trainRef = trainData.ref('trains')

trainRef.push({
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency:frequency,
})

$("#submit").on("click", function () {
    event.preventDefault();
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();
    var trainData = {}


})

$(document).on("load","#trainTimes",function(){
    trainRef()
$("#trainTimes").append()
})

//Setting the value of the entire database
database.ref().set({
    propertyName:/* Property Value*/,
    secondPropertyName:/* Second Property Value*/,
})
//Setting the value of propertyName only
database.ref("/propertyName").set(/* Property value */);
//Setting the value of secondPropertyName only
database.ref("/secondPropertyName").set(/* Second Property value */);
//Getting the database value whenever it changes
database.ref().on("value", function (snapshot) {
    //Getting the current value in the whole database
    var databaseValue = snapshot.val();
})
//Getting the value of propertyName only whenever it changes
database.ref("/propertyName").on("value", function (snapshot) {
    //Getting the current value of propertyName in the database
    var propertyNameValue = snapshot.val();
})
//Getting the value of secondPropertyName only whenever it changes
database.ref("/secondPropertyName").on("value", function (snapshot) {
    //Getting the current value of secondPropertyName in the database
    var secondPropertyNameValue = snapshot.val();
})




