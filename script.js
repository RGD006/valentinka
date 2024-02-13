function no() {
    let element = document.getElementsByClassName("yes");
    element.innerHTML = 'Это риторический вопрос';
    let image = document.getElementsByClassName("hom");
    image.src = 'image/papuga.jpg'; 
    console.log("event no");
}

function yes() {
    console.log("event yes");
}
