/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
const ENDPOINT = "cars.json";

const outputEl = document.getElementById("output");

getCarList(ENDPOINT);
async function getCarList(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`failed to fetch ${resp.status}`);
    const dataInJs = await resp.json();

    makeCarList(dataInJs);
  } catch (error) {
    console.warn(error.message);
  }
}

function makeCarList(carArr) {
  carArr.forEach((obj) => {
    const divEl = document.createElement("div");
    divEl.className = "cars-list";
    divEl.innerHTML = `<h3 class="brand">Brand : ${obj.brand}</h3>
        <p class="models-list" ><strong>Models:</strong></p>
        <ul>
        ${makeModelsHtml(obj.models)}
        </ul>
         `;

    outputEl.append(divEl);
  });
}

function makeModelsHtml(arrModel) {
  return arrModel.map((obj) => `<li class="models">${obj}</li>`).join("");
}
