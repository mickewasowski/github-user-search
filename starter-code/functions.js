function toggleTheme() {
    let toggleItems = Array.from(document.getElementById('toggle-btns').children);
    let current = toggleItems.filter(x => x.style.display === "block");
    let toBeOn = toggleItems.filter(x => x.style.display === "none");

    let background = document.getElementById('background');
    let searchBar = document.getElementsByClassName("search-bar-container")[0];
    let userDetails = document.getElementsByClassName("user-details-container")[0];


    //placeholder light theme color 214°, 15%, 59%


    if (current[0].classList.contains("light-toggle")) {
        document.body.style.color = "black";
        background.style.backgroundColor = "hsl(222,100%,98%)";
        searchBar.style.backgroundColor = "hsl(240,100%,100%)";
        userDetails.style.backgroundColor = "hsl(240,100%,100%)";
    } else {
        document.body.style.color = "white";
        background.style.backgroundColor = "hsl(222,40%,13%)";
        searchBar.style.backgroundColor = "hsl(224,40%,20%)";
        userDetails.style.backgroundColor = "hsl(224,40%,20%)";
    }

    current.forEach(e => {
        e.style.display = "none";
    });

    toBeOn.forEach(e => {
        e.style.display = "block";
    });


}