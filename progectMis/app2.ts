window.onload = function () {

   

        var mycookies = document.cookie.split(",");
        var myname = mycookies[0];
        var dictonaryname = myname.split("=");
        var UserName = dictonaryname[1];
        var MyLevel = mycookies[1];
        var dictonaryLevel = MyLevel.split("=");
    var Level = dictonaryLevel[1];
    var score = mycookies[3].split("=");
    var HighScore = score[1];
    document.getElementById('difficulty').innerHTML = Level;
    document.getElementById('firstname').innerHTML = UserName;
    document.getElementById('HighScore').innerHTML = HighScore;


    
}
function RemoveCookie() {
    alert(" Are you sure?");
  

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

   
  
			
    

}
function compa() { document.location.replace("game.html")}
