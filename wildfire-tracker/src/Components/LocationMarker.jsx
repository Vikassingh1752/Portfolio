import { Icon } from "@iconify/react"
import locationIcon from '@iconify/icons-mdi/fire-alert'
// import { useState } from "react"



const LocationMarker = ({lat,lng, onClick}) => {
//     const [maker, setmaker] = useState("");
//   const postion =  setmaker((current) => [
//         ...current,
//         {
//           lat: lat.lat,
//           lng: lng.lng()
//         }
//       ]);
//       console.log(postion,"-------");
  return (
    <div className="location-marker" onClick={onClick}>
    
  <Icon icon={locationIcon} className="location-icon"/>
    
    </div>
  )
}

export default LocationMarker