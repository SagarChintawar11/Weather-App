import React, { useState, useEffect } from "react";
const Main = () => {
  const [city, setcity] = useState(null);
  const [search, setSearch]=useState("mumbai");

  useEffect(() => {
    
const fetchApi=async()=>{
 
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=20a88b63f3f870cdd2d2ad93695e2201`;
  const response = await fetch(URL);
  //console.log(response);
  const resJson = await response.json();
  //console.log(resJson);
  setcity(resJson.main);
}
fetchApi();

    },[search])

  return (
   <div>
     <div><b>Weather Report Application</b> </div>
     <div>
       <input type="text" placeholder="City" value={search} onChange={(event)=>{
         setSearch(event.target.value);
       }} /><br/>
  </div>
  {
    !city ? (
      <p>No Data Found</p>
    ) : (
      <div>
    <h3>{search}</h3><br/>
    <h3>{city.temp} °C</h3><br/>
    <h3>Minimum : {city.temp_min} °C</h3>
    <h3>Maximum : {city.temp_max} °C</h3>
  </div>
    )
  }
   </div>
  );
};

export default Main;
