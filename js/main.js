var image = document.createElement("img");
image.src = "img/leo.png"
image.id = "image";
var image2 = document.createElement('img')
image2.src = "img/cancer.jpg";
image2.id = "image2";
var button1 = document.createElement("button");
button1.id = "button1"
button1.innerText = "show"
var button2 = document.createElement("button");
button2.id = "button2";
button2.innerText = "content";

var button3 = document.createElement("button");
button3.innerText = " both";
button3.id = "button3";

var button4 = document.createElement("button");
button4.innerText = "toggle";
button4.id = "button4";



document.body.appendChild(image);
document.body.appendChild(image2);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4)

$("#button1").click(function(){
	$("#image").toggle()
})

$("#button2").click(function(){
	$("#image2").toggle()
})

$("#button3").click(function(){
	$("img").toggle()
})

$("#button4").click(function(){
	$("img").toggleClass("fade")
})

$(document).ready(function(){
	$("#image").hover(function(){
		$("#image").attr("src","img/snake.jpg");
	},function(){
		$("#image").attr("src","img/leo.png");
	})
	
})

$("#image2").hover(function(){
	$("#image2").attr("src","img/hellboy.png");
}, function(){
	$("#image2").attr("src","img/cancer.jpg");
})




function start(){

	var mai = document.createElement("main");
document.body.appendChild(mai);
	var d = document;

	var main = d.getElementsByTagName("main")[0];
	var ul = document.createElement("ul");
	main.appendChild(ul);

	for(i = 0; i <=4 ; i++){
		var li = d.createElement("li");
		li.innerText = "item" ;
		ul.appendChild(li);
	}
}

start()

var button5 = document.createElement("button");
button5.innerText = "button5";
button5.id = "button5";
document.body.appendChild(button5);

$("#button5").click(function(){
	$("ul").append( start())
})

var button6 = document.createElement("button");
button6.innerText = "button6";
button6.id = "button6";
document.body.appendChild(button6);

$("#button6").click(function(){
	$("body").css("backgroundColor","red")

});

var tittle = document.createElement("h1");
tittle.innerText = "text";
document.body.appendChild(tittle);

$("h1").hover(function(){
	$("h1").toggleClass("fade")
})

$("ul").hover(function(){
	$("li").hover(function(){
		$(this).css("color","red");
	}, function(){
		$(this).css("color","black");
	})
})
