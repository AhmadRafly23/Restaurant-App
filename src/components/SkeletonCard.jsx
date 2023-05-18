import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonCard() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill()
        .map((_, index) => {
          return (
            <div key={index} className="flex flex-col justify-between">
              <div>
                <Skeleton height={200} />
                <div className="py-2">
                  <Skeleton height={15} width={120} />
                  <Skeleton height={20} width={100} />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <Skeleton height={15} width={80} />
                    <Skeleton height={15} width={50} />
                  </div>
                </div>
              </div>
              <div className="text-center bg-dark-blue text-white py-2 cursor-pointer">
                <span className="text-xs">LEARN MORE</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SkeletonCard;
