import Navigation from "../components/Navigation";
import useWindowSize from "../hooks/useWindowSize";

function Size() {
  const { width, height } = useWindowSize();

  return (
    <section>
      <h1>Ancho: {width}</h1>
      <h1>Alto: {height}</h1>
    </section>
  );
}

export default Size;
