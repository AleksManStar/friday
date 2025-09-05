const form = document.getElementById('requestForm');
const statusEl = form.querySelector('.status');

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');

const carModels = {
  audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7"],
  bmw: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X6"],
  mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Land Cruiser"],
  volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Polo"]
};

// Update models when brand changes
brandSelect.addEventListener('change', () => {
  const brand = brandSelect.value;
  modelSelect.innerHTML = '<option value="">Select model...</option>';
  if (carModels[brand]) {
    carModels[brand].forEach(model => {
      const opt = document.createElement('option');
      opt.value = model;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
  }
});

// Form submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.hidden = false;
  statusEl.textContent = "Sending...";

  try {
    const resp = await fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    });
    if (resp.ok) {
      form.reset();
      statusEl.textContent = "Thank you! Your request has been sent.";
      statusEl.style.color = "green";
    } else {
      statusEl.textContent = "Error: please try again.";
      statusEl.style.color = "red";
    }
  } catch {
    statusEl.textContent = "Network error. Try again later.";
    statusEl.style.color = "red";
  }
});