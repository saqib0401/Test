import "./styles.css";

const Header = () => {
  let name = "Saqib";
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
const HexColor = () => {
  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };
  let color = hexaColor();
  return (
    <div
      style={{
        backgroundColor: color,
        height: "50px",
        paddingTop: "25px",
        marginBottom: "2px"
      }}
    >
      {color}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <HexColor />
      <HexColor />
      <HexColor />
      <HexColor />
    </div>
  );
}
