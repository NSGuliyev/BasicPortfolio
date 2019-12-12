$(document).ready(function (){

    // Variables 
    var saveButton = $(".save-button");
    var data;

    console.log("The current hour is " + moment().hour());

    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    setInterval(function () {
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);


    saveButton.click(function () {
        event.preventDefault();
        console.log("I've been clicked");
        
    })





})