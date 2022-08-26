import { Link } from "react-router-dom";
import classes from "../styles/Video.module.css";

export default function Video({ video }) {
  const { youtubeID, title, noq } = video;

  const videoEl = (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );

  if (noq === 0) return videoEl;

  return <Link to={`/quiz/${youtubeID}`} state={title}>{videoEl}</Link>;
}
