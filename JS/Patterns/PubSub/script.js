const PubSub = {
  events: {},

  subscribe: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },

  unsubscribe: function (eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((f) => f !== fn);
    }
  },

  publish: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },
};

const statsModule = (function (PubSub) {
  let peopleCount = 0;

  const $peopleCount = $("#peopleCount");

  const render = function () {
    $peopleCount.text(peopleCount);
  };

  const init = function () {
    PubSub.subscribe("peopleChanged", updateCount);
  };

  const updateCount = function (newCount) {
    peopleCount = newCount;
    render();
  };

  return { init };
})(PubSub);

const peopleModule = (function (PubSub) {
  let people = ["Derek", "Mike", "Pascal"];
  let $nameInput, $addPersonBtn, $peopleList;

  const cacheDom = function () {
    $nameInput = $("#nameInput");
    $addPersonBtn = $("#addPersonBtn");
    $peopleList = $("#peopleList");
  };

  const bindEvents = function () {
    $addPersonBtn.on("click", () =>
      PubSub.publish("addPerson", $nameInput.val().trim())
    );
    $peopleList.on("click", ".del", function () {
      PubSub.publish("deletePerson", $(this).closest("li").index());
    });
  };

  PubSub.subscribe("addPerson", function (name) {
    if (name) {
      people.push(name);
      render();
    }
  });

  PubSub.subscribe("deletePerson", function (index) {
    people.splice(index, 1);
    render();
  });

  const render = function () {
    $peopleList.empty();
    people.forEach(function (person) {
      $peopleList.append(`<li>${person}<span class="del">X</span></li>`);
    });
    PubSub.publish("peopleChanged", people.length);
  };

  const init = function () {
    cacheDom();
    bindEvents();
    render();
  };

  return { init };
})(PubSub);

$(function () {
  statsModule.init();
  peopleModule.init();
});
