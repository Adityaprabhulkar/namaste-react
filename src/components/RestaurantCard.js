import { CDN_URL } from "../utils/constants";

const RestaurantCard = ( props ) => {
  const {resData} = props;

  const {cloudinaryImageId,name, cuisines, avgRating, costForTwo, deliveryTime } = resData.info;
  
  return (
    <div className="res-card">
      <img
        className="logo"
        alt="res-logo"
      src={
         resData.info.cloudinaryImageId
         ? CDN_URL +
         resData.info.cloudinaryImageId
         : "fallback-image.jpg"
}
      />

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ") || "No cuisines"}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime || resData.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard; 