const peopleModule = (function () {
  let $nameInput, $addPersonBtn, $peopleList;
  let people = ["Derek", "Mike", "Pascal"]; // Predefined array

  const cacheDom = function () {
    $nameInput = $("#nameInput");
    $addPersonBtn = $("#addPersonBtn");
    $peopleList = $("#peopleList");
  };

  const bindEvents = function () {
    $addPersonBtn.on("click", addPerson);
    $peopleList.on("click", ".del", function (event) {
      deletePerson($(event.target).closest("li").index());
    });
  };

  const addPerson = function () {
    const name = $nameInput.val().trim();
    if (name) {
      people.push(name); // Add the name to the array
      render(); // Re-render the list
      $nameInput.val("");
    }
  };

  const deletePerson = function (index) {
    people.splice(index, 1); // Remove the person from the array
    render(); // Re-render the list
  };

  const render = function () {
    $peopleList.empty(); // Clear the list before re-rendering
    people.forEach(function (person, index) {
      $peopleList.append(`<li>${person}<span class="del">X</span></li>`);
    });
  };

  const init = function () {
    cacheDom();
    bindEvents();
    render(); // Initial render
  };

  // Revealing public API
  return {
    init: init,
    addPerson: addPerson,
    deletePerson: deletePerson,
    people: people,
  };
})();

$(function () {
  peopleModule.init();
});
