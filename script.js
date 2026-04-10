const hero = document.getElementById("gameHero");
const video = document.querySelector(".game-video");

const popup = document.getElementById("hero-popup");
const closeBtn = document.querySelector(".close-btn");


hero.addEventListener("mouseenter", () => {

    video.currentTime = 2;

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }

});


hero.addEventListener("mouseleave", () => {

    video.pause();
    video.currentTime = 2;

});


video.addEventListener("timeupdate", () => {

    if (video.currentTime >= 15) {
        video.pause();
    }

});


hero.addEventListener("click", () => {

    popup.style.display = "flex";

});


closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});


window.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});
const projectCards = document.querySelectorAll(".project-card");

const projectPopup = document.getElementById("project-popup");
const projectCloseBtn = document.getElementById("project-close");

const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectTech = document.getElementById("project-tech");

/* PROJECT DATA */
const projects = {
    fyp: {
        title: "Unity & AR Indoor Navigation System",
        description: 
            "An augmented‑reality based indoor navigation system developed as a Final Year Project. The system helps users navigate complex indoor environments using AR markers and real‑time directions.",
        tech: "Unity, C#, AR Foundation, Vuforia"
    }
};

/* OPEN POPUP */
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.project;
        const project = projects[key];

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;
        projectTech.textContent = project.tech;

        projectPopup.style.display = "flex";
    });
});

/* CLOSE POPUP */
projectCloseBtn.addEventListener("click", () => {
    projectPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === projectPopup) {
        projectPopup.style.display = "none";
    }
});