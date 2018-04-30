window.onload = function () {
    var mycookies = document.cookie.split(",");
    var myname = mycookies[0];
    var dictonaryname = myname.split("=");
    var UserName = dictonaryname[1];
    var MyLevel = mycookies[1];
    var dictonaryLevel = MyLevel.split("=");
    var Level = dictonaryLevel[1];
    var score = mycookies[2].split("=");
    var currentScore = score[1];
    document.getElementById('Name').value = UserName;
    document.getElementById('CurrentScore').innerHTML = currentScore;
};
//# sourceMappingURL=gameOver.js.map
