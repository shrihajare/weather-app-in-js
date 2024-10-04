const apikey ="9fa95a631d7f7642bce45a946770394d"
const apiurl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const SearchBox =document.querySelector(".search input");
const SearchBtn =document.querySelector(".search button");

async function CheckWeather(city){
    console.log(city);
      const response= await fetch(apiurl  + city + `&appid=${apikey}`);
      var data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name; 
      document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C"; 
      document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
      document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr"; 
    

}

SearchBtn.addEventListener("click", () => {
    const city = SearchBox.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    CheckWeather(city);
});


SearchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        SearchBtn.click();
    }
});


async function CheckWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name; 
        document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C"; 
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/hr"; 
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}



  

document.addEventListener("click",()=>{
    if(SearchBox.value===""){
        return null;
    }
    CheckWeather(SearchBox.value);
})




// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID",
//   };
  
//   firebase.initializeApp(firebaseConfig);
//   const messaging = firebase.messaging();
  
// messaging.requestPermission()
//   .then(() => messaging.getToken())
//   .then(token => {
//     console.log("User Token: ", token);
//     // Send this token to your backend to send notifications
//   })
//   .catch(err => console.error("Permission Denied", err));



//   messaging.onMessage(payload => {
//     console.log("Message received. ", payload);
//     // Display notification using Notification API
//     new Notification(payload.notification.title, {
//       body: payload.notification.body,
//     });
//   });
  

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBc-7KJfmujZ6K-8_yWB0iU1C73I6mnhv4",
//   authDomain: "weather-application-81c47.firebaseapp.com",
//   projectId: "weather-application-81c47",
//   storageBucket: "weather-application-81c47.appspot.com",
//   messagingSenderId: "316869106506",
//   appId: "1:316869106506:web:8d1392549d8eb7ff49bfb3",
//   measurementId: "G-LLGPHJ8MVM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);