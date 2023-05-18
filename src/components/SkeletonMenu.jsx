import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonMenu() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
      {Array(8)
        .fill()
        .map((_, index) => {
          return (
            <div key={index} className="flex gap-4">
              <Skeleton height={120} width={180} />
              <div className="flex flex-col justify-center space-y-1">
                <Skeleton height={20} width={100} />
                <Skeleton height={15} width={50} />
                <Skeleton height={15} width={50} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SkeletonMenu;
