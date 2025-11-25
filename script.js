const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



axios.get("https://boolean-teachers.github.io/mock/api/members/").then(risposta => {

  const rispostaDelServer = risposta.data;
  console.log(rispostaDelServer);






document.getElementById("button").addEventListener("click", function () {


  document.getElementById("button").innerText=("Aggiungi card")

const teamMembersEl = document.getElementById("card-member");
const memberCard = teamMembersEl

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


