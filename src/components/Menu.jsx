function Menu({ name, price, image, rating }) {
  return (
    <div className="flex gap-4">
      <img
        src={image}
        alt=""
        className="w-40 h-[100px] rounded-lg md:w-[255px] md:h-[150px] object-cover"
      />
      <div className="flex flex-col justify-center">
        <h2 className="md:text-lg dark:text-white">{name}</h2>
        <p className=" text-gray-500 text-sm font-light">$ {price}</p>
        <div className="flex gap-1 items-center">
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
          <strong className="text-sm font-light dark:text-white">
            {rating}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Menu;
