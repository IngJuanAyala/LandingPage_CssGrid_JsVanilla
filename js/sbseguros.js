(async function load() {
  $("#coin-slider").coinslider({
    width: 900,
    navigation: true
  });

  async function getDataFromApi(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  async function asingDescription(className, data, arrayPosition, lengthText) {
    if (data[arrayPosition].body.length > lengthText) {
      document.querySelector(className).innerText = data[arrayPosition].body
        .substring(0, lengthText)
        .replace(/(\r\n|\n|\r)/gm, " ");
    } else {
      document.querySelector(className).innerText = data[
        arrayPosition
      ].body.replace(/(\r\n|\n|\r)/gm, " ");
    }
  }

  //Get descriptions from API.
  getDataFromApi("https://jsonplaceholder.typicode.com/posts").then(function(
    dataDescr
  ) {
    ///////////////////Description Landerz from API/////////////////////
    asingDescription(".description-landerz", dataDescr, 11, 120);

    ///////////////////Description Features from API/////////////////////
    var i;
    for (i = 0; i < 6; i++) {
      let className = ".des-feat-".concat(i);
      let arrayPosition = className.slice(-1);
      asingDescription(className, dataDescr, 9, 80);
    }

    ///////////////////Description Create from API/////////////////////
    asingDescription(".description-create", dataDescr, 8, 150);

    ///////////////////Description User from API/////////////////////
    asingDescription(".descr-user", dataDescr, 10, 123);

    ///////////////////Description About us from API/////////////////////
    asingDescription(".description-about-us", dataDescr, 13, 231);

    //Get user information from API
    getDataFromApi("https://jsonplaceholder.typicode.com/users").then(function(
      dataUser
    ) {
      const $imgPath = "assets/images/person_";
      const $classInfoSlideUser = "infoUsersSlider";

      const $classInfoUser = "name-user-";
      const $classTestimUser = "testim-user-";

      for (i = 0; i < 3; i++) {
        let testomonialDesc = dataDescr[i + 1].body
          .substring(0, 100)
          .replace(/(\r\n|\n|\r)/gm, " ");

        document.getElementsByClassName(
          $classInfoUser.concat(i + 1)
        ).innerText = dataUser[i].name;
        document.getElementsByClassName(
          $classTestimUser.concat(i + 1)
        ).innerText = testomonialDesc;
      }
    });
  });
})();

////////////////////Animations////////////////////////
$(".js-down-menu").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 20 }, "slow");
});

$(".js-down-features").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 450 }, "slow");
});

$(".js-down-about-us").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 1450 }, "slow");
});

$(".js-down-testimonials").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 1800 }, "slow");
});

$(".js-down-blog").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 1000 }, "slow");
});

$(".js-down-contact").click(function(event) {
  $("html, body")
    .stop()
    .animate({ scrollTop: 2300 }, "slow");
});
