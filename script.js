// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    const loadingScreen =
        document.getElementById("loading-screen");

    const mainContent =
        document.getElementById("main-content");


    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        loadingScreen.style.visibility = "hidden";

        mainContent.style.opacity = "1";

    }, 4200);

});


// =========================
// PIN SYSTEM
// =========================

let enteredPin = "";


// GANTI PIN DI SINI
const correctPin = "091008";


const pinKeys =
    document.querySelectorAll(".pin-key[data-number]");

const pinDots =
    document.querySelectorAll(".pin-dot");

const deleteButton =
    document.getElementById("pin-delete");

const enterButton =
    document.getElementById("enter-pin");

const message =
    document.getElementById("password-message");


// =========================
// NUMBER BUTTON
// =========================

pinKeys.forEach((button) => {

    button.addEventListener("click", () => {

        if (enteredPin.length >= 6) {
            return;
        }

        enteredPin += button.dataset.number;

        updatePinDisplay();

    });

});


// =========================
// DELETE
// =========================

deleteButton.addEventListener("click", () => {

    enteredPin =
        enteredPin.slice(0, -1);

    updatePinDisplay();

    message.textContent = "";

});


// =========================
// UPDATE DOTS
// =========================

function updatePinDisplay() {

    pinDots.forEach((dot, index) => {

        if (index < enteredPin.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


// =========================
// CHECK PIN
// =========================

enterButton.addEventListener("click", () => {

    if (enteredPin.length < 4) {

        message.textContent =
            "Please enter the 4-digit PIN.";

        return;

    }


    if (enteredPin === correctPin) {

        message.textContent =
            "WEEYYY MASUK EYYY 🙉";

        message.style.color =
            "#f1b6c8";


        setTimeout(() => {

    const pinCard =
        document.querySelector(".pin-card");

    const bouquetScreen =
        document.getElementById("bouquet-screen");


    pinCard.style.opacity = "0";

    pinCard.style.transform =
        "translateY(-20px)";


    setTimeout(() => {

        pinCard.style.display = "none";

        bouquetScreen.classList.add("show");

    }, 600);

}, 500);
if (enteredPin === correctPin) {

    message.textContent =
        "Weyyyyy masuk🙈";

    message.style.color =
        "#f1b6c8";


    setTimeout(() => {

        const pinCard =
            document.querySelector(".pin-card");

        const giftScreen =
            document.getElementById("gift-screen");


        pinCard.style.opacity = "0";

        pinCard.style.transform =
            "translateY(-20px)";


        setTimeout(() => {

            pinCard.style.display = "none";

            giftScreen.classList.add("show");

        }, 600);

    }, 500);

}


    } else {

        message.textContent =
            "Hmmmm salah coba lagii.";

        message.style.color =
            "#ff9aa2";


        // Efek getar ketika salah

        const card =
            document.querySelector(".pin-card");

        card.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );


        enteredPin = "";

        updatePinDisplay();

    }

});

// =========================
// OPEN GIFT
// =========================

const giftScreen =
    document.getElementById("gift-screen");

const giftArea =
    document.getElementById("gift-area");

const openGift =
    document.getElementById("open-gift");

const giftMessage =
    document.getElementById("gift-message");


function openTheGift() {

    if (giftScreen.classList.contains("opened")) {
        return;
    }


    giftScreen.classList.add("opened");

    giftMessage.innerHTML =
        "✨sesuatuu buat kamu ✨";

    openGift.textContent =
        "OPENED ✨";

    openGift.disabled = true;

    openGift.style.opacity = "0.6";


    /* =========================
       TRANSITION TO FLOWERS
    ========================= */

    setTimeout(() => {

        const flowerScreen =
            document.getElementById(
                "flower-message-screen"
            );


        giftScreen.style.opacity = "0";

        giftScreen.style.transform =
            "scale(.95)";


        setTimeout(() => {

            giftScreen.style.visibility =
                "hidden";

            flowerScreen.classList.add("show");

        }, 800);

    }, 1800);

}


    // Setelah animasi selesai,
    // nanti kita lanjutkan ke halaman berikutnya.




giftArea.addEventListener(
    "click",
    openTheGift
);


openGift.addEventListener(
    "click",
    openTheGift
);

// =========================
// FLOWER NEXT BUTTON
// =========================

const flowerNext =
    document.getElementById("flower-next");


flowerNext.addEventListener("click", () => {

    const flowerScreen =
        document.getElementById(
            "flower-message-screen"
        );

    const letterScreen =
        document.getElementById(
            "letter-screen"
        );


    flowerScreen.style.opacity = "0";

    flowerScreen.style.transform =
        "scale(.95)";


    setTimeout(() => {

        flowerScreen.style.visibility =
            "hidden";

        letterScreen.classList.add("show");

    }, 800);

});

// =========================
// LETTER NEXT
// =========================

const letterNext =
    document.getElementById("letter-next");


// =========================
// LETTER → MEMORY
// =========================

letterNext.addEventListener("click", () => {

    const letterScreen =
        document.getElementById(
            "letter-screen"
        );

    const memoryScreen =
        document.getElementById(
            "memory-screen"
        );


    letterScreen.style.opacity = "0";

    letterScreen.style.transform =
        "scale(.95)";


    setTimeout(() => {

        letterScreen.style.visibility =
            "hidden";

        memoryScreen.classList.add("show");

    }, 800);

});

// =========================
// MEMORY → NEXT
// =========================

const memoryNext =
    document.getElementById(
        "memory-next"
    );


// =========================
// MEMORY → PLAYLIST
// =========================

memoryNext.addEventListener("click", () => {

    const memoryScreen =
        document.getElementById(
            "memory-screen"
        );

    const playlistScreen =
        document.getElementById(
            "playlist-screen"
        );


    memoryScreen.style.opacity = "0";

    memoryScreen.style.transform =
        "scale(.95)";


    setTimeout(() => {

        memoryScreen.style.visibility =
            "hidden";

        playlistScreen.classList.add(
            "show"
        );

    }, 800);

});

// =========================
// MUSIC PLAYER
// =========================

const audioPlayer =
    document.getElementById(
        "audio-player"
    );

const playMusic =
    document.getElementById(
        "play-music"
    );

    const albumCover =
  document.querySelector(".album-cover");

const albumGlow =
  document.querySelector(".album-glow");

const musicVisualizer =
  document.querySelector(".music-visualizer");

const previousSong =
    document.getElementById(
        "previous-song"
    );

const nextSong =
    document.getElementById(
        "next-song"
    );

const progress =
    document.getElementById(
        "music-progress"
    );

const currentTime =
    document.getElementById(
        "current-time"
    );

const duration =
    document.getElementById(
        "duration"
    );

const songTitle =
    document.getElementById(
        "song-title"
    );

const songArtist =
    document.getElementById(
        "song-artist"
    );

const songItems =
    document.querySelectorAll(
        ".song-item"
    );


const songs = [

    {
        title:
            "Best Part",

        artist:
            "Orang luar negeri",

        file:
            "audio/song1.mp3"
    },

    {
        title:
            "monokrom",

        artist:
            "manusia kuat",

        file:
            "audio/song2.mp3"
    },

    {
        title:
            "best song of the world",

        artist:
            "windah habatusauda",

        file:
            "audio/song3.mp3"
    }

];


let currentSong = 0;


/* LOAD SONG */

function loadSong(index) {

    const song =
        songs[index];

    audioPlayer.src =
        song.file;

    songTitle.textContent =
        song.title;

    songArtist.textContent =
        song.artist;


    songItems.forEach(
        item =>
            item.classList.remove(
                "active"
            )
    );


    if (songItems[index]) {

        songItems[index]
            .classList.add("active");

    }

}


loadSong(currentSong);


/* PLAY / PAUSE */

playMusic.addEventListener("click", () => {

  if (audioPlayer.paused) {

    audioPlayer.play();

    playMusic.textContent = "❚❚";

    albumCover.classList.add("playing");
    albumGlow.classList.add("playing");
    musicVisualizer.classList.add("playing");

  } else {

    audioPlayer.pause();

    playMusic.textContent = "▶";

    albumCover.classList.remove("playing");
    albumGlow.classList.remove("playing");
    musicVisualizer.classList.remove("playing");

  }

});


/* SONG ENDED */

audioPlayer.addEventListener("ended", () => {

  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  audioPlayer.play();

  playMusic.textContent = "❚❚";

  albumCover.classList.add("playing");
  albumGlow.classList.add("playing");
  musicVisualizer.classList.add("playing");

});


/* NEXT */

nextSong.addEventListener(
    "click",
    () => {

        currentSong++;

        if (
            currentSong >=
            songs.length
        ) {

            currentSong = 0;

        }

        loadSong(currentSong);

        audioPlayer.play();

        playMusic.textContent =
            "❚❚";

    }
);


/* PREVIOUS */

previousSong.addEventListener(
    "click",
    () => {

        currentSong--;

        if (
            currentSong < 0
        ) {

            currentSong =
                songs.length - 1;

        }

        loadSong(currentSong);

        audioPlayer.play();

        playMusic.textContent =
            "❚❚";

    }
);


/* PROGRESS */

audioPlayer.addEventListener(
    "timeupdate",
    () => {

        if (
            audioPlayer.duration
        ) {

            const percent =
                (
                    audioPlayer.currentTime /
                    audioPlayer.duration
                ) * 100;


            progress.value =
                percent;


            currentTime.textContent =
                formatTime(
                    audioPlayer.currentTime
                );

        }

    }
);


/* DURATION */

audioPlayer.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(
                audioPlayer.duration
            );

    }
);


/* SEEK */

progress.addEventListener(
    "input",
    () => {

        if (
            audioPlayer.duration
        ) {

            audioPlayer.currentTime =
                (
                    progress.value / 100
                ) *
                audioPlayer.duration;

        }

    }
);


/* FORMAT TIME */

function formatTime(seconds) {

    if (
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );

    const secs =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(secs).padStart(
            2,
            "0"
        )
    );

}


