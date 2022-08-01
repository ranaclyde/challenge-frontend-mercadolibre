export async function getProducts(query = '') {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function getItem(id) {
  try {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const descriptionItem = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const dataItem = await item.json();
    const dataDescription = await descriptionItem.json();
    return {
      item: {
        id: dataItem.id,
        title: dataItem.title,
        price: {
          currency: dataItem.currency_id,
          amount: dataItem.price,
        },
        picture: dataItem.pictures[0].url,
        condition: dataItem.condition,
        free_shipping: dataItem.shipping.free_shipping,
        sold_quantity: dataItem.sold_quantity,
        description: dataDescription.plain_text,
      },
    };
  } catch (err) {
    return new Error(err);
  }
}
