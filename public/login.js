function submit() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username.length < 1) {
        return alert("enter your username")
    }
    if (password.length < 5) {
        return alert("enter your password")
    }

   // setCookie("username", username, 30);

    document.getElementById('username').value = ""
    document.getElementById('password').value = ""

    fetch("http://stardash.de:2000/login/"+username+"/"+password)
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