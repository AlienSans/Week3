import "./Form.css";

import { useState } from "react";

function Form({ onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate(name, email, website);
    setName("");
    setEmail("");
    setWebsite("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="&nbsp; Add Name Here..."
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="&nbsp; Add email here..."
      />
      <input
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="&nbsp; Add website here..."
      />
      <button>Add User</button>
    </form>
  );
}

export default Form;
