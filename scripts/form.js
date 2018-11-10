$(document).ready(function(){
    $('butt').click(function(){
        var capcha = $('#cap').val();
        if(capcha != "7" && capcha != "seven" && capcha != "Seven"){
            alert("You have been deemed a robot, as the answer was incorrect");
        }
    })
})