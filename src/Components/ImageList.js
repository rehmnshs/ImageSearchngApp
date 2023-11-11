import { gsap } from "gsap";
import ImageShow from "./ImageShow";
import "./searchbarc.css";
function ImageList({ item,username }) {
  const rede = item.map((item) => {
    return <ImageShow item={item} username={username} />;
  });

  return (
    <div className="main3">
      <h1>{rede}</h1>
     
    </div>
  );
}
export default ImageList;
