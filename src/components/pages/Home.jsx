import createAndShareMobile from "/assets/home/mobile/create-and-share.jpg";
import createAndShareTablet from "/assets/home/tablet/create-and-share.jpg";
import createAndShareDesktop from "/assets/home/desktop/create-and-share.jpg";
import beautifulStoriesMobile from "/assets/home/mobile/beautiful-stories.jpg";
import beautifulStoriesTablet from "/assets/home/tablet/beautiful-stories.jpg";
import beautifulStoriesDesktop from "/assets/home/desktop/beautiful-stories.jpg";
import designedMobile from "/assets/home/mobile/designed-for-everyone.jpg";
import designedTablet from "/assets/home/tablet/designed-for-everyone.jpg";
import designedDesktop from "/assets/home/desktop/designed-for-everyone.jpg";
import { GetAnInvite, ViewStories } from "../common/Buttons";
import { HomeStories } from "../common/StoriesMap";
import { HomeFeatures } from "../common/FeaturesMap";

function Home() {
  return (
    <>
      <header className="home-section">
        <div>
          <img
            className="w-full"
            src={createAndShareMobile}
            alt="Create and Share"
          />
        </div>
        <div className="bg-pure-black text-pure-white p-8 py-24 flex flex-wrap gap-4 relative">
          <div className="gradient-rectangle"></div>
          <h1 className="uppercase">Create and share your photo Stories.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <GetAnInvite />
        </div>
      </header>
      <section className="home-section">
        <div>
          <img
            className="w-full"
            src={beautifulStoriesMobile}
            alt="Create and Share"
          />
        </div>
        <div className="bg-pure-white text-pure-black p-8 py-24 flex flex-wrap gap-4 relative">
          <h1 className="uppercase">Beautiful stories every time</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <ViewStories />
        </div>
      </section>
      <section className="home-section">
        <div>
          <img className="w-full" src={designedMobile} alt="Create and Share" />
        </div>
        <div className="bg-pure-white text-pure-black px-8 py-24 flex flex-wrap gap-4 relative">
          <h1 className="uppercase">Designed for everyone</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <ViewStories />
        </div>
      </section>
      <HomeStories />
      <HomeFeatures />
    </>
  );
}

export default Home;
