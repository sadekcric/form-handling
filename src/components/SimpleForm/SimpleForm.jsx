const SimpleForm = () => {
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div className="mb-24">
      <form onSubmit={formSubmitted} className="flex flex-col justify-center gap-5">
        <input className="border-2 p-2" type="text" name="name" />

        <input className="border-2 p-2" type="email" name="email" />

        <input className="border-2 p-2" type="password" name="password" />

        <input className="border-2 p-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
