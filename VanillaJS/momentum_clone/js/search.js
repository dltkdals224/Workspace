const Searching = Search.prototype;

function Search() {
    this.keyword = document.querySelector(".search input");
    this.engine = document.querySelector(".SelectSearch");
    this.button = document.querySelector(".img-button");
    this.form = document.querySelector(".search");

    this.Engine();
}

Searching.Engine = function() {
    this.form.addEventListener("submit", e => {
        e.preventDefault();

        let engine = this.engine.value;
        let keyword = this.keyword.value;

        if(engine === "google"){
            location.href = "https://www.google.co.kr/search?q=" + keyword;
        }
        else if(engine === "naver"){
            location.href = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + keyword;
        }
    });
}

new Search();