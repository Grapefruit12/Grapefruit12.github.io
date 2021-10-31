/*
<div id="quote">
       <span></span>//quote1
       <span></span>//author1
</div>
*/

const quotes=[
    {quote:"사람들이 대게 기회를 놓치는 이유는 기회가 작업복 차림의 일꾼 같아 일로 보이기 때문이다.",author:"토마스 A. 에디슨",},
    {quote:"계획 없는 목표는 한낱 꿈에 불과하다.",author:"생텍쥐페리",},
    {quote:"인생에 필요한 것은 무지와 확신 뿐이다. 그러면 성공은 확실하다.",author:"마크 트웨인",},
    {quote:"역경은 누가 진정한 친구인지 가르쳐준다.",author:"로이스 맥마스터 부욜",},
    {quote:"한 시간 독서로 누그러지지 않은 걱정은 결코 없다.",author:"샤를 드 스공다",},
    {quote:"한 권의 책을 읽음으로써 자신의 삶에서 새 시대를 본 사람이 너무나 많다.",author:"헨리 데이비드 소로우",},
];

const quote1=document.querySelector("#quote span:first-child");
const author1=document.querySelector("#quote span:last-child");

const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
                                   
quote1.innerText=todayQuote.quote;
author1.innerText=`- ${todayQuote.author} -`;