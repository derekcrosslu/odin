const peopleModule = {
  init: function () {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function () {
    this.$nameInput = $("#nameInput");
    this.$addPersonBtn = $("#addPersonBtn");
    this.$peopleList = $("#peopleList");
  },
  bindEvents: function () {
    this.$addPersonBtn.on("click", this.addPerson.bind(this));
    this.$peopleList.on("click", ".del", this.deletePerson);
  },
  addPerson: function () {
    const name = this.$nameInput.val().trim();
    if (name) {
      this.$peopleList.append(
        "<li>" + name + '<span class="del">X</span></li>'
      );
      this.$nameInput.val("");
    }
  },
  deletePerson: function () {
    $(this).parent().remove();
  },
};

$(function () {
  peopleModule.init();
});
