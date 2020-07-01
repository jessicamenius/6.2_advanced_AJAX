$(document).ready(function () {
  var inputText = "";
  var apiKey = "UBMuMOoGDKWUkY4YRqXYYyNDZco4oTw1";

  $("#submitBtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#inputText").val();
    $("#inputText").val("");
    console.log(inputText);

    //sets up ajax get request
    $.ajax({
      type: "GET",
      url: `https://api.giphy.com/v1/gifs/search?q=${inputText}&limit=5&api_key=${apiKey}`,
      dataType: "json",
    }).then(function (response) {
      var randNum = Math.floor(Mathrandom() * response.data.length);
      console.log(response.data[randNum].images.original.url);
      var gif = response.data[randNum].images.original.url;
      $("body").prepend(`<img src ="${gif}"></img>`);
    });
  });
});
