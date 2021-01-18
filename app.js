//mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }

})

//modal

let modal = document.querySelector(".modal");
/*let moreDetailsBtns = document.querySelectorAll(".more-det");*/
let closeBtn = document.querySelector(".close-btn");

/*moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",openModal)
})*/

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll);
    }
}

window.addEventListener("scroll",showModalByScroll);

//form

let form = document.querySelector(".form-block");
let showForm = document.querySelectorAll(".btn-show-form");
let closeForm = document.querySelector(".closed");

showForm.forEach((btn) => {
    btn.addEventListener("click",openForm)
});


function openForm() {
    form.classList.add("show");
    form.classList.remove("hide");
}

function closedForm() {
    form.classList.add("hide");
    form.classList.remove("show");
}

closeForm.addEventListener("click",closedForm);



