let allStops = [];

fetch("routes.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("routeList");
    const fromInput = document.getElementById("fromStation");
    const toInput = document.getElementById("toStation");

    // Collect all unique stoppages
    const stopSet = new Set();
    data.forEach(route => route.stoppages.forEach(stop => stopSet.add(stop)));
    allStops = Array.from(stopSet).sort();

    // Autocomplete listeners
    fromInput.addEventListener("input", () => {
      showSuggestions(fromInput, "fromList");
      filterRoutes(data);
    });

    toInput.addEventListener("input", () => {
      showSuggestions(toInput, "toList");
      filterRoutes(data);
    });

    renderRoutes(data);

    function renderRoutes(filteredData) {
      list.innerHTML = "";

      if (filteredData.length === 0) {
        list.innerHTML = `<div class="alert alert-warning">কোনো রুট পাওয়া যায়নি!</div>`;
        return;
      }

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

    function filterRoutes(routes) {
      const fromVal = fromInput.value.trim().toLowerCase();
      const toVal = toInput.value.trim().toLowerCase();

      const filtered = routes.filter(route =>
        (!fromVal || route.stoppages.some(s => s.toLowerCase().includes(fromVal))) &&
        (!toVal || route.stoppages.some(s => s.toLowerCase().includes(toVal)))
      );

      renderRoutes(filtered);
    }

    function showSuggestions(inputEl, listId) {
      const val = inputEl.value.trim().toLowerCase();
      const listDiv = document.getElementById(listId);
      listDiv.innerHTML = "";

      if (!val) return;

      const matches = allStops.filter(stop => stop.toLowerCase().includes(val)).slice(0, 10);

      matches.forEach(match => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        item.textContent = match;
        item.onclick = () => {
          inputEl.value = match;
          listDiv.innerHTML = "";
          filterRoutes(data);
        };
        listDiv.appendChild(item);
      });
    }
  })
  .catch(err => {
    console.error("Error loading data:", err);
    document.getElementById("routeList").innerHTML = `
      <div class="alert alert-danger">রুট ডেটা লোড করতে সমস্যা হয়েছে।</div>
    `;
  });
