

function fetchear(){
  fetch("/json/life-style/products.json")
.then(response => response.json())
.then(datas => iterPuts(datas[0].products));


}
fetchear();


var maxArticles = 6;

function Card({ name, image, url }) {
try {
  return `
      <article class="col-span-12 md:col-span-4 w-full h-full bg-white p-4 flex flex-col justify-center items-center py-8 gap-2 cursor-pointer transition hover-box-shadow-1">
          <div class="flex flex-col gap-4 justify-center items-center">
              <h1 class="text-lg sm:text-xl font-semibold">${name}</h1>
              <a href="${url}" class=" border border-black sm:border-transparent text-base sm:text-sm tracking-wider sm:tracking-widest font-semibold sm:text-white sm:bg-black p-4 rounded-lg transition-colors hover:underline sm:hover:no-underline sm:hover:bg-zinc-500">Leer más</a>
          </div>
          <img src="${image}" alt="Image of ${name}" loading="lazy">
      </article>  
`;
}
catch (error) {
  console.error("Error al retornar en la funciona Card, error ->  " + error)
}
}

// PUT articles : PONE LOS articulos
function putArticles(article) {
try {
  document.getElementById("grid__Wearables").innerHTML += Card(article);
} catch (error) {
  console.log(`Error en el ${article}, el error: + ${error}`);
}
}

// AQUI LE HACEMOS UN FOR A LOS articles PARA LLAMAR A LA FUNCION PUTARTICLES DEPENDIENDO DE CUANTOS articles HAY
function iterPuts(articles) { 

  for (var i = 0; i < maxArticles; i++) {
    putArticles(articles[i])
  }
}




// ----------------------------------





function fetchear2(){
  fetch("/json/life-style/products.json")
.then(response => response.json())
.then(datas => iterPuts2(datas[1].products));

}
fetchear2();



function Card2({ name, image, url }) {
try {
  return `
      <article class="col-span-12 md:col-span-4 w-full h-full bg-white p-4 flex flex-col justify-center items-center py-8 gap-2 cursor-pointer transition hover-box-shadow-1">
          <div class="flex flex-col gap-4 justify-center items-center">
              <h1 class="text-lg sm:text-xl font-semibold">${name}</h1>
              <a href="${url}" class=" border border-black sm:border-transparent text-base sm:text-sm tracking-wider sm:tracking-widest font-semibold sm:text-white sm:bg-black p-4 rounded-lg transition-colors hover:underline sm:hover:no-underline sm:hover:bg-zinc-500">Leer más</a>
          </div>
          <img src="${image}" alt="Image of ${name}">
      </article>  
`;
}
catch (error) {
  console.error("Error al retornar en la funciona Card, error ->  " + error)
}
}

// PUT articles : PONE LOS articulos
function putArticles2(article) {
try {
  document.getElementById("grid__Office").innerHTML += Card2(article);
} catch (error) {
  console.log(`Error en el ${article}, el error: + ${error}`);
}
}

// AQUI LE HACEMOS UN FOR A LOS articles PARA LLAMAR A LA FUNCION PUTARTICLES DEPENDIENDO DE CUANTOS articles HAY
function iterPuts2(articles) {
  for (var i = 0; i < maxArticles; i++) {
    putArticles2(articles[i])
  }
}

