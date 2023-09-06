import { GetAnInvite, ViewStories } from "../common/Buttons";
import { HomeStories } from "../common/StoriesMap";
import { HomeFeatures } from "../common/FeaturesMap";

function Home() {
  return (
    <>
      <header className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="create-bg h-[294px] md:h-[651px] md:flex order-last bg-no-repeat bg-cover bg-center lg:col-span-4"></div>
          <div className="bg-pure-black  text-pure-white p-8 py-24 relative md:col-span-2 md:px-14 md:py-48 lg:col-span-3 lg:px-28 lg:py-44 ">
            <div className="relative flex flex-wrap gap-4  h-full content-between lg:gap-8">
              <div className="gradient-rectangle"></div>
              <h1 className="uppercase">
                Create and share your photo Stories.
              </h1>
              <p className="md:pe-6">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <GetAnInvite />
            </div>
          </div>
        </div>
      </header>
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="beautiful-bg h-[271px] md:h-[600px] md:flex bg-no-repeat bg-cover bg-center md:col-span-1 lg:col-span-4"></div>
          <div className="bg-pure-white text-pure-black p-8 py-24 flex flex-wrap gap-4 md:col-span-2 md:px-14 md:py-38lg:col-span-3">
            <div className="relative flex flex-wrap gap-4 h-full content-center">
              <h1 className="uppercase md:pe-20">
                Beautiful stories every time
              </h1>
              <p className="md:pe-12">
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <ViewStories />
            </div>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="designed-bg h-[271px] md:h-[600px] md:flex bg-no-repeat bg-cover bg-center md:col-span-1 md:order-last lg:col-span-4"></div>

          <div className="bg-pure-white text-pure-black px-8 py-24 flex flex-wrap gap-4 md:basis-8/12 md:px-14 md:py-38 md:col-span-2 lg:col-span-3">
            <div className="relative flex flex-wrap gap-4  h-full content-center ">
              <h1 className="uppercase">Designed for everyone</h1>
              <p className="md:pe-12">
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <ViewStories />
            </div>
          </div>
        </div>
      </section>
      <HomeStories />
      <HomeFeatures />
    </>
  );
}

export default Home;
