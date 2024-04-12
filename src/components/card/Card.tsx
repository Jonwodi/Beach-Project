import "./card.scss";
import Star from "../../assets/images/star.png";
import ChevronDown from "../../assets/images/chevron-down.svg";
import ChevronRight from "../../assets/images/chevron-right.svg";
import { useState } from "react";

export default function Card(props: any) {
  const {
    hotelImg,
    hotelName,
    hotelLocation,
    hotelRating,
    hotelDetails,
    hotelPrice,
    hotelOverview,
  } = props;
  const [showOverview, setShowOverview] = useState<boolean>(false);

  const convertHotelDetailsToHTML = (details: string) => {
    return { __html: details };
  };

  const renderHotelStarRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} src={Star} alt="star icon" />);
    }
    return stars;
  };

  return (
    <article className="card">
      <div className="card__top">
        <div className={`card__img card__img-${hotelImg}`}>
          <a onClick={() => setShowOverview(!showOverview)}>
            <p>
              {showOverview ? <b>Read less</b> : <b>Read more</b>} about this
              hotel
            </p>
            <img
              src={showOverview ? ChevronDown : ChevronRight}
              alt=""
              width="20px"
            />
          </a>
        </div>
        <div className="card__details">
          <h1>{hotelName}</h1>
          <small>{hotelLocation}</small>
          <div className="card__ratings">
            {renderHotelStarRating(hotelRating)}
          </div>
          <p
            dangerouslySetInnerHTML={convertHotelDetailsToHTML(
              hotelDetails
            )}></p>
          <button className="card__btn">
            <p>Book now</p>
            <p>{hotelPrice}</p>
          </button>
        </div>
      </div>
      {showOverview && (
        <div className="card__bottom">
          <h2>Overview</h2>
          <p>{hotelOverview}</p>
        </div>
      )}
    </article>
  );
}
