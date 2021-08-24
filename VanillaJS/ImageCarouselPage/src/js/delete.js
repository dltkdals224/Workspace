(() => {

    const deleteBtn = document.querySelector("#image-delete-input");

    function deleteImg(event) {
        event.preventDefault();
        //console.log("hello");
        const deleteImg = document.querySelector(".center-img");
        const deleteImgNext = document.querySelector(".center-img+li");
        
        deleteImg.parentNode.removeChild(deleteImg);
        deleteImgNext.classList.add("center-img");
        
        //이거 import가 안되서 전역으로 빼서 사용.
        changeTransform();
    }

    //실행부
    deleteBtn.addEventListener("click", deleteImg);
})();