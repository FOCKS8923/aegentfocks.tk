burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.leftnav')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    leftnav.classList.toggle('v-resp');
    rightnav.classList.toggle('v-resp');
})