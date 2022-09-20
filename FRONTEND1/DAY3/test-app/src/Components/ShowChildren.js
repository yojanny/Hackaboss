/*
  Los children son el contenido que ponemos entre las etiquetas que abren y cierran un componente
  <A>
    children
  </A>
  Tenemos los children dentro de las props en el atributo children props.children
*/
function ShowChildren(props) {
  console.log(props);
  return (
    <div className="show-children">
      <h4>{props.children}</h4>
    </div>
  );
}

export default ShowChildren;
