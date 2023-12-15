// https://api.blablagues.net/?rub=blagues

const header = document.getElementById('header');
const content = document.getElementById('content');


function getJoke() {


fetch("https://api.blablagues.net/?rub=blagues")
.then((res) => res.json())
.then((data) => {
    const data1 = data.data.content;
    header.textContent= data1.text_head;
    content.textContent = data1.text !== ""
    ? data1.text 
    : data1.text_hidden ;
    
});
}

getJoke();

document.body.addEventListener('click', getJoke );