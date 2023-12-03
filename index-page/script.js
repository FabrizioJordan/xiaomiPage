
// inserto dinamicamente el loader y el footer

const body = document.getElementById("body");

let loaderPopUp=`
<div id="loaderDad" class="fixed top-0 w-screen h-screen flex justify-center items-center flex-col z-30 bg-amber-100">
  <div class="w-24 h-24 flex justify-center items-center text-white">
    <div id="loader" class="rounded-100 w-4 h-4 bg-white opacity-100"></div>
  </div>
  <h2>Cargando...</h2>
</div>
`;

body.innerHTML += loaderPopUp;

const footer = document.getElementById("footer");
footer.innerHTML = 
`
<div class="flex flex-col justify-center items-center w-full h-full py-8 gap-16">

  <div class="flex flex-row justify-evenly items-center w-full h-full">
    <img class="w-10" src="/assets/svg/Xiaomi_logo.svg" alt="logo de la empresa xiaomi, la palabra mi con un fondo naranja" loading="lazy">
    <h1 class="text-2xl font-semibold text-orange-500">Xiaomi Corporation</h1>
  </div>

  <section class="flex flex-col sm:flex-row justify-around items-center w-full h-full gap-12 sm:gap-0">

    <article class="flex flex-col justify-center items-center gap-4">
      <h2 class="text-orange-500 font-semibold text-2xl">Pages</h2>
      <ul class="flex flex-row flex-wrap sm:flex-nowrap sm:flex-col justify-center items-center text-color-1 gap-8">
        <li class="text-lg"><a href="/index.html">Xiaomi</a></li>
        <li class="text-lg"><a href="/redmi-page/redmi.html">Redmi</a></li>
        <li class="text-lg"><a href="/smart-page/smart-home.html">Smart Home</a></li>
        <li class="text-lg"><a href="/">Life Style</a></li>
      </ul>
    </article>

    <article class="flex flex-col justify-center items-center gap-4">
      <h2 class="text-orange-500 font-semibold text-2xl">Contact</h2>
      <div class="flex flex-row sm:flex-col justify-center items-center text-color-1 gap-12">

        <a href="" class="flex flex-row flex-wrap justify-between items-center gap-x-8">
          <img class="inline-block w-6 h-6 invert-04 max-w-xs hover:scale-110 cursor-pointer"
            src="/assets/svg/instagram.svg" alt="logo de la red social instagram" loading="lazy">
        </a>

        <a href="" class="flex flex-row flex-wrap justify-between items-center gap-x-8">
          <img class="inline-block w-6 h-6 invert-04 max-w-xs hover:scale-110 cursor-pointer"
            src="/assets/svg/twitter.svg" alt="logo de la red social twitter, la x" loading="lazy">
        </a>

        <a href="" class="flex flex-row flex-wrap justify-between items-center gap-x-8">
          <img class="inline-block w-6 h-6 invert-04 max-w-xs hover:scale-110 cursor-pointer"
            src="/assets/svg/github.svg" alt="logo de la empresa github" loading="lazy">
        </a>

      </div>
    </article>

    <ul class="flex flex-col justify-center items-center text-color-1 gap-4">

      <li class="flex flex-row flex-wrap w-40 justify-between items-center gap-x-8">
        <img class="inline-block w-6 h-6 invert-04 max-w-xs" src="/assets/svg/question-circle-fill.svg" alt="" loading="lazy">
        <p>¿Tienes Preguntas?</p>
      </li>

      <li class="flex flex-row flex-wrap w-40 justify-between items-center gap-x-8">
        <img class="inline-block w-6 h-6 invert-04 max-w-xs" src="/assets/svg/gear-fill.svg" alt="" loading="lazy">
        <p>Gestionar privacidad.</p>
      </li>

      <li class="flex flex-row flex-wrap w-40 justify-between items-center gap-x-8">
        <img class="inline-block w-6 h-6 invert-04 max-w-xs" src="/assets/svg/shield-shaded.svg" alt="" loading="lazy">
        <p>Transparencia en las recomendaciones.</p>
      </li>

    </ul>

  </section>

</div>

<!--Copyright section-->
<div class="p-4 text-center">
  <p class="text-xs text-color-1">Xioami Corporation © 2023</p>
</div>

`
footer.classList.add("body-footer")

// ABRO LOADER


var isWindowCharged = false;

window.onload = declararVariableTrue();


function declararVariableTrue(){
  isWindowCharged = true;
}


const loaderDad = document.getElementById("loaderDad")
const loaderChild = document.getElementById("loader");

if(isWindowCharged && footer.classList.contains("body-footer")){ cerrarLoader()}
// window.addEventListener('DOMContentLoaded', cerrarLoader())

function cerrarLoader() {
  loaderDad.classList.add("hidden");
  loaderChild.classList.add("hidden");
  loaderChild.style.animation = "none";
}



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


const loginBtns = document.querySelectorAll("#loginBtn");
const login = document.getElementById("login");
const btnCloseLogin = document.getElementById("closeLogin");


for (let n = 0; n < 2; n++) {
  try{
    if(loginBtns[n]){
      let a = n;
      loginBtns[a].addEventListener('click', openLogin);
    }
  }catch(error){
    console.error(error)
  }
}

function openLogin() {
  login.classList.toggle("hidden");
}

try{
  btnCloseLogin.addEventListener('click', closeLogin);
}catch(error){
  console.error(error)
}


function closeLogin() {
  login.classList.toggle("hidden");
}

const registerBtns = document.querySelectorAll("#registerBtn");
const register = document.getElementById("register");
const btnCloseRegister = document.getElementById("closeRegister");

for (let n = 0; n < 2; n++) {
  try{
    if(registerBtns[n]){
      let a = n;
      registerBtns[a].addEventListener('click', openRegister);
    }
  }catch(error){
    console.error(error)
  }
}


function openRegister() {
  register.classList.toggle("hidden");
}

try{
  btnCloseRegister.addEventListener('click', closeRegister);
}catch(error){
  console.error(error)
}

function closeRegister() {
  register.classList.toggle("hidden");
}




try{
  
  document.addEventListener('keydown', function(event) {
  let key = event.key;
  switch (key) {
    case 'Escape': // se presiona la tecla escape para salir de los PopUp
      if(!register.classList.contains("hidden")){ // verifico si register no contiene "hidden"
        register.classList.toggle("hidden");
      }
      if(!login.classList.contains("hidden")){ // verifico si login no contiene "hidden"
        login.classList.toggle("hidden");
      }
      
      // if(document.getElementById("mainPhonePop")){
        
      // }
      break;
    default:
      // console.log('Otra tecla fue presionada: ' + key);
      break;
  }
})

}catch(error){
  console.error(error)
}









