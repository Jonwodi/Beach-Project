import { useHotelsContext } from "../../contexts/HotelsContext";
import AzIcon from "../icons/AzIcon";
import PoundIcon from "../icons/PoundIcon";
import StarIcon from "../icons/StarIcon";
import "./filters.scss";
import { useState } from "react";

const iconColors = {
  grey: "#D4D4D4",
  white: "#FFFFFF",
  navyBlue: "#17317f",
};

export default function Filters() {
  const { hotels, setCurrentHotels } = useHotelsContext();
  const [azFilterSelected, setAzFilterSelected] = useState<boolean>(false);
  const [priceFilterSelected, setPriceFilterSelected] =
    useState<boolean>(false);
  const [starFilterSelected, setStarFilterSelected] = useState<boolean>(false);

  const handleAzFilterSelected = () => {
    setAzFilterSelected(!azFilterSelected);
    setPriceFilterSelected(false);
    setStarFilterSelected(false);

    const hotelsSortedAlphabeticallyfromAtoZ = hotels.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setCurrentHotels(hotelsSortedAlphabeticallyfromAtoZ);
  };

  const handlePriceFilterSelected = () => {
    setPriceFilterSelected(!priceFilterSelected);
    setAzFilterSelected(false);
    setStarFilterSelected(false);

    const hotelsSortedByPriceFromHighToLow = hotels.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

      return priceB - priceA;
    });

    setCurrentHotels(hotelsSortedByPriceFromHighToLow);
  };

  const handleStarFilterSelected = () => {
    setStarFilterSelected(!starFilterSelected);
    setPriceFilterSelected(false);
    setAzFilterSelected(false);

    const hotelsSortedByStarRatingFromHightoLow = hotels
      .slice()
      .sort((a, b) => {
        return b.rating - a.rating;
      });

    setCurrentHotels(hotelsSortedByStarRatingFromHightoLow);
  };

  return (
    <section className="filters">
      <button
        className={
          azFilterSelected ? "filters__button-selected" : "filters__button"
        }
        onClick={() => handleAzFilterSelected()}>
        <p>
          sort by <span>alphabetically</span>
        </p>
        <AzIcon fill={azFilterSelected ? iconColors.white : iconColors.grey} />
      </button>
      <button
        className={
          priceFilterSelected ? "filters__button-selected" : "filters__button"
        }
        onClick={() => handlePriceFilterSelected()}>
        <p>
          sort by <span>price</span>
        </p>
        <PoundIcon
          otherFill={
            priceFilterSelected ? iconColors.navyBlue : iconColors.white
          }
          fill={priceFilterSelected ? iconColors.white : iconColors.grey}
        />
      </button>
      <button
        className={
          starFilterSelected ? "filters__button-selected" : "filters__button"
        }
        onClick={() => handleStarFilterSelected()}>
        <p>
          sort by <span>star rating</span>
        </p>
        <StarIcon
          fill={starFilterSelected ? iconColors.white : iconColors.grey}
        />
      </button>
    </section>
  );
}
