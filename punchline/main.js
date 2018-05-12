clearPreviousJoke();

function getJoke(){
    clearPreviousJoke();
    var uri = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        var jokeData = JSON.parse(xhr.responseText);
        document.getElementById("setup").innerHTML = jokeData.setup;
        jokePunchline = jokeData.punchline;
        document.getElementById("punchlineBtn").style.display = "block";
    }
    xhr.send(null);
}

function getPunchline(){
    document.getElementById("punchline").innerHTML = jokePunchline;
}

function clearPreviousJoke(){
    document.getElementById("setup").innerHTML = "";
    document.getElementById("punchline").innerHTML = "";
    jokePunchline = "";
    document.getElementById("punchlineBtn").style.display = "none";
}