
const toggle = document.getElementById('navtoggle');
const nav = document.querySelector('.navmenu');
const link = document.querySelectorAll('.navlink');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('show');
});

link.forEach((item)=>{

    item.addEventListener('click', ()=>{
        nav.classList.toggle('show');
    })

});


