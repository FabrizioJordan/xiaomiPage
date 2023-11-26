
function fetchear(){
    fetch("/json/smart-home/products.json")
  .then(response => response.json())
  .then(datas => iterPuts(datas[0].products));

}
fetchear();



function Card({ name, image, url }) {
  try {
    return `
        <article class="col-span-12 md:col-span-4 w-full h-full bg-white p-4 flex flex-col justify-center items-center py-8 gap-2 cursor-pointer transition hover-box-shadow-1">
            <div class="flex flex-col gap-4 justify-center items-center">
                <h1 class="text-lg sm:text-xl font-semibold">${name}</h1>
                <a href="${url}" class=" border border-black sm:border-transparent text-base sm:text-sm tracking-wider sm:tracking-widest font-semibold sm:text-white sm:bg-black p-4 rounded-lg transition-colors hover:underline sm:hover:no-underline sm:hover:bg-zinc-500">Leer más<span class="icon-[material-symbols--arrow-right-rounded]"></span></a>
            </div>
            <img src="${image}" alt="Image of ${name}">
        </article>  
  `;
  }
  catch (error) {
    console.error("Error al retornar en la funciona Card, error ->  " + error)
  }
}

// PUT PHONES : PONE LOS CELULARES
function putPhones(phone) {
  try {
    document.getElementById("grid__TV").innerHTML += Card(phone);
  } catch (error) {
    console.log(`Error en el ${phone}, el error: + ${error}`);
  }
}

// AQUI LE HACEMOS UN FOR A LOS PHONES PARA LLAMAR A LA FUNCION PUTPHONES DEPENDIENDO DE CUANTOS PHONES HAY
function iterPuts(phones) {
  for (var i = 0; i < phones.length; i++) {
    putPhones(phones[i])
  }
}


 /*

document.addEventListener('DOMContentLoaded', function () {



  //        ACÁ QUIERO QUE SE ABRA LA INFO DE LOS CELULARES LUEGO DE SABER QUE EXISTAN Y DE QUE SE HAGA CLICK EN SU BOTON DE BUY

  


  //   ACA QUIERO HACER EL MENU BUY PHONE PARA QUE SE ABRA Y CIERRE

  document.addEventListener('click', function (event) {
    for (let p = 1; p < (cantidadPhones + 2); p++) {
      if (event.target.matches('#card__Data'+p)) { // verifica si al elemento con la id #card__Data le hicieron el evento en cuestion (click)
        showData(p);
      }
    }
  });

  function showData(p) {
    
  // agarro todos los text a mostrar
    let cardTexts = document.querySelectorAll('.div__Text'+p+'> .card-text');
    for (let p = 1; p < cardTexts.length; p++) {
      cardTexts[p].classList.toggle('hidden');
      cardTexts[p].classList.toggle('show-card-text');
    }
  }




  quantityPhones = document.querySelectorAll("#card-script");

  //   ACA QUIERO HACER EL MENU BUY PHONE PARA QUE SE ABRA Y CIERRE

  document.addEventListener('click', function (event) {
    for (let p = 1; p < (cantidadPhones + 2); p++) {
      if (event.target.matches('#card__Buy'+p)) { // verifica si al elemento con la id #apertado le hicieron el evento en cuestion (click)
        showBuy(p);
      }
      if (event.target.matches('#closeBuy'+p)) { // verifica si quieren cerrar el PopUp de comprar phones
        try{
          document.addEventListener('click', closeBuyPop(p));
        }catch(error){
          console.error("Error: "+error)
        }
      }
    }
      
  });

  function showBuy(n) {
    let phonePopUp = document.getElementById("buyPhonePop"+n)
    phonePopUp.classList.toggle("hidden");
  }

  function closeBuyPop(num) {
    document.getElementById("buyPhonePop"+num).classList.toggle("hidden");
    document.getElementById("buyPhonePop"+num).classList.toggle("flex");
  }



});




*/