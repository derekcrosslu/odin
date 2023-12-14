const peopleModule = (function () {
  const people = ["Derek", "Will", "Chris", "Pascal"];
  const el = document.querySelector("#peopleModule");
  const addButton = el.querySelector("button");
  const input = el.querySelector("input");
  const ul = el.querySelector("ul");

  function bindEvents() {
    addButton.addEventListener("click", addPerson);
    ul.addEventListener("click", deletePerson);
  }

  function addPerson() {
    const name = input.value.trim();
    if (name) {
      people.push(name);
      render();
      input.value = "";
    }
  }

  function deletePerson(event) {
    if (event.target.className === "del") {
      const index = Array.from(ul.children).indexOf(event.target.parentElement);
      people.splice(index, 1);
      render();
    }
  }

  function render() {
    ul.innerHTML = ""; // Clear the list before re-rendering
    people.forEach(function (person) {
      const li = document.createElement("li");
      li.textContent = person;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.className = "del";
      li.appendChild(deleteBtn);

      ul.appendChild(li);
    });
  }

  function init() {
    bindEvents();
    render();
  }

  return { init };
})();

// Initialize the module
peopleModule.init();
