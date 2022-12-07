//CONSTANTES
const audioLink = "https://cms-public-artifacts.artlist.io/content/music/aac/6192_262020_262020_Funky_Chinese_Chicken_-16-44.1-.aac";

//NODOS
const buttonNode = document.querySelector('.btn');
const heart = document.querySelector('#heart');

const audioNode = document.createElement('audio');
audioNode.src = audioLink;

console.log(heart.id);
//FUNCIONES
const playMusic = () => {
    if (audioNode.paused){
        audioNode.play()
        buttonNode.innerHTML = '<i class="fa-solid fa-play"></i>'
    } else {
        audioNode.pause()
        buttonNode.innerHTML = '<i class="fa fa-pause"></i>'
    }
    
}
// fa-regular fa-heart
//fa-solid fa-heart
const favs = () => {
   if( heart.id = 'heart' ){
       
       heart.classList.remove('fa-heart')
       heart.classList.add('fa-rocket')
       
   } else {
    heart.classList.add('fa-heart')
   }

}


// Eventos (listeners)
buttonNode.onclick = playMusic;

heart.onclick = favs;