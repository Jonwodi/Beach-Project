import Card from "../card/Card";
import "./hotels.scss";
import { useHotelsContext } from "../../contexts/HotelsContext";

export default function Hotels() {
  const { hotels } = useHotelsContext();
  return (
    <section className="hotels">
      {hotels?.map((hotel) => (
        <Card
          key={hotel.id}
          hotelImg={hotel.image}
          hotelName={hotel.name}
          hotelLocation={hotel.location}
          hotelRating={hotel.rating}
          hotelDetails={hotel.details}
          hotelPrice={hotel.price}
          hotelOverview={hotel.readMore}
        />
      ))}
    </section>
  );
}
