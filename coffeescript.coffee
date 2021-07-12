topic="";
lcfs = (s) ->
    topic = "CoffeeScript";
    console.log "[#{topic}] - #{s}";

$(document).ready ->
    lcfs "Page Loaded!!!";