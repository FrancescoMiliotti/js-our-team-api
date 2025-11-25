


// faccio la chiamata Api e stampo in console il risultato dell'oggetto Data
axios.get("https://boolean-teachers.github.io/mock/api/members/").then(risposta => {

  const rispostaDelServer = risposta.data;
  console.log(rispostaDelServer);




// Recupero gli id html da modificare

document.getElementById("button").addEventListener("click", function () {


  document.getElementById("button").innerText=("Aggiungi card")

const teamMembersEl = document.getElementById("card-member");
const memberCard = teamMembersEl

// effetuo il ciclo sulla risposta del server e stampo in pagina i dati recuperati

for (let i = 0; i < rispostaDelServer.length; i++) {
  let member = rispostaDelServer[i];

  console.log(i, member.name);

  memberCard.innerHTML += (`<div class="col">
                <div class="card mb-3" style="max-width: 700px;">
                    <div class="row g-0">
                        <div class="col">
                            <img id="img-member" src="${member.img}" class= img-fluid rounded-start alt="img-member">
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-title">${member.name}</h5>
                                <p class="card-text">${member.role}</p>
                                <p class="card-text"><small class="text-body-secondary">${member.email}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);



}



console.log(memberCard);
})

})


