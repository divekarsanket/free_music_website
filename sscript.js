let songIndex=0;
let audioElement= new Audio('audio/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressBar= document.getElementById('progressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sagara Pran Talamalala", filepath: "audio/1.mp3", coverPath: "background.jpg"},
    {songName: "Jayostute", filepath: "audio/2.mp3", coverPath: "background.jpg"},
    {songName: "Pratham Tula Vandito", filepath: "audio/3.mp3", coverPath: "background.jpg"},
    {songName: "Datun Kantha Yeto", filepath: "audio/4.mp3", coverPath: "background.jpg"},
    {songName: "Taare Zameen Par", filepath: "audio/5.mp3", coverPath: "background.jpg"},
    {songName: "Behti Hawa Sa Tha Woh", filepath: "audio/6.mp3", coverPath: "background.jpg"},
    {songName: "Tera Yaar Hoon Main", filepath: "audio/7.mp3", coverPath: "background.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100)
    progressBar.value= progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime= progressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `audio/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex=0        
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `audio/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0        
    }
    else{
        songIndex -=1;
    }
    audioElement.src= `audio/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})