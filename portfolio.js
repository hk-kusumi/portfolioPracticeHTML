let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar'); 

menu.onclick = ()=>{
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('open');
};


/* const sr= ScrollReveal({
 distance: '40px',
 duration: 2500,
 reset: true
});

sr.reveal('.navbar' , {delay: 300, origin: 'top'});
sr.reveal('.menu-btn' , {delay: 400, origin: 'right'});
*/