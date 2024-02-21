console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio(".songs/Pehle Bhi Main.mp3");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Pehle Bhi Main",
    filePath: "/songs/1.mp3",
    coverPath: "/covers/1.jpg",
  },
  {
    songName: "Husn-Anuv Jain",
    filePath: "/songs/2.mp3",
    coverPath: "/covers/2.jpg",
  },
  {
    songName: "Satranga",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/3.jpg",
  },
  {
    songName: "Tu Hai Kahan",
    filePath: "/songs/4.mp3",
    coverPath: "/covers/4.jpg",
  },
  {
    songName: "O Maahi",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/5.jpg",
  },
  {
    songName: "Chaleya",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/6.jpg",
  },
  {
    songName: "One Love",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/7.jpg",
  },
  {
    songName: "Apna Bana Le",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/8.jpg",
  },
  {
    songName: "Heeriye",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/9.jpg",
  },
  {
    songName: "Cheques",
    filePath: "/songs/3.mp3",
    coverPath: "/covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `/songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
