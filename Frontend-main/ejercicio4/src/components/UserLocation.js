export function UserLocation({location}){
    let {city, country} = location;
    return (
      <p>{city}, {country}</p>
    )
  }
  