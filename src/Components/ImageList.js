import ImageShow from "./ImageShow";
import "./searchbarc.css";
function ImageList({ item }) {
  const rede = item.map((item) => {
    return <ImageShow item={item} />;
  });
  console.log(item);
  return (
    <div className="main3">
      <h1>{rede}</h1>
    </div>
  );
}
export default ImageList;
