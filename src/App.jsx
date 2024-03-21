import RefForm from "./components/RefForm/RefForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  return (
    <>
      <h2 className="text-5xl font-bold text-center mb-5">Simple Form</h2>
      <SimpleForm />
      <h2 className="text-5xl font-bold text-center mb-5">Stateful Form</h2>
      <StatefulForm />
      <h2 className="text-5xl font-bold text-center mb-5">UseRaf Form</h2>
      <RefForm />
    </>
  );
}

export default App;
