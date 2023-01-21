function loaded() {
    getItem();
    getComments();
}

function getItem() {

    fetch("http://stardash.de:2000/post/" + window.location.pathname.split("/")[2])
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            var post;

            post += ` <a href="http://stardash.de:7788/profile/${response.user_id}" style="text-decoration: none; color: white" onclick="this.href="https://google.com">
        <div class="item" "><img src=http://stardash.de:2000/image/${response.profile_image_path.replaceAll(" ", "SPACESYMBOL")} width="20px" height="20px" style="float:left">
      
        <h4 class="link">
            ${response.username} [+${response.profile_votes}]
        </h4>

        </a>
        
`


            if (response.image == 1) {

                post += '<p style="margin: 2px; color: white; text-decoration: none;">' + response.content + '</p>' +
                    '<img src=http://stardash.de:2000/image/' + response.image_path.replaceAll(" ", "SPACESYMBOL")
                    + ' style="width: 100%; max-height: auto; border-radius: 10px">'
                    + `<p style='color: white; font-family: nunito; text-align: right'>comments: ` + response.comments + ` votes: ` + response.votes + `</p></div>`

            } else {

                post += '<p style="margin: 2px; color: white; text-decoration: none;" >' + response.content +
                    '</p>'
                    + "<p style='color: white; font-family: nunito; text-align: right' >comments: " + response.comments + " votes: " + response.votes + '</p>'
                    + '</div>'

            }


            document.getElementById("post").innerHTML = post.replace("undefined", "");
        })
        .catch(err => console.log(err))

}

function getComments() {

    fetch("http://stardash.de:2000/comments/" + window.location.pathname.split("/")[2])
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            var comments;
            comments += '<hr class = "hr">'
            response.comments.forEach(element => {

                comments += '<div class="item" ">'
                comments += `


      <img src=http://stardash.de:2000/image/${element.profile_image_path.replaceAll(" ", "SPACESYMBOL")} width="20px" height="20px" style="float:left">
      
      <h4 class="link">
        <a href="http://stardash.de:7788/profile/${element.user_id}" style="text-decoration: none; color: white" onclick="this.href="https://google.com";"">
            ${element.username} [+${element.profile_votes}]
            </a>
        </h4>`

                if (element.image_path != "-") {
                    comments += '<p style="margin: 2px; color: white; text-decoration: none;"  >' + element.comment + '</p><img src=http://stardash.de:2000/image/' + element.image_path.replaceAll(" ", "SPACESYMBOL") + ' style="width: 100%; max-height: auto; border-radius: 10px"></div>'

                } else {
                    comments += '<p style="margin: 2px; color: white ; text-decoration: none;" >' + element.comment + '</p></div>'
                }
                comments += '<hr class = "hr">'
            });

            document.getElementById("comments").innerHTML = comments.replace("undefined", "");
        })
        .catch(err => console.log(err))

}


