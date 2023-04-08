let root = document.createElement("div");
let card = document.createElement("section");
let style = document.createElement("style");
let body = document.getElementsByTagName("body")[0];
let html = `
    <div class="card__wrapper">
        <div class="card__wrapper-image">
            <img src='../images/andriyko-podilnyk-jFAG_ixCrsM-unsplash.jpg' >
        </div>
        <div class="card__wrapper-info">
            <p>Christina Everleen</p>
            <p>Human Resources Expert</p>
        </div>
        <div class="card__wrapper-socials">
            <div class="socials-facebook">
                <img src="../images/facebook-icon.png">
                <p>facebook</p>
            </div>
            <div class="socials-instagram">
                <img src="../images/instagram-icon.png">
                <p>facebook</p>
            </div>
            <div class="socials-twitter">
                <img src="../images/twitter-icon.png">
                <p>facebook</p>
            </div>
        </div>
    </div>
`

let cssStyles = `
    .card {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__wrapper {
        width: min(100%, 300px);
        height: 400px;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .card__wrapper-image {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 2px solid purple;
    }

    .card__wrapper-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

body.prepend(root);
root.classList.add("root");
card.classList.add("card");
root.prepend(card);

root.style.cssText = `
    background: url('../images/Sq2hD9.jpeg');
    background-size: cover;
    background-position: center;
`;

root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;