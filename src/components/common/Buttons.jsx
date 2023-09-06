import React from "react";

// const btnHover = {
//   color: "var(--white)",
//   backgroundColor: "var(--lightPeach)",
// };

export const GetAnInvite = () => {
  return (
    <button className="flex flex-wrap gap-4 white-btn">
      <span className="self-center">GET AN INVITE</span>
      <svg
        className="self-center"
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFFFFF">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
};

export const ViewStories = () => {
  return (
    <button className="flex flex-wrap gap-4 black-btn">
      <span>VIEW THE STORIES</span>
      <svg
        className="self-center"
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
      >
        <g fill="none" fillRule="evenodd" stroke="#000000">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
};

export const ReadStory = () => {
  return (
    <button className="flex flex-wrap gap-4 white-btn justify-between relative z-40">
      <span>READ STORY</span>
      <svg
        className="self-center"
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFFFFF">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
};
