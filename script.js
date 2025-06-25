const urlParams = new URLSearchParams(window.location.search);
const routeId = urlParams.get("id");

fetch("routes.json")
  .then(res => res.json())
  .then(data => {
    const route = data.find(r => r.id === routeId);

    if (!route) {
      document.getElementById("routeName").innerHTML = `
        <h2 class="text-danger">রুট খুঁজে পাওয়া যায়নি!</h2>
        <a href="index.html" class="btn btn-primary mt-3">🏠 হোমে ফিরে যান</a>
      `;
      return;
    }

    // Show route info
    document.getElementById("routeName").innerText = route.name;
    document.getElementById("routePath").innerText = `${route.from} ⇄ ${route.to}`;

    // Show stoppages
    const list = document.getElementById("stoppageList");
    route.stoppages.forEach((stop, i) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `🔸 ${stop}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error loading route data:", error);
    document.getElementById("routeName").innerHTML = `
        <h2 class="text-warning">ডেটা লোড করতে সমস্যা হয়েছে!</h2>
        <a href="index.html" class="btn btn-info mt-3">🏠 হোমে ফিরে যান</a>
      `;
  });