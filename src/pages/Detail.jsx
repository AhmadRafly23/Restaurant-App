import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import SkeletonMenu from '../components/SkeletonMenu';
import SkeletonDetail from '../components/SkeletonDetail';
import Layout from '../layout/Layout';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://apis.ccbp.in/restaurants-list/${id}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
            },
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getRestaurants();
  }, []);

  return (
    <Layout>
      <Link className="flex items-center" to="/">
        <svg
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-2 dark:text-white"
        >
          <path
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="text-sm dark:text-white">Back to home</span>
      </Link>
      <div>
        {loading ? (
          <SkeletonDetail />
        ) : (
          <div className="flex flex-col items-center space-y-1 mt-2 mb-10">
            <img
              className="w-3/4 sm:w-1/2 mb-2 rounded-lg"
              src={data.image_url}
              alt=""
            />
            <h1 className="text-2xl dark:text-white">{data.name}</h1>
            <div className="flex items-center gap-1">
              <svg
                aria-hidden="true"
                fill="#FFCC00"
                stroke="#FFCC00"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <strong className="text-sm dark:text-white">{data.rating}</strong>
              <p className="text-xs text-gray-500">
                ({data.reviews_count} Rating)
              </p>
            </div>
            <p className="text-gray-500 text-sm text-center">{data.location}</p>
          </div>
        )}
        {loading ? (
          <SkeletonMenu />
        ) : (
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
            {data?.food_items?.map((item) => {
              return (
                <Menu
                  key={item.name}
                  name={item.name}
                  price={item.cost}
                  image={item.image_url}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Detail;
