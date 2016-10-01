$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-thesingh603/master/dhruv.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.nickNames, function(key, value){
      $("#nicknames").append("<li>" + value.nick + "</li>");
    $.each(data.mixTape, function(key, value){
      $("#nicknames").append("<li>" + value.mix + "</li>");
    });
  });
});
});
