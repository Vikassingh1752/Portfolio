import Map from "./Components/Map";
import React from "react";
import { useState ,useEffect} from "react";
import Loader from "./Components/Loader";

function App() {

  const[event, setEvent] =useState([]);
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    const fetchEvent = async () =>{
    setLoading(true)
    const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
    const {events} = await res.json();
    setEvent(events);

    
    
    setLoading(false)
  }
  fetchEvent();
}, [])
console.log(event,"data");


 
  return (
    <div>
      {loading ? <Map event={event} /> : <Loader/> }
      
    </div>
  );
}

export default App;
