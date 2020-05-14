const movieInput = document.querySelector("#titleInput");
const ratingInput = document.querySelector("#ratingInput");
const movieList = document.querySelector(".movieList");

$(movieList).on("click", "button", function () {
  $(this).closest("li").remove();
});

$("#submit").click((e) => {
  e.preventDefault();
  duplicate();
  movieInput.value = "";
  ratingInput.value = "";
});

function sort(selector) {
  $(selector)
    .children("li")
    .sort(function (a, b) {
      let A = $(a).text().toUpperCase();
      let B = $(b).text().toUpperCase();
      return A < B ? -1 : A > B ? 1 : 0;
    })
    .appendTo(selector);
}

//not working correct
function sortNums() {
  let list, i, switching, b, shouldSwitch;
  list = movieList;
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("SPAN");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

$("select").on("change", function () {
  if (($("option").value = "byTitle")) {
    sort("ul.movieList");
  }
  if (($("option").value = "byRating")) {
    sortNums();
  }
});

let duplicate = function () {
  let content = document.querySelector("template").content;
  let titleClone = content.querySelector(".title");
  let ratingClone = content.querySelector(".rating");
  titleClone.textContent = movieInput.value;
  ratingClone.textContent = ratingInput.value;
  movieList.appendChild(document.importNode(content, true));
};
