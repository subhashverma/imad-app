console.log('Loaded!');
//change the text of name text
var element = document.getElementById('name text');

element.innerHTML = 'new value';

//move  the image 
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight()
{
    marginLeft = marginLeft = 1;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() 
{
    var interval = setInterval(moveRight, 50);
    
};
