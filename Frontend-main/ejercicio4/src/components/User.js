import { UserLocation } from "./UserLocation"
import { UserName } from "./UserName"
import { UserPicture } from "./UserPicture"

export function User({userInfo}){

  let {name, picture, location, dob: {age}} = userInfo

  name = name.first + " " + name.last
  console.log(name)


 // console.log(name, picture, location)
  return (
    <article>
      <UserPicture picture={picture.large} name={name}></UserPicture>
      <UserName name={name}></UserName>
      <UserLocation location={location}></UserLocation>

    <p>{age >= 18? "Mayor" : "Menor"} de edad</p>

    {/*
    Sintaxis simplificada abajo
     {age < 18 ? <p>Es menor</p> : null} 
     */}

    { age < 18 && <p>Es menor</p>}

    </article>
  )
}
