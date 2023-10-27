import { GetAnInvite, ViewStories } from "../../common/Buttons";
import { HomeStories } from "../../common/StoriesMap";
import { HomeFeatures } from "../../common/FeaturesMap";
import PageTitle from "../../common/PageTitle";

function Home() {
  const pageTitle = "Photosnap | Home";

  return (
    <>
      <PageTitle title={pageTitle} />
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="create-bg md:h-full md:flex order-last bg-no-repeat bg-cover bg-center lg:col-span-4"></div>
          <div className="bg-pure-black text-pure-white px-6 py-16 relative md:col-span-2 md:px-14 md:py-[173px] lg:col-span-3 lg:px-28 lg:py-44 ">
            <div className="relative flex flex-wrap gap-8 h-full content-between lg:gap-8">
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
      </section>
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="beautiful-bg h-[271px] md:h-full md:flex bg-no-repeat bg-cover bg-center md:col-span-1 lg:col-span-4"></div>
          <div className="bg-pure-white text-pure-black px-6 py-16 flex flex-wrap md:px-14 md:col-span-2 md:py-32 lg:px-28 lg:col-span-3">
            <div className="relative flex flex-wrap gap-6 content-between">
              <h1 className="uppercase lg:pe-20">
                Beautiful
                <br /> stories
                <br /> every time
              </h1>
              <p className="md:tracking-wide">
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
          <div className="designed-bg h-[271px] md:h-full md:flex bg-no-repeat bg-cover bg-center md:col-span-1 md:order-last lg:col-span-4"></div>

          <div className="bg-pure-white text-pure-black px-6 py-24 flex flex-wrap md:px-14 md:col-span-2  md:py-32 lg:px-28 lg:col-span-3">
            <div className="relative flex flex-wrap gap-6 h-full content-between ">
              <h1 className="uppercase">Designed for everyone</h1>
              <p className="md:tracking-wider">
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
