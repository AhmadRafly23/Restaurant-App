import axios from 'axios';

export async function applyFilter(dataRestaurant, filter) {
  let updateData = dataRestaurant;

  updateData = updateData.filter((item) => {
    if (filter.checked === '') {
      return item;
    }

    return item.has_online_delivery === filter.checked;
  });

  updateData = updateData.filter((item) => {
    if (filter.cost === '') {
      return item;
    } else if (filter.cost === 'up') {
      return item.cost_for_two >= 500;
    } else {
      return item.cost_for_two < 500;
    }
  });

  const getData = await axios.get(
    `https://apis.ccbp.in/restaurants-list?offset=0&limit=30&sort_by_rating=${filter.level}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    }
  );

  const name = updateData.map((item) => item.name);

  updateData = getData.data.restaurants.filter((item) => {
    return name.includes(item.name);
  });

  return updateData;
}
