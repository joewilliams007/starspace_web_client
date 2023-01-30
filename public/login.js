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
            alert(response.session)
        } else {
            alert(response.message)
        }
    })
    .catch(err => console.log(err))
}