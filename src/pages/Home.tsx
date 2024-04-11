import Filters from "../components/filters/Filters";
import Hotels from "../components/hotels/Hotels";

export default function Home() {
  return (
    <div className="main">
      <Filters />
      <Hotels />
    </div>
  );
}
