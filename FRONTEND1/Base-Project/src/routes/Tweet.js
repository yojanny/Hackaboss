import { postTweet } from "../http/tweets-api";

function Tweet() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    postTweet(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="texto">Texto</label>
      <input name="texto" id="texto" type="text" />
      <label htmlFor="foto">Foto</label>
      <input name="foto" id="foto" type="file" />
      <input type="submit" />
    </form>
  );
}

export default Tweet;