/* SONG LIST */

songItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                currentSong =
                    Number(
                        item.dataset.song
                    );

                loadSong(
                    currentSong
                );

                audioPlayer.play();

                playMusic.textContent =
                    "❚❚";

            }
        );

    }
);

// =========================
// PLAYLIST → GRATITUDE
// =========================

const playlistNext =
    document.getElementById(
        "playlist-next"
    );


playlistNext.addEventListener("click", () => {

    const playlistScreen =
        document.getElementById(
            "playlist-screen"
        );

    const gratitudeScreen =
        document.getElementById(
            "gratitude-screen"
        );


    playlistScreen.style.opacity = "0";

    playlistScreen.style.transform =
        "scale(.95)";


    setTimeout(() => {

        playlistScreen.style.visibility =
            "hidden";

        gratitudeScreen.classList.add(
            "show"
        );

    }, 800);

});

// =========================
// GRATITUDE JAR
// =========================

const gratitudeJar =
    document.getElementById(
        "gratitude-jar"
    );

const gratitudeMessage =
    document.getElementById(
        "gratitude-message"
    );

const gratitudeNumber =
    document.getElementById(
        "gratitude-number"
    );

const gratitudeText =
    document.getElementById(
        "gratitude-text"
    );

const gratitudeHint =
    document.getElementById(
        "gratitude-hint"
    );

