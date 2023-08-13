const quotes = [
    {
        quote: "네가 무언가를 믿을 때, 온 힘을 다해, 무조건적으로 그리고 여지없이 그것을 믿어라",
        author: "월트 디즈니"
    },
    {
        quote: "역경 속에 피어나는 꽃이 가장 귀하고 아름다워",
        author: "뮬란 中"
    },
    {
        quote: "두고 간 것에 집착한다면, 앞에 놓인 것을 절대 볼 수 없을 것이다.",
        author: "라따뚜이 中"
    },
    {
        quote: "과거가 널 아프게 할 수도 있다. 하지만 과거에서 도망치는 것도 과거에서 배우는 것도 네 선택이다.",
        author: "라이온 킹 中"
    },
    {
        quote: "너는 매일 행복할 수 없다. 하지만 행복한 것들이 매일 존재한다.",
        author: "곰돌이 푸 中"
    },
    {
        quote: "누군가를 사랑하려면, 먼저 자신을 사랑해야 한다.",
        author: "미녀와 야수 中"
    },
    {
        quote: "오늘의 특별한 순간들은 내일의 기억들이다.",
        author: "알라딘 中"
    },
    {
        quote: "눈을 감지 마. 봐봐! 공포의 실체가 너가 생각하는 것과 다를 수도 있어.",
        author: "니모를 찾아서 中"
    },
    {
        quote: "누구든지 원하는 것을 이룰 수 있어.",
        author: "쥬토피아 中"
    },
    {
        quote: "밖에서 모험하라. 그럴 만한 가치가 있다.",
        author: "라푼젤 中"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

