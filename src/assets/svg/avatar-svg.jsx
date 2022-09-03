function AvatarSvg({ width = "3rem", height = "3rem" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 79 79"
    >
      <defs>
        <path
          id="user_svg__a"
          d="M.033 39.323c0 21.716 17.604 39.32 39.32 39.32 21.715 0 39.319-17.604 39.319-39.32 0-21.715-17.604-39.32-39.32-39.32C17.637.004.032 17.609.032 39.324"
        ></path>
        <path
          id="user_svg__c"
          d="M39.32 78.64c21.715 0 39.32-17.605 39.32-39.32C78.64 17.604 61.034 0 39.32 0 17.604 0 0 17.604 0 39.32c0 21.715 17.604 39.32 39.32 39.32z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="user_svg__b" fill="#fff">
          <use xlinkHref="#user_svg__a"></use>
        </mask>
        <path
          fill="#3A77FF"
          d="M78.672 39.323c0 21.716-17.604 39.32-39.32 39.32-21.715 0-39.32-17.604-39.32-39.32 0-21.715 17.605-39.32 39.32-39.32 21.716 0 39.32 17.605 39.32 39.32"
          mask="url(#user_svg__b)"
        ></path>
        <g transform="translate(.033 .004)">
          <mask id="user_svg__d" fill="#fff">
            <use xlinkHref="#user_svg__c"></use>
          </mask>
          <use fill="#D8DFE0" xlinkHref="#user_svg__c"></use>
          <path
            fill="#406367"
            d="M12.156 110.68h54.327V56.355H12.156z"
            mask="url(#user_svg__d)"
          ></path>
          <path
            fill="#EBEEEF"
            d="M60.21 39.32c0 11.537-9.353 20.89-20.89 20.89s-20.89-9.353-20.89-20.89 9.353-20.89 20.89-20.89 20.89 9.353 20.89 20.89"
            mask="url(#user_svg__d)"
          ></path>
          <path
            fill="#7F9799"
            d="M50.493 31.504c-4.48 5.764-12.783 6.806-18.547 2.327-5.764-4.479-6.806-12.782-2.327-18.546 4.48-5.764 12.783-6.806 18.547-2.327 5.764 4.479 6.805 12.782 2.327 18.546"
            mask="url(#user_svg__d)"
          ></path>
          <path
            fill="#7F9799"
            d="M50.194 31.889 39.372 23.48l8.41-10.821 10.82 8.409zm-34.842-2.204a8.582 8.582 0 1 1 17.03-2.136 8.582 8.582 0 0 1-17.03 2.136"
            mask="url(#user_svg__d)"
          ></path>
          <path
            fill="#7F9799"
            d="m15.312 29.371 8.83-1.108 1.107 8.83L16.42 38.2z"
            mask="url(#user_svg__d)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default AvatarSvg;
