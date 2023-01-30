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
