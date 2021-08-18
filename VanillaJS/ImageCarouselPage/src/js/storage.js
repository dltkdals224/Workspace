(() => {

    //React처럼 동작하도록 하여야한다.
    //새로고침 발생시, 순서변경 없이 그대로 호출.

    //최초 실행시 자동으로 local값 불러오기.
    //추가,삭제시 local값 변경하기.
    const carousel = document.querySelector("#carousel");

    const IMG_KEY = "img";

    let img = [];

    //https://www.python2.net/questions-1168224.htm 확인 필요
    function readURL(input) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector().src = e.target.result;
            reader.readAsDataURL(input.files[0]);
        }
    }

    function handleImgSubmit(event) {
        event.preventDefault();
        console.log("hello");

        let test = document.querySelector(".carousel-list li:nth-child(1)");
        imgData = getBase64Image(test);
        localStorage.setItem("imgData", imgData);

    }

    //실행부
    carousel.addEventListener("load", handleImgSubmit);

})();