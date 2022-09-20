export function UserPicture({picture, name}){
  return (
    <img src={picture} alt={`Foto de ${name}`}/>
  )
}