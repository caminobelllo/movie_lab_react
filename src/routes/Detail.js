import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setInfo(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h2>{`🔎 Title : ${info.title_long}`}</h2>
      <p>{`⭐ Rating : ${info.rating}`}</p>
      <p>{`▶️ Runtime : ${info.runtime}`}</p>
    </div>
  );
}

export default Detail;
