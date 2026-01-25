const list = document.getElementById("productList");
let products = [];

fetch("https://opensheet.elk.sh/1yQdAB3Ild2jH86P_0YMbD0pdsqqCmFMcniEfXUD77gY/Sheet1")
  .then(res => res.json())
  .then(data => {
    products = data.map(item => ({
      code: Number(item.code),
      image: item.image,
      link: item.link
    }));
    render(products);
  });

function render(data) {
  list.innerHTML = "";
  data.forEach(item => {
    list.innerHTML += `
      <a href="${item.link}" class="card" target="_blank">
        <img src="${item.image}">
        <p>${item.code}</p>
      </a>
    `;
  });
}

function searchProduct() {
  resetActive();
  const keyword = document.getElementById("searchInput").value;
  const result = products.filter(p => p.code == keyword);
  render(result);
}

function filterRange(min, max, btn) {
  resetActive();
  btn.classList.add("active");
  render(products.filter(p => p.code >= min && p.code <= max));
}

function showAll(btn) {
  resetActive();
  btn.classList.add("active");
  render(products);
}

function resetActive() {
  document
    .querySelectorAll(".range button")
    .forEach(btn => btn.classList.remove("active"));
}

document
  .getElementById("searchInput")
  .addEventListener("keyup", e => {
    if (e.key === "Enter") searchProduct();
  });


