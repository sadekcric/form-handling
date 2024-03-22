import useInputState from "./useInputState";
import useInputStateInObj from "./useInputStateInObj";

const HookForm = () => {
  const [name, setName] = useInputState("Rojni klanto");
  const emailState = useInputStateInObj("sadekcric@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };
  return (
    <div className="mb-24">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5">
        <input onChange={setName} className="border-2 p-2" type="text" name="name" value={name} />

        <input {...emailState} className="border-2 p-2" type="email" name="email" />

        <input className="border-2 p-2" type="password" name="password" />

        <input className="border-2 p-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
