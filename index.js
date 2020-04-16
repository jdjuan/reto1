const box = document.getElementById('box');
const sticker = document.getElementById('sticker');
sticker.hidden = true;

const dog = {
    url: "https://media.giphy.com/media/KT6XfdiBWbSak/giphy.gif",
    code: "dog"
}
const cat = {
    url: "https://media.giphy.com/media/3ohryyinlcU8wV1cCk/giphy.gif",
    code: "cat"
}
const cow = {
    url: "https://media.giphy.com/media/xUA7aWkhLe7nIKuX5K/giphy.gif",
    code: "cow"
}

const animals = [dog, cat, cow];

box.addEventListener('keypress', pressEnter);

function pressEnter(event) {

    if (event.keyCode === 13) {
        const content = event.target.value;
        if (content === dog.code) {
            sticker.src = dog.url;
            sticker.hidden = false;
        }
        if (content === cat.code) {
            sticker.src = cat.url;
            sticker.hidden = false;
        }
        if (content === cow.code) {
            sticker.src = cow.url;
            sticker.hidden = false;
        }
    }

}