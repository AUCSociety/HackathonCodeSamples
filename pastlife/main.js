clearPreviousPastLife();

function getPastLife(){
    clearPreviousPastLife();
    var uri = "http://uinames.com/api/";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        var pastlifeData = JSON.parse(xhr.responseText);
        document.getElementById("year").innerHTML = "Born: " + Math.round(Math.random() * (2018-1000)+1000);
        document.getElementById("name").innerHTML = "Name: " + pastlifeData.name + " " + pastlifeData.surname;
        document.getElementById("country").innerHTML = "Country: " + pastlifeData.region;
        
    }
    xhr.send(null);
}

function clearPreviousPastLife(){
    document.getElementById("year").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("country").innerHTML = "";
}