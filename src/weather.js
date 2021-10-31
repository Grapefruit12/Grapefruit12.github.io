/*
<div id="weather">
       
       <span></span>
       <span ></span>
</div>
*/


const API_KEY="5629af3e69d999eae78a650ca6d04a64";

function A(position){
    //console창에서 coords(좌표)->latitude(위도), longitude(경도)있음
    const lat=position.coords.latitude;//lat(위도)=위치.좌표.위도
    const lon=position.coords.longitude;//lng(경도)=위치.좌표.경도
    console.log("You live in",lat,lon);//너가 사는 곳은,lat,lng
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);//확인용
    fetch(url)
        .then(response =>response.json())
        .then(data => {
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}도`;
    });
    //js에서 불러오기/fetch-(promise:당장 뭔가 일어나지않고 시간이 좀 걸린뒤에 일어나는것)
}

function B(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(A,B);//사용자.위치.현재위치얻기(성공,에러)-브라우저에 위치 좌표 주기


//lat,lng의 숫자->장소로 바꾸기
//1.서비스 사용-api계정 열기
//openweathermap.org





