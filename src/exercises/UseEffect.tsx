import { useEffect, useState } from "react";
import { BaseProps } from "../types";

/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/
export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);

  // Uden brug af useEffect så vil den starte flere counts op oven i hinanden, så den vil tælle hurtigere og hurtigere
  //   const i = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);

  // Selv med brug af useEffect vil den stadig tælle hurtigere og hurtigere, da den ikke har en dependency array
  //   useEffect(() => {
  //     const i = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   });

  // Uden brug af clearInterval vil den ikke tælle korrekt, men trods alt linært.
  //   useEffect(() => {
  //     const i = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   }, []);

  const [shouldCount, setShouldCount] = useState(true);
  // Nu med cleanup function, så den tæller korrekt
  // Efterfølgende tilføjet if statement til at stoppe og starte intervallet

  useEffect(() => {
    if (!shouldCount) return;
    const i = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(i);
  }, [shouldCount]);

  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setShouldCount((prev) => !prev)}>{shouldCount ? "Stop Count" : "Start Count"}</button>
    </>
  );
}
