import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(e);
  };

  return (
    <>
      <h1>Login</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
