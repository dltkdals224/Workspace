// 부모 엘리먼트로 올라가면서 셀렉터를 만족하는 가장 가까운 요소 찾기
const getClosestElement = (element, selector) => {
    let evaluate = false;

    //정규 표현식 사용
    if (/^\./.test(selector)) {
        evaluate = element.classList.contains(selector);
    } else {
        evaluate = element.tagName === selector.toUpperCase();
    }

    if (evaluate) {
        return element;
    }

    return getClosestElement(element.parentElement, selector);
    //조건에 만족되지 않으면 부모쪽으로 타고 올라가며 찾을때까지 재귀.
}

export default getClosestElement;