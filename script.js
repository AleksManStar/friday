// ====== Brand & Models ======
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
  Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "i30"],
  Volvo: ["XC40", "XC60", "XC90", "S60", "S90"],
  Mazda: ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9"],
  Lexus: ["IS", "ES", "RX", "NX", "GX"],
  Peugeot: ["208", "308", "508", "2008", "3008"]
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const yearSelect = document.getElementById("year");

// ====== Populate years (1960–2026) ======
for (let y = 1960; y <= 2026; y++) {
  const option = document.createElement("option");
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

// ====== Update models when brand selected ======
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

// ====== Form submit ======
document.getElementById("partsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Your request has been submitted! We will contact you soon.");
});

// ====== FAQ accordion ======
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      // close others
      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      answer.style.display = "block";
    }
  });
});