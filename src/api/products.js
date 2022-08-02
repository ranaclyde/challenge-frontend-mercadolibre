const apiUrl = 'http://localhost:3050/api';

export async function getProducts(query = '') {
  try {
    const response = await fetch(`${apiUrl}/items?q=${query}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function getItem(id) {
  try {
    const response = await fetch(`${apiUrl}/items/${id}`);
    const data = await response.json();
    return {
      item: {
        ...data,
      },
      author: {
        name: 'Matias Emanuel',
        lastname: 'Sanhueza',
      },
    };
  } catch (err) {
    return new Error(err);
  }
}
