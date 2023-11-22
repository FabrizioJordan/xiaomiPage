


//                   MENU

const menuBtn = document.getElementById("menu__Art");
const menu = document.getElementById("menu");
const btnCloseMenu = document.getElementById("btnCloseMenu");

menuBtn.addEventListener('click', clickedMenu);

function clickedMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("grid");
}

btnCloseMenu.addEventListener('click', closeMenu);

function closeMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("grid");
}





//              INICIAR SESION y REGISTRARSE 


const loginBtn = document.getElementById("loginBtn");
const login = document.getElementById("login");
const btnCloseLogin = document.getElementById("closeLogin");

try{
  loginBtn.addEventListener('click', openLogin);
}catch(error){
  console.error("Error: "+error)
}

function openLogin() {
  login.classList.toggle("hidden");
  login.classList.toggle("flex");
}

try{
  btnCloseLogin.addEventListener('click', closeLogin);
}catch(error){
  console.error(error)
}


function closeLogin() {
  login.classList.toggle("hidden");
  login.classList.toggle("flex");
}

const registerBtn = document.getElementById("registerBtn");
const register = document.getElementById("register");
const btnCloseRegister = document.getElementById("closeRegister");

try{
  registerBtn.addEventListener('click', openRegister);
}catch(error){
  console.error(error)
}

function openRegister() {
  register.classList.toggle("hidden");
  register.classList.toggle("flex");
}

try{
  btnCloseRegister.addEventListener('click', closeRegister);
}catch(error){
  console.error(error)
}

function closeRegister() {
  register.classList.toggle("hidden");
  register.classList.toggle("flex");
}




try{
  
  document.addEventListener('keydown', function(event) {
  let key = event.key;
  switch (key) {
    case 'Escape':
      if(!register.classList.contains("hidden")){
        register.classList.toggle("hidden");
        register.classList.toggle("flex");  
      }
      if(!login.classList.contains("hidden")){
        login.classList.toggle("hidden");
        login.classList.toggle("flex");  
      }
      for (let n = 1; n < 4; n++) {
        let phonePopUp = document.getElementById("buyPhonePop"+n)
        if(!phonePopUp.classList.contains("hidden")){
          phonePopUp.classList.toggle("hidden");
          phonePopUp.classList.toggle("flex");  
        }
      }
      
      break;
    default:
      // console.log('Otra tecla fue presionada: ' + key);
      break;
  }
})

}catch(error){
  console.error(error)
}









