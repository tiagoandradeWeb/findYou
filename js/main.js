// Header Scroll
let nav = document.querySelector('.navbar')

window.onscroll = () =>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// Hide Navlink

let navbar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
let btnPrice = document.querySelector(".btn-prices")

navbar.forEach((a)=>{
    a.addEventListener("click", () =>{
        navCollapse.classList.remove("show")
    })
})

btnPrice.addEventListener("click", ()=>{
    navCollapse.classList.remove("show")
})