const gratitudeNext =
    document.getElementById(
        "gratitude-next"
    );


const gratitudeMessages = [

    "kamu pendengar yang baikk buat temen temen kamu.",

    "cerita cerita kamu yang unikk.",

    "kamu itu orang yang sabarr bangett.",

    "kamu itu orang yang baik hati dan engga mirip taii hehehe.",

    "teriak teriak yang kadang taii tapi gapapa.",

    "haloo kakak binuss asikkk."

];


let gratitudeIndex = 0;


gratitudeJar.addEventListener(
    "click",
    () => {

        gratitudeMessage.classList.remove(
            "show"
        );


        setTimeout(() => {

            gratitudeNumber.textContent =
                String(
                    gratitudeIndex + 1
                ).padStart(2, "0");


            gratitudeText.textContent =
                gratitudeMessages[
                    gratitudeIndex
                ];


            gratitudeMessage.classList.add(
                "show"
            );


            gratitudeIndex++;


            if (
                gratitudeIndex >=
                gratitudeMessages.length
            ) {

                gratitudeIndex = 0;

                gratitudeHint.textContent =
                    "weeyyyy udah kebuka semua";

                gratitudeNext.classList.add(
                    "ready"
                );

            } else {

                gratitudeHint.textContent =
                    "pencet pencet lagi";

            }

        }, 300);

    }
);

// =========================
// GRATITUDE → FINAL SCREEN
// =========================

gratitudeNext.addEventListener("click", () => {

  if (!gratitudeNext.classList.contains("ready")) {
    return;
  }

  const gratitudeScreen =
    document.getElementById("gratitude-screen");

  const finalScreen =
    document.getElementById("final-screen");

  gratitudeScreen.style.opacity = "0";
  gratitudeScreen.style.transform = "scale(.95)";

  setTimeout(() => {

    gratitudeScreen.style.visibility = "hidden";

    finalScreen.classList.add("show");
    setTimeout(() => {
  launchConfetti();
}, 500);

  }, 800);

});

// =========================
// PLAY AGAIN
// =========================

const replayButton =
  document.getElementById("replay-button");

replayButton.addEventListener("click", () => {

  window.location.reload();

});

audioPlayer.addEventListener("pause", () => {

  albumCover.classList.remove("playing");
  albumGlow.classList.remove("playing");
  musicVisualizer.classList.remove("playing");

  playMusic.textContent = "▶";

});


audioPlayer.addEventListener("play", () => {

  albumCover.classList.add("playing");
  albumGlow.classList.add("playing");
  musicVisualizer.classList.add("playing");

  playMusic.textContent = "❚❚";

});

/* =========================================
   FLOATING MAGIC PARTICLES
========================================= */

function createMagicParticles() {

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("span");

    particle.className = "magic-particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
      Math.random() * 8 + "s";

    particle.style.opacity =
      0.3 + Math.random() * 0.7;

    document.body.appendChild(particle);

  }

}

createMagicParticles();

/* =========================================
   BIRTHDAY CONFETTI
========================================= */

function launchConfetti() {

  const confettiCount = 80;

  for (let i = 0; i < confettiCount; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);


    setTimeout(() => {

      piece.remove();

    }, 6000);

  }

}