let button = document.querySelector('#no');
let okay = document.querySelector('#okay');
let yes = document.querySelector('#yes');


button.addEventListener('mouseover',function(){
    button.innerText = 'yes';
});

button.addEventListener('mouseout',function(){
    button.innerText = 'no';
});

button.addEventListener('click',function(){
    okay.style.visibility = 'visible';
});

yes.addEventListener('click',function(){
    okay.style.visibility = 'visible';
});