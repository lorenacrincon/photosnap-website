import React from "react";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import Pinterest from "./Pinterest";
import Instagram from "./Instagram";

function SocialMediaIcons() {
  return (
    <>
      <div className="flex flex-row gap-4">
        <Facebook />
        <Youtube />
        <Twitter />
        <Pinterest />
        <Instagram />
      </div>
    </>
  );
}

export default SocialMediaIcons;
