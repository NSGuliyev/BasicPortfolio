$(document).ready(function (){

    // Variables 
    var saveButton = $(".save-button");
    var data;

    console.log("The current hour is " + moment().hour());

    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // changeColor();




    setInterval(function () {
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);


    for (var i = 9; i < 17; i++) {
        $('#' + 1).val(localStorage.getItem("hour " + 1 ));
    }


    saveButton.click(function () {
        event.preventDefault();
        console.log("I've been clicked");


        var a = this;
        var results = a.previousElementSibling.firstElementChild;
        console.log($(results));

        data = $(results).val().trim();
        console.log(data);

        var time = results.id;
        console.log("hour " + time);

        localStorage.setItem("hour " + time,data);

    });

    





})