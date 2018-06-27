var topics = ["Tyrion Lannister", "Sansa Stark", "Jon Snow", "Sandor Clegane"];


$("#addbutton").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().toLowerCase().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=ARFdgYuf2LhxdZovp6mT9SZ3TXjVUyTX&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

        if (response.data.length == 0) {
            alert("Didn't find anything for this one, try again!");
        }
        else if (topics.indexOf(topic) != -1) {
            alert("Already got that one, try another.");
        }
        else {
            topics.push(topic);
            makeTheButtons();
        }

    });
});

function makeTheButtons () {
    $(".show-buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("topic");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $(".show-buttons").append(newButton);
    }
};


function makeGifs () {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=ARFdgYuf2LhxdZovp6mT9SZ3TXjVUyTX&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      $(".show-gifs").empty();
      for (var i = 0; i < response.data.length; i++) {
          var gifDiv = $("<div>");
          gifDiv.addClass("gifDiv");
          gifDiv.html("<p>Rating: " + response.data[i].rating.toUpperCase() + "</p>");
          var gifImage = $("<img src='" + response.data[i].images.fixed_height_still.url + "'>");
          gifImage.addClass("gif");

          var imageDiv = $("<div>");
          imageDiv.addClass("play");
          imageDiv.attr("data-state", "still");
          imageDiv.attr("data-name", topic);
          imageDiv.attr("data-still", response.data[i].images.fixed_height_still.url);
          imageDiv.attr("data-animate",response.data[i].images.fixed_height.url)
          
          $(imageDiv).append(gifImage);
          $(gifDiv).append(imageDiv);
          $(".show-gifs").append(gifDiv);
      }

    });
};

function animate () {

    if ($(this).attr("data-state") == "still") {
        $(this).html("<img src='" + $(this).attr("data-animate") + "'>");
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).html("<img src='" + $(this).attr("data-still") + "'>");
        $(this).attr("data-state", "still");
    }

};


$(document).on("click", ".topic", makeGifs);
$(document).on("click", ".play", animate);


makeTheButtons();
