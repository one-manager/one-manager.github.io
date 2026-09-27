document.body.insertAdjacentHTML("beforeend", `
<div class="footer">
    <div class="footer-links">
        <a href="about.html?mode=about">About</a>
        <a href="about.html?mode=contact">Contact</a>
        <a href="about.html?mode=services">Services</a>
    </div>
    <p>© 2026 MARU all rights reserved</p>
</div>

<style>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6vh;
    display: flex; 
   flex-direction: column;
    justify-content: center;
    align-items: center;
   gap: 1vh;
    background: rgba(10, 15, 30, 0.95);
    backdrop-filter: blur(1vh);
    border-top: 0.2vh solid #0ef;
    box-shadow: 0 -0.5vh 2vh rgba(0, 238, 255, 0.2);
    box-sizing: border-box;
    z-index: 1000;
}

.footer-links {
    display: flex;
    flex-direction: row;
    gap: 2vh;
}

.footer a {
    font-size: 1.2vh;
    color: #0ef;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1vh;
    transition: all 0.3s ease;
    border-radius: 0.5vh;
}

.footer a:hover {
    color: #fff;
    background: rgba(0, 238, 255, 0.15);
    text-shadow: 0 0 1vh #0ef;
}

.footer p {
    margin: 0;
    color: #a0aec0;
    font-size: 1vh;
    font-weight: 400;
    letter-spacing: 0.05vh;
}
</style>
`);
