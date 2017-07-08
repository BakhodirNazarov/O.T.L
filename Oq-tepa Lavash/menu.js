var time = setInterval('forward()', 5000)
var slide = document.querySelector('.menu-item ul');
function back(){
if(slide.style.left == '')
{$('.menu-item ul').animate({
left: '-3940px'},
500,
function(){   
})
}
else if(slide.style.left=='-1970px'){
$('.menu-item ul').animate({
left: '-985px'
},
500,
function(){
})
}
else if(slide.style.left=='-985px'){
$('.menu-item ul').animate({
left: ''
},
 500,
 function(){
})
}
else if(slide.style.left=='-2955px'){
$('.menu-item ul').animate({
left: '-1970px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-3940px'){
$('.menu-item ul').animate({
left: '-2955px'
},
 500,
 function(){
})
}
else{
$('.menu-item ul').animate({
left: '-3940px'
},
500,
 function(){ 
})
}
}






function forward(){
if(slide.style.left==''){
$('.menu-item ul').animate({
left: '-985px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-985px'){
$('.menu-item ul').animate({
left: '-1970px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-1970px'){
$('.menu-item ul').animate({
left: '-2955px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-2955px'){
$('.menu-item ul').animate({
left: '-3940px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-3940px'){
$('.menu-item ul').animate({
left: '0px'
},
 500,
 function(){
})
}
else{
	$('.menu-item ul').animate({
left: '-985px'
},
 500,
 function(){
})
}
}