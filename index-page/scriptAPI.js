


let phoneNames = ["Xiaomi Mi Mix 2", "Xioami Redmi Note 11 Pro 5G", "Xiaomi Redmi 9A"];




try {





  const fetchData = async (id) => {
    // try {


    // const [nameOne, nameTwo, nameThree] = phoneNames;

    const api = await fetch(`https://apimocha.com/landingpage1/json/phones/${id}`);
    const data = await api.json();






    let imagesPhones = [
      "/redmiMix2.webp",
      "/redmi11.jpg",
      "/redmiNote9A.jpg"
    ];


    const phone = {
      name: data.name,
      image: data.image,
      ram: data.ram,
      storage: data.storage,
      expansion: data.expansion
    }


    const [phoneOne, phoneTwo, phoneThree] = phone;

    // 
    function Card({ name, image, ram, storage, expansion }) {
      try {
        return `
      <div class="flex flex-col border rounded-sm  m-4 pt-4 w-64 max-h-96 items-center
      ">
        <img class="card-img-top object-contain w-24 h-24" src="${image}" alt="Card image cap">
        <div class="card-body w-full mt-4 bg-slate-200">
          <h5 class="card-title font-bold font-sans">${name}</h5>
          <p class="card-text">Ram: ${ram} <br>
          Storage: ${storage} <br>
          ${expansion != "No Data" ? expansion : "Expansion: Information Not Obtained"
          }</p>
        </div>
      </div>
    `;
      }
      catch (error) {
        console.error("Error al retornar en la funciona Card, error ->  " + error)
      }
    }

    try {
      document.getElementById("app").innerHTML = Card(phoneOne);
    } catch (error) {
      console.log("Error en el phoneOne, el error: " + error);
    }

    try {
      document.getElementById("app").innerHTML += Card(phoneTwo);
    } catch (error) {
      console.log("Error en el phoneTwo, el error: " + error);
    }

    try {
      document.getElementById("app").innerHTML += Card(phoneThree);
    } catch (error) {
      console.log("Error en el phoneThree, el error: " + error);
    }




    // } catch (error) {
    //   console.log(error);
    // }
  }





  // const phones = [
  //   {
  //     name: "Xiaomi Mi Mix 2",
  //     image: imagesPhones[0],
  //     ram: "6GB/8GB",
  //     storage: "64GB/128GB/256GB",
  //     expansion: "No Data",
  //   },
  //   {
  //     name: "Xioami Redmi Note 11 Pro 5G",
  //     image: imagesPhones[1],
  //     ram: "6GB",
  //     storage: "128GB/256GB",
  //     expansion: "Micro SD hasta 512 GB",
  //   },
  // {
  //   name: "Xiaomi Redmi 9A",
  //   image: imagesPhones[2],
  //   ram: "2GB",
  //   storage: "32GB",
  //   expansion: "Micro SD hasta 512 GB",
  // },
  // ];


  for (i = 0; i < phoneNames.length; i++) {
    let phoneActual = phoneNames[i];
    fetchData(phoneActual);
  }


} catch (error) {
  console.log(error);
}

