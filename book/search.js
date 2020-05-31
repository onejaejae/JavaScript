const form = document.querySelector('#content'),
 text = document.querySelector('.input');

console.log(event);
function book(event){
   console.log(text.value);
   event.preventDefault();
}
function init(){
    form.addEventListener("submit", book)
}

init();