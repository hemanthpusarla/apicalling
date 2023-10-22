var githubapi = fetch("https://api.github.com/users/uspolo87");

githubapi.then(success,error);

function success(res){

    if (res.status === 200){
        res.json().then(function(res) {


            document.getElementById("username").innerHTML = res.name;
            document.getElementById("userrepos").innerHTML = `user has ${res.public_repos}`
            document.getElementById("userimage").setAttribute("src", res.avatar_url);

        });
        
    }
    
}

function error(err){
    console.log({ err });
}
