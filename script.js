// Автоматически создаем список годов
const yearSelect = document.getElementById("year");
if (yearSelect) {
  for (let y = 1960; y <= 2026; y++) {
    let option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
  }
}

// Логика моделей для брендов
const brandModels = {
  Audi: ["A3", "A4", "A5", "Q5", "Q7"],
  BMW: ["3 Series", "5 Series", "7 Series", "X3", "X5"],
  Mercedes: ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
  Toyota: ["Corolla", "Camry", "RAV4", "Hilux"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Polo"],
  Ford: ["Focus", "Mondeo", "Kuga", "Fiesta"],
  Honda: ["Civic", "Accord", "CR-V", "HR-V"],
  Nissan: ["Qashqai", "X-Trail", "Juke", "Micra"],
  Kia: ["Rio", "Ceed", "Sportage", "Sorento"],
  Hyundai: ["i20", "i30", "Tucson", "Santa Fe"],
  Volvo: ["XC60", "XC90", "S60", "V60"],
  Mazda: ["Mazda 3", "Mazda 6", "CX-5", "CX-9"],
  Lexus: ["RX", "NX", "ES", "LS"],
  Peugeot: ["208", "308", "3008", "5008"]
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");

if (brandSelect && modelSelect) {
  brandSelect.addEventListener("change", function () {
    const selectedBrand = this.value;
    modelSelect.innerHTML = "<option value=''>Select model</option>";

    if (brandModels[selectedBrand]) {
      brandModels[selectedBrand].forEach((m) => {
        let option = document.createElement("option");
        option.value = m;
        option.textContent = m;
        modelSelect.appendChild(option);
      });
    }
  });
}

// FAQ раскрытие
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});