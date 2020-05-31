const cloaking = document.querySelector('#cloaking-js'),
wraith = document.querySelector('#wraith-js');


function Cloaking(event){
    wraith.classList.toggle("wraith");
}

function init(){
    cloaking.addEventListener("click", Cloaking);
}

init();