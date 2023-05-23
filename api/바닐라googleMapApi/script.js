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

fnGoogleMapInit() //맵초기화