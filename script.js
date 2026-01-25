const list = document.getElementById("productList");

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


// tampilkan semua produk saat halaman dibuka
render(products);

function filterRange(min, max, btn) {
  resetActive();
  btn.classList.add("active");

  const result = products.filter(
    p => p.code >= min && p.code <= max
  );
  render(result);
}

function resetActive() {
  document
    .querySelectorAll(".range button")
    .forEach(btn => btn.classList.remove("active"));
}

function showAll(btn) {
  resetActive();
  btn.classList.add("active");
  render(products);
}

document
  .getElementById("searchInput")
  .addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      searchProduct();
    }
  });

