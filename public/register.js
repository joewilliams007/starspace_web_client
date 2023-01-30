function register() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value

    if (username.length < 3) {
        return alert("enter your username atleast 5 characters")
    }
    if (password.length < 5) {
        return alert("enter your password atleast 5 characters")
    }
    if (email.length < 5 || !email.includes("@")) {
        return alert("enter a valid email")
    }

    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
    document.getElementById('email').value = ""

    fetch("http://stardash.de:2000/register/"+username+"/"+email+"/"+password)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        if (response.success == true) {
            setCookie("session", response.session, 90);
            setCookie("user_id", response.user_id, 90);

            window.location.replace("http://stardash.de:7788/");
        } else {
            alert(response.message)
        }
    })
    .catch(err => console.log(err))
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function login() {
     window.location.replace("http://stardash.de:7788/login");
}
