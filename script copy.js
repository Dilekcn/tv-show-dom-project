//You can edit ALL of the code here
const rootElem = document.getElementById("root");
function fectchEpisodes(url){
  fetch(url)
  .then((data)=>{
    return data.json();
  })
  .then((episodeList) => {
    makePageForEpisodes(episodeList);
  })

  .catch((error) => console.log(error));
}

function setup() {
  // const allEpisodes = getAllEpisodes();
  //

fectchEpisodes("https://api.tvmaze.com/shows/82/episodes")

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


let searchOption = document.querySelector("#searchOption");

searchOption.onclick = (event) =>{
  event.preventDefault();
  
}

function filterEpisodes(episode){
  console.log(episode)
  let searchEpisodesBox =document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value)

  if(episode.name.toLowerCase().includes(searchEpisodesBox.value.toLowerCase())){
    return true;
  }else {
    return false;
  }
}

function makePageForEpisodes(episodeList) {
  const allEpisodes = getAllEpisodes();

  console.log(episodeList.length);
  rootElem.innerHTML ="";
  const displayEpisode = document.querySelector(".displeyEpisode")
  displayEpisode.innerText ="Displaying "+ episodeList.length + "/" +allEpisodes.length +" episodes";
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach(createCard)
}
function createCard(episode){  
 let card =document.createElement("span")
 let cardTitle =document.createElement("h4")
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
