alert("Click on screen and enjoy music !")

var music = 

document.getElementById("music")
    music.load();
document.addEventListener("click", function(){
    music.play()
})