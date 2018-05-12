function getCat(){
    var uri = "https://aws.random.cat/meow";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        var catJSON = JSON.parse(xhr.responseText);
        document.getElementById("catPic").src = catJSON.file;
    }
    xhr.send(null);
}