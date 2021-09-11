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

const allEpisodes = getAllEpisodes();
let filteredEpisodes = allEpisodes.filter(filterEpisodes);
makePageForEpisodes(filteredEpisodes)
}

function filterEpisodes(episode){
  let searchEpisodesBox =document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value)

  if(episode.name.toLowerCase().includes(searchEpisodesBox.value.toLowerCase())){
    return true;
  }else {
    return false;
  }
}

function makePageForEpisodes(episodeList) {
  rootElem.innerHTML ="";

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach(createCard)
}
function createCard(episode){  
 let card =document.createElement("span")
 let cardTitle =document.createElement("h2")
 cardTitle.innerText =episode.name;
 cardTitle.className ="episodeAlign"
 card.appendChild(cardTitle);

 let cardEpisodeNumber = document.createElement("h5");
// cardEpisodeNumber.innerText =episode.season+ " " + episode.number;
cardEpisodeNumber.textContent =` -S0${episode.season}E0${episode.number}`;
card.appendChild(cardEpisodeNumber);


 let cardImage =document.createElement("img");
 cardImage.src = episode.image.medium;
 cardImage.alt = episode.name;
 cardImage.title = episode.name;
 cardImage.className = "imgCenter";

 card.appendChild(cardImage);


 let cardEpisodeSummary =document.createElement("span");
 cardEpisodeSummary.innerHTML = episode.summary;
 card.appendChild(cardEpisodeSummary);

 card.className = "episodeCard";

rootElem.appendChild(card)

}




window.onload = setup;
