document.body.insertAdjacentHTML("beforeend", `
<div class="show-page">
    <span class="material-symbols-outlined">menu</span>
</div>

<div class="left-page">
    <div class="itemp" id="navHome">
      <span class="material-symbols-outlined">home</span>
      <p>home</p>
    </div>
    
    <div class="itemp" id="navApps">
      <span class="material-symbols-outlined">apps</span>
      <p>apps</p>
    </div>
</div>

<style>
.show-page {
    position: fixed;
    width: 1vh;
    height: 1.2vh;
    inset: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    color: #fff;
}

.show-page span, .left-page span {
    font-size: 2vh;
}

.left-page {
    position: fixed;
    height: 100vh;
    width: 25vh;
    gap: 1vh;
    background:  
        radial-gradient(circle at top left, rgba(110,231,255,.14), transparent 24%),  
        radial-gradient(circle at top right, rgba(168,85,247,.12), transparent 28%),  
        linear-gradient(180deg, #040711 0%, #050816 100%);
    left: -25vh;
    z-index: 99;
    top: 0;
    transition: .5s;
    display: flex;
    border-right: 2px solid #0ef;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.show-vis {
    left: 0;
} 

.itemp {
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-bottom: .20vh solid #0ef;
    padding-bottom: 1vh;
    gap: 2vh;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
}

.itemp p {
    font-size: 1vh;
}
</style>
`);

// Sidebar Open & Close Listener
document.addEventListener("click", function(e) {
    const page = document.querySelector(".left-page");
    if (e.target.closest(".show-page")) {
        page.classList.add("show-vis");
    } else if (!e.target.closest(".left-page")) {
        page.classList.remove("show-vis");
    }
});

// Navigation Event Listeners
document.getElementById("navHome").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("navApps").addEventListener("click", () => {
    window.location.href = "apps.html";
});

// Load Google Material Icons Font
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
document.head.appendChild(link);
