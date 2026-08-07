// Contador de visitantes - Cloud Resume Challenge
// Chama a Azure Function que lê/incrementa o contador no Cosmos DB

const API_URL = "https://henrique-resume-api-bwaze0gefshffgf7.brazilsouth-01.azurewebsites.net/api/counter";

async function updateVisitorCount() {
  const counterElement = document.getElementById("visitor-count");

  try {
    const response = await fetch(API_URL, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status}`);
    }

    const data = await response.json();
    counterElement.textContent = data.count;

  } catch (error) {
    console.error("Erro ao buscar o contador de visitantes:", error);
    counterElement.textContent = "—";
  }
}

document.addEventListener("DOMContentLoaded", updateVisitorCount);
