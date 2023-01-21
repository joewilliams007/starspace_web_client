function loaded() {
    getUser();
    getFeed();
}



function getFeed() {
    fetch("http://stardash.de:2000/posts/" + window.location.pathname.split("/")[2])
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        var feed = '<hr class = "hr">';


        response.post.forEach(element => {
            if (element.image == 1) {
                feed+=' <a href="http://stardash.de:7788/post/'+element.post_id+
                '" style="text-decoration: none;" onclick="this.href="https://google.com";""><div class="item" "><p class="link" style="margin: 2px; color: white"; text-decoration: none;>'
                +element.content+'</p><img src=http://stardash.de:2000/image/'
                +element.image_path.replaceAll(" ","SPACESYMBOL")+' style="width: 100%; max-height: auto; border-radius: 10px">'
                +`<p style='color: white; font-family: nunito; text-align: right'>comments: `+element.comments+` votes: `+element.votes+`</p>`
                +'</div> </a><hr class = "hr">'
            
            } else {
                feed+=' <a href="http://stardash.de:7788/post/'+element.post_id+
                '" style="text-decoration: none;" onclick="this.href="https://google.com";""><div class="item" "><p class="link" style="margin: 2px; color: white"; text-decoration: none;>'
                +element.content+'</p>'
                +`<p style='color: white; font-family: nunito; text-align: right'>comments: `+element.comments+` votes: `+element.votes+`</p>`
                +'</div> </a><hr class = "hr">'
        
            }

        });

        document.getElementById("feed").innerHTML = feed.replace("undefined","");
    })
    .catch(err => console.log(err))
}

function getUser() {

  fetch("http://stardash.de:2000/profile/" + window.location.pathname.split("/")[2])
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      document.getElementById("img").src = "http://stardash.de:2000/image/"+response.image_path;
      document.getElementById("bio").innerHTML = response.bio.replace("undefined", "");
      document.getElementById("username").innerHTML = response.username.replace("undefined", "")+" [+"+response.votes+"]";
    })
    .catch(err => console.log(err))

}