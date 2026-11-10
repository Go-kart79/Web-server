
const button = document.getElementById('num');
const place = document.getElementById('place');

button.onclick = function() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    place.textContent = randomNum;
};
