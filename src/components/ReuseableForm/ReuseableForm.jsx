const ReuseableForm = ({ formSubmitted, btn, formTitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">{formTitle}</h2>
      <form onSubmit={formSubmitted} className="flex flex-col justify-center gap-5">
        <input className="border-2 p-2" type="text" name="name" />

        <input className="border-2 p-2" type="email" name="email" />

        <input className="border-2 p-2" type="password" name="password" />

        <input className="border-2 p-2" type="submit" value={btn} />
      </form>
    </div>
  );
};

export default ReuseableForm;
