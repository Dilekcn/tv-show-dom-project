//Toggle

const ball = document.querySelector(".toggle_ball");
const items = document.querySelectorAll(".container,.movie_list_title,.navbar_container,.sidebar,.left_menu_icon,.toggle,.toggle_ball"); 
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
})


// const url = 'https://api.tvmaze.com/shows/82/episodes';
// //Fetch
// fetch(url)
//   .then(response => response.json())
//   .then(data => card(data))
//   .catch(err =>{console.log(err)})
 
// rewrite setup to be async and separate make page and search - await keyword ensures we'll wait until the episodeList is set
async function setup() {
  await fetch("https://api.tvmaze.com/shows/82/episodes")
  .then((res) => res.json())
  .then((episodes) => {
    episodeList = episodes;
  });
  console.log(episodeList)
  card(episodeList);
  // searchEpisodes(episodeList);
}

// rewrite searchEpisodes to use episodeList instead of allEpisodes
function searchEpisodes(episodeList) {
   let searchEpisodesBox = document.querySelector("#searchEpisodes");
console.log(searchEpisodesBox.value);

let filteredEpisodes = episodeList.filter(filterEpisodes);
card(filteredEpisodes);
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


let container = document.querySelector(".movie_card_container")
function card(data){
  console.log(data)

    container.innerHTML ="";
    const displayEpisode = document.querySelector(".displeyEpisode")
    displayEpisode.innerText ="Displaying "+ data.length + "/" +data.length +" episodes";
   
    data.forEach(createCard);
    // searchEpisodes(data)


}

  function createCard(movie){
      // console.log(movie)
      let cardDiv =document.createElement("div");
      cardDiv.className ="card";
      let img = document.createElement("img");
      img.className="card-img"

      let divTitle =document.createElement("div");
      divTitle.className ="episode-name"
      let divContent =document.createElement("div");
      divContent.className="overview";
      let p = document.createElement("p");
      p.className="card-text"
      let cardEpisodeNumber = document.createElement("span");
      cardEpisodeNumber.className ="episode-number"
      let title = document.createElement("h3");
      title.className = "episode-title";
    


      img.src=movie.image.medium;
      cardEpisodeNumber.textContent =` -S0${movie.season}E0${movie.number}`;
      title.innerText=movie.name;
      p.innerHTML = movie.summary;

      cardDiv.appendChild(img);
      divTitle.appendChild(title);
      divTitle.appendChild(cardEpisodeNumber);

      cardDiv.appendChild(divTitle);
      divContent.appendChild(p);
      cardDiv.appendChild(divContent);

      container.appendChild(cardDiv);
    }



    //Search
  
      /************************************************** */
//  let searchEpisodesBox =document.querySelector("#searchEpisodes");
// searchEpisodesBox.addEventListener("keyup",searchEpisodes);


// function searchEpisodes(){
//   let searchEpisodesBox =document.querySelector("#searchEpisodes");
// console.log(searchEpisodesBox.value)


// }


window.onload = setup;