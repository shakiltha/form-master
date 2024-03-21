import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("rojoni hooked");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
