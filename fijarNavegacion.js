

window.addEventListener('scroll',e =>{
    const barra = document.getElementById("barra");
    if(window.scrollY>650){
        barra.classList.add("fixed-top");
    }else if(window.screenY<650){
        barra.classList.remove("fixed-top");
    }
})