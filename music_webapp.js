const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "music/dharma-ka-vistar-h0.mp3",
        title: "1. Dharma Ka Vistar Ho",
        name_1 : "image/dharma-krishna-arjun.jpg",
    },
    {
        name: "music/Tumko Pake Kiya Paya Hai - Mere Ghar Ram Aaye Hai Song ! Hindi.mp3",
        title: "2. Mere ghar ram aaye hain",
        name_1 : "image/god-ram.jpg",
    },
    {
        name: "music/aigiri-nandini-863.mp3",
        title: "3. Aigiri nandini nandhita",
        name_1 : "image/durga.maa.jpg",
    },
    {
        name: "music/Tu Hi Siya Ka Ram - Sachet Tandon ! Hindi.mp3",
        title: "4. Tu hi siya ka ram",
        name_1 : "image/ram-siya-image.jpg",
    },
    {
        name: "music/Shri Ram Janki Baithe Hai - Devotional.mp3",
        title: "5. Shri ram janki baithe hain",
        name_1 : "image/ram-janki-hanuman.jpg",
    }
];

let isPlaying = false;
let progress = document.getElementById("progress");
//for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    progress.max = music.duration;
    progress.value = music.currentTime
    img.classList.add("anime");
};

//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

if(music.play()){
    setInterval(() => {
        progress.value = music.currentTime;
    },500);
}

progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
};

//changing the music data
const loadSongs = (songs) => {
    title.textContent = songs.title;
    music.src = songs.name;
    img.src = songs.name_1;
};
songIndex = 0;
//loadSongs(songs[0]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length; 
    loadSongs(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 % songs.length) % songs.length; 
    loadSongs(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);


