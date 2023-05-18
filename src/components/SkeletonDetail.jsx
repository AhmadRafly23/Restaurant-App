import Skeleton from 'react-loading-skeleton';

function SkeletonDetail() {
  return (
    <div className="flex flex-col items-center space-y-1 mt-2 mb-10">
      <Skeleton
        className="w-[260px] h-[170px] md:w-[370px] lg:w-[512px] md:h-[250px] lg:h-[340px]"
        borderRadius={10}
      />
      <Skeleton height={30} width={120} />
      <Skeleton height={20} width={100} />
      <Skeleton height={20} width={300} />
    </div>
  );
}

export default SkeletonDetail;
