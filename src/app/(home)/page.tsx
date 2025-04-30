import Hero from "./components/Hero";
import Notices from "./components/Notices";
import FavoritesBanner from "./components/FavoritesBanner";
import Favorites from "./components/Favorites";
import Subscription from "./components/Subscription";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Notices/>
      <FavoritesBanner/>
      <Favorites/>
      <Subscription/>
    </main>
  );
}
