var duration = 10;
	
				if(document.cookie.length != 0)
				{
					var myCookiearray = document.cookie.split(",");
					var namestat = myCookiearray[0];
					var difficultystat = myCookiearray[1];
					
					var name = namestat.split("=")[1];
					var diff = difficultystat.split("=")[1];
					if(diff == "Easy")
					{duration =15;}
					else if (diff == "Normal")
					{duration=10;}
					else
					{duration=5;}
					//alert(duration);
					
					
				}

function compare() {
    var scoreNow = document.getElementById('CurrentScore').innerHTML;

    //alert(scoreNow);
    var mycookies = document.cookie.split(",");
    var myname = mycookies[0];
    var dictonaryname = myname.split("=");
    var UserName = dictonaryname[1];
    var MyLevel = mycookies[1];
    var dictonaryLevel = MyLevel.split("=");
    var Level = dictonaryLevel[1];
    var score = mycookies[3].split("=");
    var HighScore = score[1];

    if (Number(HighScore) >= Number(scoreNow)) {
        //alert("iii");
        var user = "userName=" + UserName + ",";
        var dif = "dif=" + Level + ",";
        var current = "currentScore=" + scoreNow + ",";
        var high = "highScore=" + HighScore + ",";
        document.cookie = user + dif + current + high;

        document.location.replace("gameOver.html");
    } else {
        var user = "userName=" + UserName + ",";
        var dif = "dif=" + Level + ",";
        var current = "currentScore=" + scoreNow + ",";
        var high = "highScore=" + scoreNow + ",";

        document.cookie = user + dif + current + high;
        document.location.replace("winner.html");
    }
}

var all = 10;
var a = 35;
var num = 1;
var duration = 10;
var delay = [];

var size_counter = all;
var greenrate = (70 / 100) * all;
var otherrate = (10 / 100) * all;
var list = [0];
var flage = 1;
var color = ["green", "red", "blue", "brown"];
var square_pos = [greenrate, otherrate, otherrate, otherrate];
var divs = [];
var Lives = 3;

for (var i = 0; flage; i++) {
    Div();
    if (i == 10)
        flage = 0;
}

function Div() {
    var index = Math.floor(Math.random() * 4);

    if (square_pos[index] >= 1) {
        size_counter--;
        square_pos[index]--;
        var str = color[index];
        var currentLeft = Math.floor(Math.random() * 10) * 50 + 450;

        if (list.indexOf(currentLeft) == Number("-1")) {
            list.push(currentLeft);
            var id = "var" + num;
            divs.push(id);

            var elem = document.createElement('div');
            document.getElementById("main").appendChild(elem);
            elem.className = 'move-me move-me-3';
            document.body.appendChild(elem);
            elem.id = id;

            elem.style.width = a + "px";
            elem.style.height = a + "px";
            elem.style.top = '-50px';
            elem.style.left = currentLeft + "px";
            elem.style.backgroundColor = str;
            elem.style.animationDelay = num * 2 + "s";
            delay.push(num * 2);

            //window.alert(elem.style.animationDelay);
            num = num + 1;
            elem.addEventListener('click', function (event) {
                elem.style.visibility = "hidden";
                elementAction(str);
				elem.remove();
				Div();
            });
			     elem.addEventListener("webkitAnimationIteration",function AnimationListener(){
			if(str == "green"){
	if( Lives>0)
		{
				Lives-=1;
				document.getElementById('missBox').innerHTML++;
		 
		 
		}
	else if(Lives==0)
		{
		 compare();
		}
				 }
				 else 
					                 elem.style.visibility = "visible";
		
	}
	);

			 } else {
            Div();
        }
    } else if (size_counter == 0) {
        return;
    } else {
        Div();
    }
	
}

function elementAction(str) {
    if (str == "red") {
        compare();
    } else if (str == "green") {
        var i = Number(document.getElementById('CurrentScore').innerHTML) + 1;

        document.getElementById('CurrentScore').innerHTML = i.toString();
    } else if (str == "brown") {
		a = a -10;
        for (var i = 1; i <= 11; i++) {
            var id = "var" + i;
            var element = document.getElementById(id);
            element.style.width = a + "px";
            element.style.height = a + "px";
        }
		
    } else if (str == "blue") {
		a= a+10;
        for (var i = 1; i <= 11; i++) {
            var id = "var" + i;
            var element = document.getElementById(id);
            element.style.width = a + "px";
            element.style.height = a + "px";
          
        }
    }
}
setInterval(function () {
    if (duration > 5) {
        duration = duration - 5;

        for (var i = 0; i < all; i++) {
            document.getElementById(divs[i]).style.animationDuration = duration + "s";
            // window.alert( document.getElementById(divs[i]).style.animationDuration );
        }
    }
}, 15000);

setInterval(function () {
    duration = duration - 5;

    for (var i = 0; i < all; i++) {
        document.getElementById(divs[i]).style.animationDelay = delay[i] + "s";
        // window.alert( document.getElementById(divs[i]).style.animationDuration );
    }
}, 2000);
//# sourceMappingURL=game.js.map


