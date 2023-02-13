const botonLinked = document.getElementById("botonlinked");
const botonGitHub =document.getElementById("botongithub");
const linkedInURL = "https://www.linkedin.com/in/facundo-olivera-878085249/";
const gitHubURL = "https://github.com/Olfanahel";

botonLinked.addEventListener('click',e=>{
    window.open(linkedInURL);
})

botonGitHub.addEventListener('click', e=>{
    window.open(gitHubURL);
})