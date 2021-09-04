//You can edit ALL of the code here
const rootElem = document.getElementById("root");


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

let searchEpisodesBox =document.querySelector("#searchEpisodes");
searchEpisodesBox.addEventListener("keyup",searchEpisodes);
}

function searchEpisodes(){
let searchEpisodesBox =document.querySelector("#searchEpisodes");
console.log(searchEpisodesBox.value)
}


function makePageForEpisodes(episodeList) {
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach(createCard)
}


// function createCard(episode){
//   const name = episode.name
//   const seasonNum = episode.season
//   const episodeNum =episode.number
//   const imageMed = episode.image.medium
//   const episodeSummury = episode.summary
//   // console.log(name +" " +seasonNum +" " + episodeNum +" "+imageMed +" " +episodeSummury);

//   const card = document.createElement("div")
//   card.classList.add("card");
//   card.setAttribute("id",'card')
//   const h1 = document.createElement("h1");
//   h1.classList.add("title");
//   h1.textContent = name
//   card.appendChild(h1);


//   const img = document.createElement("img");
//   img.setAttribute("src",imageMed  );
//   card.appendChild(img);


//   const p = document.createElement("p");
//   p.textContent = episodeSummury;
//   card.appendChild(p);
//   console.log(p)
// }

function createCard(episode){

 let card = document.createElement("span");
 let cardTitle =document.createElement("h2")

 cardTitle.innerText =episode.name;
 card.appendChild(cardTitle);
 rootElem.appendChild(card);

// let code =document.createElement("span")

// let episodeNum =episode.number.toString();
// let episodeSeason =episode.season.toString();
// code.innerText =`S${episodeNum.padStart(2, '0')}``E${episodeSeason.padStart(2, '0')}`;

// card.appendChild(code)


 let cardImage =document.createElement("img");
 cardImage.src = episode.image.medium;
 card.appendChild(cardImage);


 let cardSummary =document.createElement("p");
 cardSummary.innerText = episode.summary;
 card.appendChild(cardSummary);

  // console.log(card)
}



window.onload = setup;
