import loadingGif from "../assets/rt_loader.gif";

function Spinner() {
  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <img src={loadingGif} alt="Loading..." width="100" />
    </div>
  );
}

export default Spinner;
