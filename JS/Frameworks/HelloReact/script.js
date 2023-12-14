const PeopleList = () => {
  const [people, setPeople] = React.useState([
    "Derek",
    "Will",
    "Chris",
    "Pascal",
  ]);

  const addPerson = (name) => {
    setPeople([...people, name]);
  };

  const deletePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>JS Tutorials</h1>
      <AddPersonForm onAddPerson={addPerson} />
      <ul>
        {people.map((person, index) => (
          <li key={index} className="person">
            {person}
            <button className="deleteBtn" onClick={() => deletePerson(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddPersonForm = ({ onAddPerson }) => {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPerson(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

ReactDOM.render(<PeopleList />, document.getElementById("app"));
