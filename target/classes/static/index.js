// alert("Welcome to the Superhero Web Application!");
console.log("hello from js");

var users=[
    {
        "name":"MOHAMMED ABUZAR",
        "gender":"male",
         "img" : "passport photo.png"
    },
    {
        "name" :"REAVEALED Spiderman",
        "gender" : "male",
            "img" : "spiderman.jpg"
    }
]

var id = 0;
function ToggleUser(){
    id = (id + 1) % 2;

    var UserImage = document.getElementById("user-image");
    UserImage.src = users[id].img;

    var UserName = document.getElementById("user-name");
    UserName.innerHTML = users[id].name;

    var UserGender = document.getElementById("user-gender");
    UserGender.innerHTML = users[id].gender;

    var background = document.getElementById("background");
    background.src = users[id].img;
}

function RandomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(response)
        {
            return response.json();
        })
        .then(function(data){
    var UserData = data.results[0];

    var UserImage = document.getElementById("user-image");
    UserImage.src = UserData.picture.large;

    var UserName = document.getElementById("user-name");
    UserName.innerHTML = UserData.name.first + " " + UserData.name.last;

    var UserGender = document.getElementById("user-gender");
    UserGender.innerHTML = UserData.gender;

        }
    )

}
