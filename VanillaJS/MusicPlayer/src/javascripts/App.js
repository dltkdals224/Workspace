//전체 총괄 부모 컴포넌트
import {
    Intro
} from './components/index.js';

export default class App {
    constructor() {

    }

    //async는 setup안에서 await키워드를 통해서 DB의 음악정보를 가져오기 위함
    async setup() {
        this.intro = new Intro();
        this.init();
    }

    init() {
        this.intro.show();
        setTimeout(() => {
            this.intro.hide();
        }, 2000);//2초후에 hide를 실행한다는 뜻.
    }
}