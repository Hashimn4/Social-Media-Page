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
            <p class="info-name">Christina Everleen</p>
            <p class="info-profession">Human Resources Expert</p>
        </div>
        <div class="card__wrapper-socials">
            <div class="socials-facebook">
                <img src="../images/facebook-icon.png">
                <p>Facebook</p>
            </div>
            <div class="socials-instagram">
                <img src="../images/instagram-icon.png">
                <p>Instagram</p>
            </div>
            <div class="socials-twitter">
                <img src="../images/twitter-icon.png">
                <p>Twitter</p>
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
        border-radius: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-align: center;
        font-family: 'Noto Sans', sans-serif; 
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

    .card__wrapper-info {
        display: flex;
        flex-direction: column;
        gap: 5px
    }

    .info-name {
        font-weight: 700;
    }

    .info-profession {
        font-size: 0.8rem;
    }

    .card__wrapper-socials {
        display: flex;
        flex-direction: column;
        width: 65%;
        gap: 5px;
    }

    .card__wrapper-socials img{
        width: 15px;
        margin: 0 40px 0 0;
    }

    .socials-facebook {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #1778F2;
        padding: 10px 0 10px 10px;
        border-radius: 3px;
        color: #1778F2;
    }

    .socials-instagram {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #833AB4;
        padding: 10px 0 10px 10px;
        border-radius: 3px;
        color: #E1306C;
    }

    .socials-twitter {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #1DA1F2;
        padding: 10px 0 10px 10px;
        gap: 10px;
        border-radius: 3px;
        color: #1DA1F2;
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