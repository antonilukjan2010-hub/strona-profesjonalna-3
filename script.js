const password = document.querySelector(".password1")
const pokaz = document.querySelector(".checkbox1")

pokaz.addEventListener("click", function(){
    if(pokaz.checked){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
})