const API_URL = "http://localhost:5000/api";

export async function getPortfolio() {
  const response = await fetch(`${API_URL}/portfolio`);

  if (!response.ok) {
    throw new Error("Failed to fetch portfolio data");
  }

  return response.json();
}

export async function getHero() {
  const response = await fetch(`${API_URL}/portfolio/hero`);

  if (!response.ok) {
    throw new Error("Failed to fetch hero data");
  }

  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/portfolio/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}