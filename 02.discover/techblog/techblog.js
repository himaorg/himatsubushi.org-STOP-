document.querySelectorAll(".music").forEach(musicPlay => {
    musicPlay.addEventListener("click", function(){
        let player = document.getElementById("player");
        player.src = this.getAttribute("data-music");
        player.play();

    });
});


document.querySelectorAll(".content li").forEach(color => {
    color.addEventListener("click", function(){
        document.querySelectorAll(".content li").forEach(remove => {
            color.classList.remove("selected");
        })
        this.classList.add("selected");
    })
})





