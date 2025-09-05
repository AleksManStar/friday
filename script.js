const form = document.getElementById('requestForm');
const statusEl = form.querySelector('.status');

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');

// Предустановленные модели
const carModels = {
  audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7"],
  bmw: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X6"],
  mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Land Cruiser"],
  volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Polo"]
};

// При смене бренда — обновляем модели
brandSelect.addEventListener('change', () => {
  const brand = brandSelect.value;
  modelSelect.innerHTML = '<option value="">Select model...</option>';
  if (brand && carModels[brand]) {
    carModels[brand].forEach(model => {
      const opt = document.createElement('option');
      opt.value = model;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
  }
});

// Отправка формы
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
      statusEl.style.color = "#16a34a"; // green
    } else {
      statusEl.textContent = "Error: please try again later.";
      statusEl.style.color = "#dc2626"; // red
    }
  } catch {
    statusEl.textContent = "Network error. Please check your connection.";
    statusEl.style.color = "#dc2626";
  }
});