
// 이미지 위치 변경
function changeTransform() {
    const items = document.querySelectorAll(".carousel-item");

    //forEach문으로 순환?
    items.forEach((e, i) => {
        //degree를 통해 적절한 위치를 부여할 수 있다.
        let degree = 360 / items.length;
        if (items.length == 1) {
            e.style.transform = "rotateY(0deg) translateZ(250px)";
        }
        if (items.length > 1) {
            if (i == 0) {
                e.style.transform = "rotateY(0deg) translateZ(250px)";
            } else {
                e.style.transform = `rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)`;
            }
        }
        // 아이템의 갯수가 5개 이상인 경우
        if (items.length >= 5) {
            if (i == 0) { //center-img
                e.style.transform = "rotateY(0deg) translateZ(250px)";
            } else if (i == 1) { //두번째 아이템
                e.style.transform = `rotateY(72deg) translateZ(250px) rotateY(-72deg)`;
            } else if (i == 2) { //세번재 아이템  
                e.style.transform = `rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)`;
            } else if (i == items.length - 2) { // 리스트의 끝에서 두번째 아이템
                e.style.transform = `rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)`;
            } else if (i == items.length - 1) { // 리스트의 마지막 아이템
                e.style.transform = `rotateY(288deg) translateZ(250px) rotateY(-288deg)`;
            } else {
                e.style.transform = `rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)`;
            }
            //6개 이상이 들어가지 못하는 것이 아님.
        }
    });
}


//해당 꼴로 함수를 감싸서 작성해야 한다.
//전역공간은 공동 작업시 문제가 생길 수 있는 우려가 있기 때문.
(() => {
    // 엘리먼트 가져오기
    const carouselUl = document.querySelector(".carousel-list");
    const imageInput = document.querySelector("#image-upload-input");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    // Next, Prev 이동 버튼
    function moveNext() {
        //찾고자 하는 것에 해당하는 모든 요소 ALL
        const items = document.querySelectorAll(".carousel-item");

        //아이템이 하나면 carousel이 작동할 필요가 없죠
        if (items.length > 1) {
            const currentItem = document.querySelector(".center-img");
            const next = currentItem.nextElementSibling;

            //첫번째 아이템 (img/1.png)이  ul의 끝 요소로 바뀐다.
            carouselUl.appendChild(currentItem);

            //center-img class의 제거 및 부여는 따로 해줘야지 물론.
            currentItem.classList.remove('center-img');
            next.classList.add('center-img');
        }
        changeTransform();
    }

    function movePrev() {
        const items = document.querySelectorAll(".carousel-item");

        if (items.length > 1) {
            const currentItem = document.querySelector(".center-img");
            const lastItem = carouselUl.lastElementChild;

            //처음보는 형식. 기억할 것.
            carouselUl.insertBefore(lastItem, items[0]);
            currentItem.classList.remove("center-img");
            lastItem.classList.add('center-img');
        }
        changeTransform();
    }
    //

    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);


    // 이미지 태그 생성
    function createTag(url) {
        const list = document.createElement("li");
        const img = document.createElement("img");
        list.setAttribute("class", "carousel-item");
        img.src = url;
        list.appendChild(img);
        const items = document.querySelectorAll(".carousel-item");

        items.forEach(item => {
            item.classList.remove('center-img');
        });
        //새로 추가되는 img가 center-img를 가져가야지.
        list.classList.add("center-img");

        return list;
    }

    // 이미지 업로드
    function uploadImg(value) {
        const items = document.querySelectorAll(".carousel-item");
        if (value.files) {
            const reader = new FileReader(); // 웹어플리케이션이 file의 내용을 읽을수 있게 만들어주는 객체

            reader.onload = e => {
                const imgUrl = e.target.result; // 파일의 정보 
                carouselUl.insertBefore(createTag(imgUrl), items[0]);
                changeTransform();
            };
            reader.readAsDataURL(value.files[0]); //readAsDataURL : 컨텐츠를 읽어오는 역할을 합니다. 읽기가 완료되면 onload 이벤트를 트리거합니다.
        }
    }

    imageInput.addEventListener("change", e => {
        uploadImg(e.target);
    });

    // 페이지 로드 > 이미지 위치 변경
    // 전역 객체 window
    window.onload = () => {
        changeTransform();
    }
})();