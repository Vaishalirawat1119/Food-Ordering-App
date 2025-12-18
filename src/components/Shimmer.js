const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-8">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="m-5 w-[220] h-[500] bg-gray-200 p-2 rounded-md"
          >
            {/* Image */}
            <div className="mt-1 ml-1 w-[13.1rem] h-[10] bg-gray-300 rounded-md animate-pulse"></div>

            {/* Heading */}
            <div className="mt-12 ml-1 w-40 h-7 bg-gray-300 rounded animate-pulse"></div>

            {/* Cuisine */}
            <div className="mt-4 ml-1 w-48 h-16 bg-gray-300 rounded animate-pulse"></div>

            {/* Rating */}
            <div className="mt-4 ml-1 w-16 h-7 bg-gray-300 rounded animate-pulse"></div>

            {/* Cost */}
            <div className="mt-4 ml-1 w-24 h-7 bg-gray-300 rounded animate-pulse"></div>

            {/* Distance */}
            <div className="mt-4 ml-1 w-28 h-7 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
