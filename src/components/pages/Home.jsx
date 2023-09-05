import React from "react";
import createAndShareMobile from "/assets/home/mobile/create-and-share.jpg";
import createAndShareTablet from "/assets/home/tablet/create-and-share.jpg";
import createAndShareDesktop from "/assets/home/desktop/create-and-share.jpg";

function Home() {
  return (
    <header className="home-header">
      <div>
        <img src={createAndShareMobile} alt="Create and Share" />
      </div>
      <div className="bg-pure-black text-pure-white p-8 flex flex-wrap gap-4">
        <div className="gradient-rectangle"></div>
        <h1 className="uppercase">Create and share your photo Stories.</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
      </div>
    </header>
  );
}

export default Home;
