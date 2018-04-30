window.onload=function(){

    var mycookies = document.cookie.split(",");
    var myname = mycookies[0];
    var dictonaryname = myname.split("=");
    var UserName = dictonaryname[1];
    var MyLevel = mycookies[1];
    var dictonaryLevel = MyLevel.split("=");
    var Level = dictonaryLevel[1];
    var score = mycookies[3].split("=");
    var HighScore = score[1];
    (<HTMLInputElement> document.getElementById('userName')).value = UserName;
    document.getElementById('currentScore').innerHTML = HighScore;


}