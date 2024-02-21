console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("/songs/1.mp3");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Greedy",
    filePath: "/songs2/1.mp3",
    coverPath: "/covers2/1.jpg",
  },
  {
    songName: "Summer",
    filePath: "/songs2/2.mp3",
    coverPath: "/covers2/2.jpg",
  },
  {
    songName: "Lovin on Me",
    filePath: "/songs2/3.mp3",
    coverPath: "/covers2/3.jpg",
  },
  {
    songName: "Lover",
    filePath: "/songs2/4.mp3",
    coverPath: "/covers2/4.jpg",
  },
  {
    songName: "Houdini",
    filePath: "/songs2/5.mp3",
    coverPath: "/covers2/5.jpg",
  },
  {
    songName: "Starboy",
    filePath: "/songs2/6.mp3",
    coverPath: "/covers2/6.jpg",
  },
  {
    songName: "Strangers",
    filePath: "/songs2/7.mp3",
    coverPath: "/covers2/7.jpg",
  },
  {
    songName: "Snooze",
    filePath: "/songs2/18.mp3",
    coverPath: "/covers2/8.jpg",
  },
  {
    songName: "Paint the town red",
    filePath: "/songs2/9.mp3",
    coverPath: "/covers2/9.jpg",
  },
  {
    songName: "Do it",
    filePath: "/songs2/10.mp3",
    coverPath: "/covers2/10.jpg",
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
      audioElement.src = `/songs2/${songIndex + 1}.mp3`;
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
  audioElement.src = `/songs2/${songIndex + 1}.mp3`;
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
  audioElement.src = `/songs2/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
