const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //String으로 감싸는 이유?
    const hours = String(date.getHours()).padStart(2,"0"); //2자리가 안된다면 start쪽 0으로 pading(2자리 될 때까지dkd)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //즉시 실행 한번.
//setTimeout(sayHello,0); //0ms후 sayHello작동(한번)
setInterval(getClock,1000); //1000ms마다 sayHello작동

//Date()의 function도 한번 확인해 보도록.