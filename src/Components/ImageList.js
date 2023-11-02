import { gsap } from "gsap";
import ImageShow from "./ImageShow";
import "./searchbarc.css";
function ImageList({ item,username }) {
  let list=[];
  list = item
  const rede = list.map((iteme) => {
    return <ImageShow item={iteme} username={username} />;
  });

  return (
    <div className="main3">
      <h1>{rede}</h1>
     
    </div>
  );
}
export default ImageList;
