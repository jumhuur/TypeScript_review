import React, { useState } from "react";
import "./App.scss";
import GithubUser from "./components/GithubUser";

function App() {
  const [count, setCount] = useState<number>(0);
  const [value, setvalue] = useState<number>(0);
  const UpCount = () => {
    const pluse = count + 1;
    setCount(pluse);
  };

  const CountUpdSvalue = () => {
    if (value > 0) {
      const iskugayn = count + value;
      setCount(iskugayn);
    }
  };

  const submitValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changevalue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(Number(e.target.value));
  };
  return (
    <>
      <section>
        <div className="count">
          <p>${count}</p>
          <br />
          <form onSubmit={submitValue}>
            <input
              onChange={changevalue}
              type="number"
              placeholder="QorValue"
            />
          </form>
          <hr />
          <button onClick={UpCount}>up count</button>
          <br />
          <br />
          <button onClick={CountUpdSvalue}>Pluse ${value}</button>
          <br />
        </div>
        <div className="Component">
          <GithubUser />
        </div>
      </section>
    </>
  );
}

export default App;
