/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersBtn = document.getElementById('btn');
const outputDivEl = document.getElementById('output');
const messageEl = document.getElementById('message');

 async function getUserFromApi() {
    try {
        const resp = await fetch(ENDPOINT);
        if (!resp.ok)
        throw new Error(`Failed ${resp.status}`);
        const dataInJs = await resp.json();
        showUsersBtn.addEventListener('click', () => {
         makeCards(dataInJs);
         messageEl.style.display = 'none'
         
    } );

    } catch (error) {
        console.warn(error.message);
    }
 }
 getUserFromApi();

 function makeCards(userArr) {
    userArr.forEach((userObj) => {
        const divEl = document.createElement('div');
        divEl.className = 'users-cards';
        divEl.innerHTML = `<h3 class="user-name" >${userObj.login}</h3>
        <img class="user-pictures" src="${userObj.avatar_url}" alt="users avatar">`;
        outputDivEl.append(divEl);
    })
 }

