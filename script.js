const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.3;

musicBtn.addEventListener("click", function () {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸️";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }

});


 
