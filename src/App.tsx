import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-screen w-screen">
        <Header />
        <h1 className="text-xl">Header.</h1>
      </section>
    </>
  );
}

export default App;
