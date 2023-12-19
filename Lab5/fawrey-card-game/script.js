function check() {
    var image = document.getElementById("photo");
    var data = document.getElementById("pass");
    
    if (data.value.toLowerCase() == '12345') {
        image.setAttribute("id", "newPhoto")
        image.innerHTML = `
            <img src="https://fawrycardgame.netlify.app/images/maxresdefault.jpg" alt="">
        `;
    }else{
        alert("Wrong password")
    }
}