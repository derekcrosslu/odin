class PeopleManager {
  constructor() {
    this.people = ["Derek", "Mike", "Pascal"];
    this.$nameInput = $("#nameInput");
    this.$addPersonBtn = $("#addPersonBtn");
    this.$peopleList = $("#peopleList");
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    this.$addPersonBtn.on("click", () => this.addPerson());
    this.$peopleList.on("click", ".del", (event) => this.deletePerson(event));
  }

  addPerson() {
    const name = this.$nameInput.val().trim();
    if (name) {
      this.people.push(name);
      this.$nameInput.val("");
      this.render();
      $(document).trigger("peopleChanged", [this.people.length]);
    }
  }

  deletePerson(event) {
    const index = $(event.target).closest("li").index();
    this.people.splice(index, 1);
    this.render();
    $(document).trigger("peopleChanged", [this.people.length]);
  }

  render() {
    this.$peopleList.empty();
    this.people.forEach((person) => {
      this.$peopleList.append(`<li>${person} <span class="del">X</span></li>`);
    });
  }
}

class StatsDisplay {
  constructor() {
    this.$peopleCount = $("#peopleCount");
    $(document).on("peopleChanged", (e, peopleCount) =>
      this.updateCount(peopleCount)
    );
  }

  updateCount(peopleCount) {
    this.$peopleCount.text(peopleCount);
  }
}

$(function () {
  const peopleManager = new PeopleManager();
  const statsDisplay = new StatsDisplay();
});
