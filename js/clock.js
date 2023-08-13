const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}

getClock();
setInterval(getClock, 1000)



// 새로 배운 것: padStart(원하는 글자 수, "빈 공간 채울 문자")
// padStart, padEnd는 string으로만 쓸 수 있음.
// 숫자형->문자형으로 바꾸는 방법 : String()으로 감싸기!