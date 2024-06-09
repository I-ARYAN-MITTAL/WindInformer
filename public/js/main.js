const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const city_name = document.getElementById("city_name");
const datahide = document.querySelector(".middle_layer")
const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText=`plz write the name of city before search`;
        datahide.classList.add("data_hide")
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=aae7724dc1207951afcbfe97a47de2f6`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        
        const tempMood = arrData[0].weather[0].main;
        if(tempMood == "Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        } else if(tempMood == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1fc2f6;'></i>";
        } else if(tempMood == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else{
             temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            datahide.classList.remove("data_hide")

        }catch{
            city_name.innerText=`plz write the cityname properly`;
            datahide.classList.add("data_hide")

        }
       
    } 
}

const toggle_btn = document.querySelector('#checkbox')

toggle_btn.addEventListener('change' , () =>{
  if(toggle_btn.checked){
    document.body.classList.add('dark-mode')
    
  }else{
    document.body.classList.remove('dark-mode')
    
  }
})


submitBtn.addEventListener("click",getInfo);