var button = document.getElementById('search_button')
var search = document.getElementById('search_box')


let searchMovie = function () {
  movieName = search.value
  search.value=''
  let url = ''.concat('https://api.themoviedb.org/3/', 'search/movie?api_key=','b20b864ff22d25c58d557360dd47caea', '&query=', movieName);
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      var i;
      var move = "";
      for(i=0;i< Object.keys(data['results']).length;i++){
        move = move + data['results'][i]['title'] + " , ";
      }
      console.log(move)
      document.getElementById('output').innerHTML = move
  })
}


button.addEventListener("click",searchMovie)