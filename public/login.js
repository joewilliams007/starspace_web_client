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

    document.getElementById('message').value = ""
    document.getElementById('password').value = ""

    fetch("http://stardash.de:2000/login/"+username+"/"+password)
    .then(response => response.json())
    .then((response) => {
        alert(response)
    })
    .catch(err => console.log(err))
}