import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const formSubmitted = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Please Provide up to 5 words");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const nameHandle = (e) => {
    setName(e.target.value);
  };

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mb-24">
      <form onSubmit={formSubmitted} className="flex flex-col justify-center gap-5">
        <input onChange={nameHandle} className="border-2 p-2" type="text" name="name" required />

        <input onChange={emailHandle} className="border-2 p-2" type="email" name="email" required />

        <input onChange={passwordHandle} className="border-2 p-2" type="password" name="password" required />

        <input className="border-2 p-2" type="submit" value="Submit" />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
