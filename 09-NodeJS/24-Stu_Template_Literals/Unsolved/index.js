const music = {
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  album: "Currents"
};

// write code between the <div> tags to output the data from the music object above
const songSnippet = `
  <div class="song">
    <p> 
    <h2> ${music.title}</h2>
    <p class="artist">${music.artist}</p>
    <p class="album">${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
