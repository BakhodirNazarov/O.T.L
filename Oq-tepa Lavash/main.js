var timer = setInterval('next()', 5000)
var slide = document.querySelector('.slider ul');
function prev(){
if(slide.style.left == '')
{$('.slider ul').animate({
left: '-1800px'},
500,
function(){   
})
}
else if(slide.style.left=='-1800px'){
$('.slider ul').animate({
left: '-900px'
},
500,
function(){
})
}
else if(slide.style.left=='-900px'){
$('.slider ul').animate({
left: ''
},
 500,
 function(){
})
}else{
$('.slider ul').animate({
left: '-1800px'
},
500,
 function(){ 
})
}
}



function next(){
if(slide.style.left==''){
$('.slider ul').animate({
left: '-900px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-900px'){
$('.slider ul').animate({
left: '-1800px'
},
 500,
 function(){
})
}
else if(slide.style.left=='-1800px'){
$('.slider ul').animate({
left: '-0px'
},
 500,
 function(){
})
}
else{
	$('.slider ul').animate({
left: '-900px'
},
 500,
 function(){
})
}
}
