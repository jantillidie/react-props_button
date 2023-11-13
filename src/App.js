import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => alert('You clicked me!');
  return <Button color={"red"} disabled={false} text={"Red Button"} onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {

  return <button style={{ height: "50px", width: "200px", backgroundColor: color, border: "none", fontSize: "1rem", color: "whitesmoke" }} disabled={disabled} onClick={onClick} >{text}</button>
}
