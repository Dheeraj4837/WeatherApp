// window.alert("Hello");
async function w() {
  // window.alert("hello");
  const city = document.querySelector("#search>input").value;
  if (city == "") {
    alert("Please Enter a city Name");
  } else {
    const apikey = "57ba193832f804d1ec9e5af253bfc917";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    let res= await fetch(url);
    console.log(res);
    let data=await res.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp);
    document.getElementById('city').innerHTML=data.name;
    wind.innerHTML=data.wind.speed+"km/h";
    humidity.innerHTML=data.main.humidity+"%";

    
  }
}
