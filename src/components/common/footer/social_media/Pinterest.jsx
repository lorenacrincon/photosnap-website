import React from "react";

function Pinterest() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="pinterest" x1="100%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#F6C683" />
          <stop offset="100%" stop-color="#DE3838" />
        </linearGradient>
      </defs>
      <path
        d="M109.99 0c-5.522 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z"
        transform="translate(-100)"
        style={{ transition: "fill 0.6s", fill: "white" }}
        onMouseEnter={(e) => (e.currentTarget.style.fill = "url(#pinterest)")}
        onMouseLeave={(e) => (e.currentTarget.style.fill = "white")}
      />
    </svg>
  );
}

export default Pinterest;
