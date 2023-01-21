function loaded() {
    // alert('Please leave this page');
    getFeed("latest");
}



function getFeed(type) {
    fetch("http://stardash.de:2000/feed/"+type)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        var feed;


        response.feed.forEach(element => {
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

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.visibility = "hidden"
}
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openbtn").style.visibility = "visible"
}

