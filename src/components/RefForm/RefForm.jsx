import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRaf = useRef(null);
  const emailRaf = useRef(null);
  const passwordRaf = useRef(null);

  useEffect(() => {
    nameRaf.current.focus();
  }, []);

  const formSubmitted = (e) => {
    e.preventDefault();
    console.log(nameRaf.current.value);
    console.log(emailRaf.current.value);
    console.log(passwordRaf.current.value);
  };

  return (
    <div>
      <form onSubmit={formSubmitted} className="flex flex-col justify-center gap-5">
        <input ref={nameRaf} className="border-2 p-2" type="text" name="name" required />

        <input ref={emailRaf} className="border-2 p-2" type="email" name="email" required />

        <input ref={passwordRaf} className="border-2 p-2" type="password" name="password" required />

        <input className="border-2 p-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
