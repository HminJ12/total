const fnGetLatLng = () => { //현재 위경도를 리턴해주는 함수
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((location)=>{
      resolve(
        {
          lat : location.coords.latitude, //위도
          lng : location.coords.longitude, //경도
        }
      )
    })
  })
}

const fnInitMap = (lat, lng) => { //지도를 그리는 함수
  let map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng },
    zoom: 8
  })//map
  let center = { lat: lat, lng: lng }
  let marker = new google.maps.Marker({position: center, map: map});
  //let marker = new window.google.maps.Marker({position : center, map : map , icon :'./img/marker.png'});
  map.addListener('click', async (e) => {
    let lat = e.latLng.lat()
    let lng = e.latLng.lng()
    let address = await fnGetAddress(lat, lng)
    fnOutputAddress(address)
    fnChangeWeatherHandler(lat, lng)
  })//click
}//fn


//비동기로 만들어줘야 한다 (가져오는데 시간이 걸림)
const fnGetAddress = (lat, lng) => { //주소를 가져오는 함수
  return new Promise((resolve)=>{
    let geocoder = new window.google.maps.Geocoder;
    let latlng = {lat, lng};
    let address
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      try{ //formatted_address에서 에러가 나면 catch문으로 간다
        address = results[3].formatted_address //이항식, 주소가 있으면 결과를 내보내고 주소가 없으면 false가 들어감
      }catch{
        address = "해당 위치의 주소는 존재하지 않습니다"
      }
      resolve(address)
    }); //시간이 걸림, 주소를 받아오고나서 할 일, 주소를 리턴해준다
  })
}

const fnOutputAddress = (address) => { //받은 주소정보를 이용해 주소를 출력하는 함수
  document.querySelector(`.address`).innerText = address
}

const fnGoogleMapInit = async () => { //현재 위치를 받아서 지도를 그리는 함수
  
  let {lat, lng} = await fnGetLatLng() //위경도를 객체로 리턴, 따로 쓰고 싶으면 구조분해하기 
  let address = await fnGetAddress(lat, lng) //주소를 리턴해주는 함수, 현재 위치의 lat, lng를 넣은 거임
  fnOutputAddress(address)
  fnInitMap(lat, lng)
}


//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/3.0/onecall?lat=37.4898688&lon=126.73024&appid=129f5a9ddaf6871b7eb3b3866662bc93
//37.4898688 126.73024
const fnGetWeather = (lat, lng) => { //비동기로 날씨정보 json데이터 수신
  return new Promise((resolve)=>{
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=129f5a9ddaf6871b7eb3b3866662bc93`
    fetch(url) //외부데이터 가져올 때 사용하는 내장함수
      .then((data)=>{
        resolve(data.json()) //다음 애한테 넘겨주겠다
      }) 
      .catch(()=>{
        alert('날씨정보를 받아오던 중 오류가 발생했습니다')
      })
  })
}

const fnSetWeather = (data) => { //받아온 날씨정보를 출력용으로 변환
  let time = new Date(data.dt * 1000)  //리눅스 타임에서는 초를 써서 똑같이 맞춰주려고 1000을 곱한다
  let year = time.getFullYear() 
  let dayArr = ['일','월','화','수','목','금','토']
  let day = dayArr[time.getDay()]
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours()
  let min = time.getMinutes()
  let desc = data.weather[0].description
  let temp = (data.temp - 273.15).toFixed(1) //일반적인 섭씨온도로 바꾼다
  return {year, month, date, hour, min, day, desc, temp}
}

const fnWeatherHandler = async () => { //날씨 출력
  const {lat, lng} = await fnGetLatLng()
  const weatherData = await fnGetWeather(lat, lng)
  const {year, month, date, hour, min, day, desc, temp} = fnSetWeather(weatherData.current)
  document.querySelector(`.time`).innerText = `${year}-${month}-${date}, ${hour}:${min}, ${day}요일`
  document.querySelector(`.desc`).innerText = `${desc}`
  document.querySelector(`.temp`).innerText = `${temp}`
}

const fnChangeWeatherHandler = async (lat, lng) => { 
  const weatherData = await fnGetWeather(lat, lng)
  const {year, month, date, hour, min, day, desc, temp} = fnSetWeather(weatherData.current)
  document.querySelector(`.time`).innerText = `${year}-${month}-${date}, ${hour}:${min}, ${day}요일`
  document.querySelector(`.desc`).innerText = `${desc}`
  document.querySelector(`.temp`).innerText = `${temp}`
}





fnGoogleMapInit() //맵초기화
fnWeatherHandler() //초기 위치를 이용하여 날씨 정보 출력