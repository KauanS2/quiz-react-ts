import { useState } from "react";
import styles from "./styles.module.css";
export function Asks() {
  const [valor, setValor] = useState("");
  const [pontos, setPontos] = useState(0);
  const [position, setPosition] = useState(1);
  const perguntas = [
    {
      pergunta: "Qual ano deu inicio a Guerra Fria?",
      ask1: "1945",
      ask2: "1950",
      ask3: "1939",
      ask4: "1947",
      correct: "1947",
    },
    {
      pergunta: "Em que ano ocorreu o descobrimento do Brasil?",
      ask1: "1500",
      ask2: "1501",
      ask3: "1600",
      ask4: "1590",
      correct: "1500",
    },
    {
      pergunta: "A Revolução Russa ocorreu em:",
      ask1: "1945",
      ask2: "1917",
      ask3: "1940",
      ask4: "1915",
      correct: "1917",
    },
  ];
  function handleClick(val) {
    const askValue = val.target.value;
    setValor(askValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const correct = perguntas.map((res) => res.correct);
    if (valor === correct[pontos]) {
      setPontos((res) => res + 1);
      console.log("Acertou");
      setPosition((res) => res + 1);
    } else {
      setPosition(1);
      setPontos(0);
      console.log("Errou");
    }
  }
  return (
    <div className={styles.container}>
      <h2>Pontuação: {pontos}</h2>
      {perguntas.slice(pontos, position).map((res) => {
        return (
          <>
            <h1>{res.pergunta}</h1>
            <form onSubmit={handleSubmit} action="">
              <div className={styles.containerButton}>
                <button onClick={handleClick} value={res.ask1} type="submit">
                  {res.ask1}
                </button>
                <button onClick={handleClick} value={res.ask2} type="submit">
                  {res.ask2}
                </button>
                <button onClick={handleClick} value={res.ask3} type="submit">
                  {res.ask3}
                </button>
                <button onClick={handleClick} value={res.ask4} type="submit">
                  {res.ask4}
                </button>
              </div>
            </form>
          </>
        );
      })}
    </div>
  );
}
