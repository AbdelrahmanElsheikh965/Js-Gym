function zuck()
{
    var photo = document.getElementById("image");
    photo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg");
    var data = document.getElementById("container");
    data.innerHTML = `
    <h4><b>Name: Mark Zuckerberg</b></h4>
    <p>Position: CEO OF Meta</p>
    `;
}

function jobs()
{
    var photo = document.getElementById("image");
    photo.setAttribute("src", "https://static.toiimg.com/thumb/msid-86749110,width-400,resizemode-4/86749110.jpg");
    var data = document.getElementById("container");
    data.innerHTML = `
    <h4><b>Name: Steve Jobs</b></h4>
    <p>Position: CEO OF Apple</p>
    `;
}