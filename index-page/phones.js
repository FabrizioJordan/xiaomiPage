fetch("/json/index.json")
  .then(response => response.json())
  .then(datas => iterPuts(datas));

var cantidadPhones = 6;

function Card({ id, name, image, ram, storage, expansion, pantalla, camaraAtras, price }) {
  try {
    return `
    <div id="card-script" class="flex align-center justify-center flex-col border m-4 pt-4 w-64 leading-8 items-center rounded-lg text-black">
      <div>
        <img class="card-img-top object-contain w-40 h-32 m-auto" src="${image}" alt="Card image cap">  
      </div>
      <div class="card-body w-full mt-4 pl-2 text-center">
        <h5 class="card-title font-bold font-sans my-2 text-center">${name}</h5>
        <p id="card__Data" class="my-4 mx-auto p-1.5 text-sm cursor-pointer font-bold" id="show-data"> Ver especificaciones</p>
        <p class="card-text opacity-0 hidden"> Ram: ${ram} </p>
        <p class="card-text opacity-0 hidden"> Storage: ${storage} </p>
        <p class="card-text opacity-0 hidden"> Pantalla: ${pantalla} </p>
        <p class="card-text opacity-0 hidden"> Camara Trasera: ${camaraAtras} </p>
        <p class="card-text opacity-0 hidden"> Expandible: ${expansion != "No Data" ? expansion : "Information Not Obtained"} </p>
        <a id="card__Buy${id}" class="bg-colors-7 w-66 transition-colors duration-500 flex justify-center my-4 mx-auto p-1.5 rounded-lg cursor-pointer hover:bg-white"> Comprar a ${price} </a>

        


      </div>
    </div>
    <section id="buyPhonePop${id}" class="hidden w-full h-screen top-0 fixed justify-center items-center backdrop-brightness-50 ">
          <article
            class="relative w-4/5 h-4/5 m-auto bg-neutral-800 text-white rounded-lg flex flex-col justify-center items-center">
            <h1 class="font-bold text-2xl">Comprar Celular</h1>
            <main id="mainPhonePop" class="">

              <section class="p-4 flex flex-col items-center justify-center">
                  <div class="card-body w-full mt-4 pl-2 text-center">
                      <h5 class="card-title font-bold font-sans my-2 text-center">${name}</h5>
                      <p class="card-text "> Ram: ${ram} </p>
                      <p class="card-text "> Storage: ${storage} </p>
                      <p class="card-text "> Pantalla: ${pantalla} </p>
                      <p class="card-text "> Camara Trasera: ${camaraAtras} </p>
                      <p class="card-text "> Expandible: ${expansion != "No Data" ? expansion : "Information Not Obtained"} </p>
                  </div>

                  <br>
                  <button
                    class="border border-black p-2 py-0 bg-teal-600 transition-colors rounded hover:bg-black">Enviar</button>
              </section>

            </main>

            <div class="absolute top-12 right-12">
              <img id="closeBuy${id}" class="w-8 h-8 invert" src="/assets/svg/x.svg" alt="">
            </div>

          </article>
        </section>
  `;
  }
  catch (error) {
    console.error("Error al retornar en la funciona Card, error ->  " + error)
  }
}

// PUT PHONES : PONE LOS CELULARES
function putPhones(phone) {
  try {
    document.getElementById("app").innerHTML += Card(phone);
    // document.getElementById("mainPhonePop").innerHTML += buyPhones(phone);
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




document.addEventListener('DOMContentLoaded', function () {



  //        ACÁ QUIERO QUE SE ABRA LA INFO DE LOS CELULARES LUEGO DE SABER QUE EXISTAN Y DE QUE SE HAGA CLICK EN SU BOTON DE BUY

  // for (let o = 0; o < cardData.length; o++) {
  //   cardData[o].addEventListener('click', showData)
  // }
  document.addEventListener('click', function (event) {
    if (event.target.matches('#card__Data')) { // verifica si al elemento con la id #card__Data le hicieron el evento en cuestion (click)
      showData();
    }
  });

  function showData() {
    let cardTexts = document.querySelectorAll('.card-text');
    var cantidadShows = cantidadPhones * 4;

    try {
      for (let p = 0; p < cantidadShows; p++) {
        cardTexts[p].classList.toggle('hidden');
        cardTexts[p].classList.toggle('show-card-text');
      }
    } catch (error) {
      console.error("ERROR: " + error)
    }

  }
  


  //   ACA QUIERO HACER EL MENU BUY PHONE PARA QUE SE ABRA Y CIERRE

  document.addEventListener('click', function (event) {
    for (let p = 1; p < 4; p++) {
      if (event.target.matches('#card__Buy'+p)) { // verifica si al elemento con la id #apertado le hicieron el evento en cuestion (click)
        apert(p);
      }
      if (event.target.matches('#closeBuy'+p)) { // verifica si al elemento con la id #apertado le hicieron el evento en cuestion (click)
        try{
          document.addEventListener('click', closeBuyPop(p));
        }catch(error){
          console.error("Error: "+error)
        }
      }
    }
      
  });

  function apert(n) {
    let phonePopUp = document.getElementById("buyPhonePop"+n)
    phonePopUp.classList.toggle("hidden");
  }

  function closeBuyPop(num) {
    document.getElementById("buyPhonePop"+num).classList.toggle("hidden");
    document.getElementById("buyPhonePop"+num).classList.toggle("flex");
  }






  // document.addEventListener('click', function (event) {
  //   if (event.target.matches('#card__Buy')) { // verifica si al elemento con la id #card__Data le hicieron el evento en cuestion (click)
  //     buyPhone();
  //   }
  // });

  // function showBuy() {
  //   let cardBuyArt = document.getElementById('card__Buy-art')

  //   cardBuyArt.classList.toggle("hidden")
  //   cardBuyArt.classList.toggle("block")

  // }

  // function buyPhone() {
  //   let buyPhonePop = document.getElementById('buyPhonePop');

  //   buyPhonePop.classList.toggle("hidden")
  //   buyPhonePop.classList.toggle("flex")
  // }



  // if (!buyPhonePop.classList.contains("hidden")) {

  //   // document.getElementById("mainPhonePop").innerHTML += Card(phone);

  //   for (var i = 0; i < phones.length; i++) {
  //     console.log(phones[i])
  //   }
  // }




});


// function buyPhones({ name, image, ram, storage, expansion, pantalla, camaraAtras, price }) {
//   try {
//     return `
//     <div class="card-body w-full mt-4 pl-2 text-center">
//         <h5 class="card-title font-bold font-sans my-2 text-center">${name}</h5>
//         <p class="card-text "> Ram: ${ram} </p>
//         <p class="card-text "> Storage: ${storage} </p>
//         <p class="card-text "> Pantalla: ${pantalla} </p>
//         <p class="card-text "> Camara Trasera: ${camaraAtras} </p>
//         <p class="card-text "> Expandible: ${expansion != "No Data" ? expansion : "Information Not Obtained"} </p>
//       </div>
    
//   `;
//   }
//   catch (error) {
//     console.error("Error al retornar en la funcion buyPhones, error ->  " + error)
//   }
// }

