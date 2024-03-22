// import RefForm from "./components/RefForm/RefForm";

import HookForm from "./Hooks/HookForm";
import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  // const signUpForm = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name.value);
  // };

  // const logInForm = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name.value);
  // };

  return (
    <>
      {/* <h2 className="text-5xl font-bold text-center mb-5">Simple Form</h2>
      <SimpleForm />
      <h2 className="text-5xl font-bold text-center mb-5">Stateful Form</h2>
      <StatefulForm />
      <h2 className="text-5xl font-bold text-center mb-5">UseRaf Form</h2>
      <RefForm /> */}
      <h2 className="text-5xl font-bold text-center mb-5">Reuseable Form</h2>
      {/* <ReuseableForm formSubmitted={signUpForm} btn={"Sign up"} formTitle={"Sign up"}></ReuseableForm>
      <ReuseableForm formSubmitted={logInForm} btn={"Log In"} formTitle={"Log in"}></ReuseableForm> */}

      <HookForm />
    </>
  );
}

export default App;
