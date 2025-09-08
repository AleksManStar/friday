const brandModels = {
  Audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7"],
  BMW: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5"],
  Mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  Toyota: ["Corolla", "Camry", "RAV4", "Land Cruiser", "Hilux"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Polo", "Touareg"],
  Ford: ["Focus", "Mondeo", "Fiesta", "Kuga", "Mustang"],
  Honda: ["Civic", "Accord", "CR-V", "HR-V", "Jazz"],
  Nissan: ["Qashqai", "X-Trail", "Juke", "Altima", "Micra"],
  Kia: ["Rio", "Sportage", "Sorento", "Ceed", "Stinger"],
  Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "i30"]
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");

brandSelect.addEventListener("change", () => {
  const brand = brandSelect.value;
  modelSelect.innerHTML = "<option value=''>Select model</option>";

  if (brand && brandModels[brand]) {
    brandModels[brand].forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
});

document.getElementById("partsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your request has been submitted! We will contact you soon.");
});