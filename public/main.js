function loaded() {
    // alert('Please leave this page');
    getFeed();
}

function getFeed() {
    fetch("http://stardash.de:2000/feed/latest")
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("feed").innerHTML = response.version_name;
    })
    .catch(err => console.log(err))
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }