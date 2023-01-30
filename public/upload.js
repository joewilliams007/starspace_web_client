var session;

function loaded() {
    checkCookie();
}

function submit() {
    const content = document.getElementById('content').value
    const tags = document.getElementById('tags').value

    if (content.length < 1) {
        return alert("enter your message")
    }


   // setCookie("username", username, 30);

    document.getElementById('content').value = ""
    document.getElementById('tags').value = ""

    fetch('http://stardash.de:2000/upload-post-text', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "session": session, "content": content, "tags": tags })
    }).then(res => {
        console.log("Request complete! response:", res)
        window.location.replace("http://stardash.de:7788");
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    user_id = getCookie("user_id");
    session = getCookie("session");
}