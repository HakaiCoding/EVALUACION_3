const video = document.getElementById("video-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const forwardBtn = document.getElementById("forward-btn");
const rewindBtn = document.getElementById("rewind-btn");
const startBtn = document.getElementById("start-btn");
const endBtn = document.getElementById("end-btn");
const volumeRange = document.getElementById("volume-range");
const progressBar = document.getElementById("progress-bar");

playBtn.addEventListener("click", () => {
    video.play();
});

pauseBtn.addEventListener("click", () => {
    video.pause();
});

stopBtn.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
});

forwardBtn.addEventListener("click", () => {
    video.currentTime += 10;
});

rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});

startBtn.addEventListener("click", () => {
    video.currentTime = 0;
});

endBtn.addEventListener("click", () => {
    video.currentTime = video.duration;
});

volumeRange.addEventListener("input", () => {
    video.volume = volumeRange.value;
});

video.addEventListener("timeupdate", () => {
    const progress = video.currentTime / video.duration;
    progressBar.innerHTML = `<span style="width: ${progress * 100}%"></span>`;
});
