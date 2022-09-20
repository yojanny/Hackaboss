/*
  El parámetro que recibe el componente son las props, aquí le hemos llamado props
  pero como en cualquier otra función podemos ponerle cualquier otro nombre
  El parametro de props contiene un objeto en el que cada atributo será una entrada del objeto
*/
function Avatar(props) {
  const { firstName, image } = props;
  return <img src={image} alt={`Avatar de ${firstName}`} />;
}

export default Avatar;
