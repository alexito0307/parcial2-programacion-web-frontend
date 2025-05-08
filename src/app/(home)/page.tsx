import { Hero, Notices, FavoritesBanner, Favorites, Subscription } from './components';

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
