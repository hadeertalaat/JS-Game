if (document.cookie.length != 0) {
    location.replace("welcome.html")
}

function addCookies() {
    var user = "userName=" + document.getElementById('firstname').value + ",";
    var dif = "dif=" + document.getElementById('difficulty').value + ",";
    var score = "currentScore=" + "0" + ",";
    var sco = "highScore=" + "0" + ",";
    document.cookie = user + dif + score + sco;
}
//# sourceMappingURL=app.js.map
