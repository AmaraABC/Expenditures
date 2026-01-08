const API_URL = "http://localhost:3000/spendings";
const CATEGORY_URL = "http://localhost:3000/spendings/categories";

const form = document.getElementById("spendingForm");
const tableBody = document.querySelector("#spendingTable tbody");
const categorySelect = document.getElementById("categorySelect");

async function fetchSpendings() {
    const res = await fetch(API_URL);
    const data = await res.json();

    tableBody.innerHTML = "";
    data.forEach(sp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${sp.id}</td>
            <td>${sp.category_name || sp.category_id}</td>
            <td>${sp.amount}</td>
            <td>${sp.spending_description || ""}</td>
            <td>${sp.spending_date}</td>
            <td>
              <button onclick="deleteSpending(${sp.id})">Supprimer</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

async function fetchCategories() {
    try {
        const res = await fetch(CATEGORY_URL);
        const data = await res.json();

        categorySelect.innerHTML = '<option value="">-- Choisir une catégorie --</option>';

        data.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat.id;
            option.textContent = cat.categories_name;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erreur catégories :", error);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());

    const payload = {
        category_id: Number(formData.category_id),
        amount: Number(formData.amount),
        spending_description: formData.spending_description || "",
        spending_date: formData.spending_date
    };

    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error("Erreur POST :", res.status, errorText);
    } else {
        form.reset();
        fetchSpendings();
    }
});

async function deleteSpending(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchSpendings();
}

fetchSpendings();
fetchCategories();
