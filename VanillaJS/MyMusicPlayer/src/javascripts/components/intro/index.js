// 인트로 컴포넌트 제작
export default class Intro {
    constructor() {
        this.parentElement = document.querySelector('body');
        this.renderElement = Intro.createRenderElement();
    }

    //정적이라 class내부에서만 사용 가능
    static createRenderElement() {
        const introContainer = document.createElement('div');
        introContainer.classList.add('intro');
        const introImage = document.createElement('img');
        introImage.src = "assets/images/Logo.png";

        introContainer.append(introImage);
        return introContainer;
    }

    show() {
        this.parentElement.append(this.renderElement);
    }
    hide() {
        this.renderElement.style.opacity = 0;
        setTimeout(() => {
            this.parentElement.removeChild(this.renderElement);
        }, 1000);//fade out 을 1초동안 작동하는 효과를 주는 것(1000ms)
    }

}