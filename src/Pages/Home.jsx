import Category from "../components/Category/category";
import Favorites from "../components/Favorites/Favorites";
import Slider from "../components/Slider/HomeSlider"
function Home() {
  return (
    <div>
      <Category/>
      <Slider/>
      <Favorites/>
    </div>
  );
}
export default Home;
