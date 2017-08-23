console.log('Loaded!');
//change the text of name text
var element = document.getElementById('name text');

element.innerHTML = 'new value';

//move  the image 
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginleft = '400px';
};
