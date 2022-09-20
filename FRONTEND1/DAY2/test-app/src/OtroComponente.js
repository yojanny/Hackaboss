import UserList from "./UserList";

function OtroComponente() {
  const colorValue = "green";
  return (
    <>
      <UserList />
      {/* Podemos usar variables en classname para hacerlo dinámico o en los style */}
      <h3 className={colorValue} style={{ color: colorValue }}>
        OTRO
      </h3>
      <h3 className={colorValue} style={{ color: colorValue }}>
        OTRO
      </h3>
      <h3 className={colorValue} style={{ color: colorValue }}>
        OTRO
      </h3>
      <h3 className={colorValue} style={{ color: colorValue }}>
        OTRO
      </h3>
      <h3 className={colorValue} style={{ color: colorValue }}>
        OTRO
      </h3>
    </>
  );
}

export default OtroComponente;
