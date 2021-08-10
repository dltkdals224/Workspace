
const twitterConfirm = document.querySelector(".list-sns li:first-child");
const instagramConfirm = document.querySelector(".list-sns li:nth-child(2)");
const facebookConfirm = document.querySelector(".list-sns li:last-child");

function goTwitter(event){
    event.preventDefault();
    location.href = "https://www.twitter.com";
}
function goInstagram(event){
    event.preventDefault();
    location.href = "https://www.instagram.com";
}
function goFacebook(event){
    event.preventDefault();
    location.href = "https://www.facebook.com";
}

twitterConfirm.addEventListener("click", goTwitter);
instagramConfirm.addEventListener("click", goInstagram);
facebookConfirm.addEventListener("click", goFacebook);