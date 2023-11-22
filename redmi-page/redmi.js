fetch("/json/redmi.json")
  .then(response => response.json())
  .then(datas => iterPuts(datas));

var cantidadPhones = 6;

function Card({ name, image, ram, storage, expansion, pantalla, camaraAtras, price }) {
  try {
    return `
    <div id="card-script" class="flex align-center justify-center flex-col border m-4 pt-4 w-64 leading-8 items-center rounded-lg text-black">
      <div>
        <img class="card-img-top object-contain w-40 h-32 m-auto" src="${image}" alt="Card image cap">  
      </div>
      <div class="card-body w-full mt-4 pl-2 text-center">
        <h5 class="card-title font-bold font-sans my-2 text-center">${name}</h5>
        <p id="card__Data" class="my-4 mx-auto p-1.5 text-sm cursor-pointer font-bold" id="show-data"> Ver especificaciones</p>
        <p class=" opacity-0 hidden"> Ram: ${ram} </p>
        <p class="card-text opacity-0 hidden"> Storage: ${storage} </p>
        <p class="card-text opacity-0 hidden"> Pantalla: ${pantalla} </p>
        <p class="card-text opacity-0 hidden"> Camara Trasera: ${camaraAtras} </p>
        <p class="card-text opacity-0 hidden"> Expandible: ${expansion != "No Data" ? expansion : "Information Not Obtained"} </p>
        <a id="card__Buy" class="bg-colors-7 w-66 transition-colors duration-500 flex justify-center my-4 mx-auto p-1.5 rounded-lg cursor-pointer hover:bg-white"> Comprar a ${price} </a>
      </div>
    </div>
  `;
  }
  catch (error) {
    console.error("Error al retornar en la funciona Card, error ->  " + error)
  }
}



function putPhones(phone) {
  try {
    document.getElementById("app").innerHTML += Card(phone);
  } catch (error) {
    console.log(`Error en el ${phone}, el error: + ${error}`);
  }
}


function iterPuts(phones) {
  for (var i = 0; i < phones.length; i++) {
    putPhones(phones[i])
  }
}



let x = document.querySelectorAll('.card-text-data')
x.forEach(i => i.addEventListener('click', onClick));



function onClick() {
  console.log("k");


  let b = document.querySelectorAll('.card-text')

  b.forEach(p => {
    // p.classList.toggle('opacity-0');
    p.classList.toggle('hidden');
    setTimeout(function() {
      p.classList.toggle('show-card-text');
    }, 100);

  });


}




document.addEventListener('DOMContentLoaded', function () {


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
    for (let p = 0; p < cantidadShows; p++) {
      cardTexts[p].classList.toggle('hidden');
      cardTexts[p].classList.toggle('show-card-text');
    }

  }




  
});


function buyPhones({ name, image, ram, storage, expansion, pantalla, camaraAtras, price }) {
  try {
    return `
    <div class="card-body w-full mt-4 pl-2 text-center">
        <h5 class="card-title font-bold font-sans my-2 text-center">${name}</h5>
        <p class="card-text "> Ram: ${ram} </p>
        <p class="card-text "> Storage: ${storage} </p>
        <p class="card-text "> Pantalla: ${pantalla} </p>
        <p class="card-text "> Camara Trasera: ${camaraAtras} </p>
        <p class="card-text "> Expandible: ${expansion != "No Data" ? expansion : "Information Not Obtained"} </p>
      </div>
    
  `;
  }
  catch (error) {
    console.error("Error al retornar en la funcion buyPhones, error ->  " + error)
  }
}