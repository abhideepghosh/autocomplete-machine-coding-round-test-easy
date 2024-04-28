import "./styles.css";

(() => {
  const words = [
    "apple",
    "banana",
    "apricot",
    "pineapple",
    "peach",
    "blueberry",
  ];
  const input = document.querySelector(".input-field");
  const listContainer = document.querySelector(".list-container");

  input.addEventListener("keyup", (e) => {
    const text = e.target.value.trim();
    listContainer.innerHTML = "";
    if (text) {
      const list = words
        .filter((val) => val.startsWith(text))
        .map((el, i) => {
          return `
        <li class="list-item" id="${i}">
            ${el}
        </li>
        `;
        })
        .join("");

      listContainer.insertAdjacentHTML("beforeend", list);
    }
  });
})();
