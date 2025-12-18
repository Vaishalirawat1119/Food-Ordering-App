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
    <div className="p-2 m-2 w-[200] h-[430] cursor-pointer hover:border hover:bg-[#C5D89D] hover:border-gray-500">
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

export default RestaurantCard;
