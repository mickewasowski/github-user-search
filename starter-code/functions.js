function toggleTheme() {
    let current = event.target.classList[0];

    if (current === "light-toggle") {
        let darkElements = Array.from(document.getElementsByClassName("dark"));
        darkElements.forEach((x) => {
            x.classList.remove('dark');
            x.classList.add('light');
        });

        let currentBtns = Array.from(document.getElementsByClassName('light-toggle'));
        currentBtns.forEach((x) => {
            console.log(x);
            x.style.display = "none";
        });

        let nextBtns = Array.from(document.getElementsByClassName("dark-toggle"));
        nextBtns.forEach((x) => {
            x.style.display = "block";
        });
    }
    else if (current === "dark-toggle") {
        let darkElements = Array.from(document.getElementsByClassName("light"));
        darkElements.forEach((x) => {
            x.classList.remove('light');
            x.classList.add('dark');
        });

        let currentBtns = Array.from(document.getElementsByClassName('dark-toggle'));
        currentBtns.forEach((x) => {
            x.style.display = "none";
        });

        let nextBtns = Array.from(document.getElementsByClassName("light-toggle"));
        nextBtns.forEach((x) => {
            x.style.display = "block";
        });
    }
}

function showError() {
    let error = document.getElementById('error');
    error.style.display = "block";
}