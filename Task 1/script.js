/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const searchEl = document.getElementById('search');
const calcBtn = document.getElementById('submit-btn');
const outputEl = document.getElementById('output');



formEl.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const searchElValue = searchEl.value;
    const atsWeight = {
        pounds: searchElValue * 2.2046,
        grams: searchElValue / 0.0010000,
        ounces: searchElValue * 35.274,
    }
    
    searchEl.value = '';

    weightsTohtml(atsWeight);
})


function weightsTohtml (num) {
  const divEl = document.createElement('div');
  divEl.className = 'weights-container';
  divEl.innerHTML = `<p> Pounds : ${num.pounds}</p>
  <p> Grams : ${num.grams}</p>
  <p> Ounces : ${num.ounces}</p>`;
  outputEl.append(divEl);
  
}

