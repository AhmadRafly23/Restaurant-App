import axios from 'axios';
import { slice } from 'lodash';
import { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Restaurant from '../components/Restaurant';
import { applyFilter } from '../utils/helper';
import Layout from '../layout/Layout';

function Home() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filter, setFilter] = useState({
    checked: '',
    cost: '',
    level: '',
  });
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(8);
  const initialPost = slice(
    filterData.length === 0 ? data : filterData,
    0,
    index
  );

  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://apis.ccbp.in/restaurants-list?offset=0&limit=30&sort_by_rating=''",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
            },
          }
        );
        setData(response.data.restaurants);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getRestaurants();
  }, []);

  const handleChange = (event) => {
    setFilter({ ...filter, checked: event.target.checked });
  };

  const handleSelectCost = (event) => {
    setFilter({ ...filter, cost: event.target.value });
  };

  const handleSelectLevel = (event) => {
    setFilter({ ...filter, level: event.target.value });
  };

  const removeFilter = () => {
    setFilter({ checked: '', cost: '', level: '' });
    setIndex(8);
  };

  useEffect(() => {
    applyFilter(data, filter).then((res) => setFilterData(res));
  }, [filter.checked, filter.cost, filter.level]);

  return (
    <Layout>
      <Filter
        checked={filter.checked}
        handleChecked={handleChange}
        cost={filter.cost}
        handleSelectCost={handleSelectCost}
        level={filter.level}
        handleSelectLevel={handleSelectLevel}
        removeFilter={removeFilter}
      />
      <Restaurant data={initialPost} loading={loading} setIndex={setIndex} />
    </Layout>
  );
}

export default Home;
