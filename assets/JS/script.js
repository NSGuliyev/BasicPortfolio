$(document).ready(function (){

    // Variables 
    var saveButton = $(".save-button");
    var data;

    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    changeColor();

    setInterval(function () {
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        changeColor();
    }, 1000);


    for (var i = 9; i < 17; i++) {
        $('#' + 1).val(localStorage.getItem("hour " + 1 ));
    }

    saveButton.click(function () {
        event.preventDefault();

        var a = this;
        var results = a.previousElementSibling.firstElementChild;

        data = $(results).val().trim();

        var time = results.id;

        localStorage.setItem("hour " + time,data);

    });


// Changing color depending on hour of the day

    function changeColor() {
        for (i = 9 ; i <= 17; i++) {

            var currentTime = moment().hour();

            if (currentTime === i) {
                $("." + i).attr("style", "background-color: red");
            }

            else if (currentTime > i) {
                $("." + i).attr("style", "background-color: #00A099");
            }
        }  
    }
});