import Category from "../components/Category/category";
import Favorites from "../components/Favorites/Favorites";
function Home() {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div>
      <Category/>
      <Favorites/>
    </div>
  );
}

export default Home;
