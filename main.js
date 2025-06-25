// app.js

fetch("routes.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("routeList");
    const fromInput = document.getElementById("fromStation");
    const toInput = document.getElementById("toStation");

    function renderRoutes(filteredData) {
      list.innerHTML = "";
      filteredData.forEach(route => {
        const div = document.createElement("div");
        div.className = "route-card bg-white rounded shadow-sm p-2 d-flex align-items-center";
        div.onclick = () => window.location.href = `stoppage.html?id=${route.id}`;
        div.innerHTML = `
          <img src="${route.image}" class="rounded me-3" style="width: 70px; height: 70px; object-fit: cover;" />
          <div>
            <h6 class="mb-1">${route.name}</h6>
            <small>${route.from} ⇄ ${route.to}</small>
          </div>
        `;
        list.appendChild(div);
      });
    }

    renderRoutes(data);

    fromInput.addEventListener("input", () => filterRoutes(data));
    toInput.addEventListener("input", () => filterRoutes(data));

    function filterRoutes(routes) {
      const fromVal = fromInput.value.trim();
      const toVal = toInput.value.trim();

      const filtered = routes.filter(route =>
        (!fromVal || route.from.includes(fromVal) || route.stoppages.some(s => s.includes(fromVal))) &&
        (!toVal || route.to.includes(toVal) || route.stoppages.some(s => s.includes(toVal)))
      );

      renderRoutes(filtered);
    }
  });