const ___Header = {
  display: "flex",
  justifyContent: "center",
  fontSize: "30px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "rgb(46, 46, 46)",
  padding: "10px 0",
};

type props = {};
export default function Header({}: props) {
  return <div style={___Header}>Todo list</div>;
}
