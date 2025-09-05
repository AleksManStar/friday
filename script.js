const form = document.getElementById('requestForm');
const statusEl = form.querySelector('.status');

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
      statusEl.style.color = "#22c55e"; // green
    } else {
      statusEl.textContent = "Error: please try again later.";
      statusEl.style.color = "#ef4444"; // red
    }
  } catch {
    statusEl.textContent = "Network error. Please check your connection.";
    statusEl.style.color = "#ef4444";
  }
});
