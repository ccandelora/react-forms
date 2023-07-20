import React, { useState } from "react";

function App() {
  const [tempName, setTempName] = useState();
  const [name, setName] = useState();

  function handleChange(event) {
    setTempName(event.target.value);
  }

  function handleClick(event) {
    setName(tempName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
