const body = document.querySelector("body");

const IMG_NUM = 7;

function showImage(num) {
    const image = new Image();

    image.src = `./images/${num}.png`;
    image.classList.add("bgImage");

    body.appendChild(image);
}

function random() {
    const number = Math.floor(Math.random() * IMG_NUM) + 1;

    return number;
}

function execute() {
    const randomNum = random();

    showImage(randomNum);
}

execute();