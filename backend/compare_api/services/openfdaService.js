const OPENFDA_BASE = "https://api.fda.gov/drug/label.json";

function escapeOpenFdaTerm(term) {
  return String(term || "")
    .trim()
    .replace(/"/g, '\\"');
}

async function callOpenFda(search, limit = 1) {
  const params = new URLSearchParams();
  params.set("search", search);
  params.set("limit", String(limit));

  if (process.env.OPENFDA_API_KEY) {
    params.set("api_key", process.env.OPENFDA_API_KEY);
  }

  const url = `${OPENFDA_BASE}?${params.toString()}`;
  console.log("Trying URL:", url);

  const res = await fetch(url);

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`openFDA error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.results?.[0] ?? null;
}

async function fetchDrugLabel(drugName) {
  const q = escapeOpenFdaTerm(drugName);

  if (!q) {
    throw new Error("Drug name is required.");
  }

  const searchStrategies = [
    `openfda.generic_name:"${q}" OR openfda.brand_name:"${q}" OR openfda.substance_name:"${q}"`,
    `openfda.generic_name:${q} OR openfda.brand_name:${q} OR openfda.substance_name:${q}`,
    `"${q}"`
  ];

  for (const search of searchStrategies) {
    try {
      const result = await callOpenFda(search, 1);
      if (result) {
        return result;
      }
    } catch (err) {
      console.error("Search strategy failed:", search);
      console.error(err.message);
    }
  }

  return null;
}

module.exports = {
  fetchDrugLabel,
};
