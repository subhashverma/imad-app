console.log('Loaded!');
//change the text of name text
var element = document.getElementById('name text');

element.innerHTML = 'new value';

//move  the image 
var img = document.getElementById('madi');
var marginleft = 0;
function moveright() {
    marginleft = marginleft =   1;
    img.style.marginleft = marginleft +'px';
}
img.onclick = function() {
    var interval = setInterval(moveright,50);
    
};
