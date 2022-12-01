import { useState } from "react";

const Teste = () => {
  const [name, setName] = useState("Luana");

  const handleChangeName = () => {
    setName((prev) => (prev === "Luana" ? "Fernanda" : "Luana"));
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Teste };
