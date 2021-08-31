// 리스트안에서 엘리먼트()의 인덱스 번호를 찾는 함수
const findIndexListElement = (element) => {
    const listItems = element.parentElement.querySelectorAll('li');
    const currentIndex = Array.prototype.slice.call(listItems).findIndex(
        listitem => listItem === element
    );
    //slice함수 : 배열 복사

    return currentIndex;
}

export default findIndexListElement;
//바깥에서 사용할 수 있도록 해준다.