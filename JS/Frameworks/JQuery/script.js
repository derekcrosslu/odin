$(function () {
  const nameInput = $("#nameInput");
  const addPersonBtn = $("#addPersonBtn");
  const peopleList = $("#peopleList");

  addPersonBtn.on("click", function () {
    const name = nameInput.val().trim();
    if (name) {
      peopleList.append("<li>" + name + '<span class="del">X</span></li>');
      nameInput.val("");
    }
  });

  peopleList.on("click", ".del", function () {
    $(this).parent().remove();
  });
});
