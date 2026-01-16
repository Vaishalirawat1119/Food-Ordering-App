import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData.info;

  return (
    <div className="p-1.5 m-4 w-[200] h-[430] cursor-pointer 
    border border-gray-200 
    rounded-xl
    bg-white
    shadow-sm shadow-black/10
    hover:shadow-lg hover:shadow-black/20
    hover:bg-[#F6F0D7]
    transition-all duration-300 ease-in-out">
      {/* Image */}
      <img
        className="w-full h-[40%] object-cover rounded-md"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h3 className="font-medium my-6 text-lg truncate">{name}</h3>

        <p className="text-xs font-bold text-gray-600 truncate">
          {cuisines.join(", ")}
        </p>

        <p className="text-sm">{avgRating} ⭐</p>

        <p className="text-sm">{costForTwo}</p>

        <p className="text-sm">{sla.deliveryTime} min</p>
      </div>
    </div>
  );
};

export const discountSection = (RestaurantCard) => {
  return ({ resData }) => {
    const {
      discount
    } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        {discount?.header && (
          <div className="absolute top-2 left-2 z-10
            bg-black text-white text-xs font-bold
            px-2 py-1 rounded-lg">
            {discount.header}
            {discount.subHeader && ` • ${discount.subHeader}`}
          </div>
        )}
        <RestaurantCard resData={resData} />
      </div>
    )
  }
}

export default RestaurantCard;
