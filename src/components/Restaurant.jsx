import Card from './Card';
import SkeletonCard from './SkeletonCard';

function Restaurant({ data, loading, setIndex }) {
  return (
    <div className="py-8">
      <span className="text-2xl font-light dark:text-white">
        All Restaurants
      </span>
      <div className="pt-4 pb-6">
        {loading ? (
          <SkeletonCard />
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image_url}
                  title={item.name}
                  rating={item.user_rating.rating}
                  categories={item.cuisine}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className="border border-black py-2 px-10 text-xs dark:text-white dark:border-white"
          onClick={() => setIndex((prev) => prev + 8)}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
