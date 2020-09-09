var slide =document.getElementsByClassName('slide');
var dot =document.getElementsByClassName('dot');
var prev =document.querySelector('.prev');
var next =document.querySelector('.next');
var n = 0;
var i;

function disno(){ //2
for (i=0;i<slide.length; i++){
    slide[i].style.display = 'none';
}
}
function no_active(){ //3
for(i=0; i<dot.length; i++){
        dot[i].classList.remove('active');
}
}

next.addEventListener('click', function(e){ //1
    e.preventDefault();
    n++;
    if( n>slide.length - 1){
        n = 0;
    }
    disno(); //2
    no_active(); //3
    slide[n].style.display ='block'; //2
    dot[n].classList.add('active'); //3
})


prev.addEventListener('click', function(e){ //4
    e.preventDefault();
    n--;
    if( n<0){
        n = slide.length - 1;
    }
    disno(); 
    no_active();
    slide[n].style.display ='block';
    dot[n].classList.add('active');
})

setInterval(function(){ //5
        n++;
        if( n>slide.length - 1){
            n = 0;
        }
        disno(); 
        no_active();
        slide[n].style.display ='block';
        dot[n].classList.add('active');
},3000)
