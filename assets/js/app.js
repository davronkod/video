const vidEl = document.querySelector("#video")
const wEl = document.querySelector("#video_width");
const hEl = document.querySelector("#video_height");
const oEl = document.querySelector("#video_opacity");
const bEl = document.querySelector("#video_border");
const conEl = document.querySelector("#btn_control")
const autoEl = document.querySelector("#btn_auto")


wEl.addEventListener("input", () => {
    vidEl.style.width = wEl.value + "px";
})
hEl.addEventListener("input", () => {
    vidEl.style.height = hEl.value + "px";
})
oEl.addEventListener("input", () => {
    vidEl.style.opacity = oEl.value + "px";
})
bEl.addEventListener("input", () => {
    vidEl.style.borderRadius = bEl.value + "px";
})

conEl.addEventListener("click", () => {
    if (document.getElementById("video").controls == false) {
        document.getElementById("video").controls = true;
    }
    else {
        document.getElementById("video").controls = false;
    }
})
autoEl.addEventListener("click", () => {

    let vid = document.getElementById("video");
    vid.autoplay = true;
    vid.load();
})

