const button = document.getElementById('myButton');
const content = document.getElementById("content")

let count = 0;

button.addEventListener('click', () => {
    count++;
    content.textContent = count
});