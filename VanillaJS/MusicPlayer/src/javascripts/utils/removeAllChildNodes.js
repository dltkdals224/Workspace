// 자신의 모든 자식 엘레먼트 제거하기

export default (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}