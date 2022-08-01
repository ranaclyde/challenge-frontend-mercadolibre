export async function getProducts(query = '') {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    if (!response.ok) {
     throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super('Network Error')
  }
}