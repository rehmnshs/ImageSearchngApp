import "./searchbarc.css";

function ImageShow({ item }) {
  return (
    <div className="main">
      <img className="main2" src={item.urls.raw} />
    </div>
  );
}
export default ImageShow;
