    $(document).ready(function() {

    var q1 = "C";
    var q2 = "B";
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;

    $(".quiz").hide();
    $("#results").hide();
    $("#start").click(function() {
        //function for timer
        $(".button").remove();
        //displays questions//
        $(".quiz").show();

        (function() {
            var counter = 31;

            setInterval(function() {
                counter--;
                if (counter >= 0) {
                    span = document.getElementById("timer");
                    span.innerHTML = counter;
                }
                if (counter === 0) {
                    clearInterval(counter);
                    var checked = $(":checked")
                    $("#timer").remove();
                    $(".quiz").remove();
                    $(".done").remove();
                    $("#results").show();
                    for (var i = 0; i < checked.length; i++) {
                        if ($(checked[i]).data("correct")) {
                            correctCounter++;
                        }
                        else {
                            incorrectCounter ++;
                        }
                    }
                    $(".correct").append("Correct: " + correctCounter);
                    $(".incorrect").append("Incorrect: " + incorrectCounter);
                
                }
            }, 1000);

            $("#done").click(function() {
                clearInterval(counter);
                var checked = $(":checked")
                var empty = $('input:radio[name=question]:checked').val();
                $("#timer").remove();
                $(".quiz").remove();
                $(".done").remove();
                $("#results").show();
                for (var i = 0; i < checked.length; i++) {
                    if ($(checked[i]).data("correct")) {
                        correctCounter ++;
                    }
                    else {
                        incorrectCounter ++;
                    }
                }
                $(".correct").append("Correct: " + correctCounter);
                $(".incorrect").append("Incorrect: " + incorrectCounter);
            });

        })();
    });
    

});