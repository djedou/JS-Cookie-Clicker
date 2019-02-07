


window.onload = () => {
    let score = 0;
    let button = document.getElementById("clic");
    let affichage = document.getElementById("affichage");

    function click() {
        score++;
        affichage.innerText = score;
    }

    button.addEventListener("click", function(e){
        e.preventDefault();
        click();
    })


}