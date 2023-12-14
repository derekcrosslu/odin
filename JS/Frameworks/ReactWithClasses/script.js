class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: ["Derek", "Will", "Chris", "Pascal"] };
  }

  addPerson = (name) => {
    this.setState((prevState) => ({
      people: [...prevState.people, name],
    }));
  };

  deletePerson = (index) => {
    this.setState((prevState) => ({
      people: prevState.people.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <h1>JS Tutorials</h1>
        <AddPersonForm onAddPerson={this.addPerson} />
        <ul>
          {this.state.people.map((person, index) => (
            <li key={index} className="person">
              {person}
              <button
                className="deleteBtn"
                onClick={() => this.deletePerson(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class AddPersonForm extends React.Component {
  state = { name: "" };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddPerson(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Add Person</button>
      </form>
    );
  }
}

ReactDOM.render(<PeopleList />, document.getElementById("app"));
