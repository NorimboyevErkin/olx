function StatisticSvg({ width = "110", height = "110" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 130 130"
    >
      <defs>
        <path
          id="prefix__a"
          d="M2.107 0L11.06 0 12.64 2.288 12.64 71.116 0 71.116 0 2.288z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              fill="#F2F4F5"
              d="M1.495 0L10.465 0 11.96 1.204 11.96 35.637 0 35.637 0 1.149z"
              transform="translate(6.964 21.357) translate(10.467) translate(0 16.141) translate(0 35.284)"
            />
            <path
              fill="#F2F4F5"
              d="M1.355 0L9.488 0 10.844 1.445 10.844 42.776 0 42.776 0 1.38z"
              transform="translate(6.964 21.357) translate(10.467) translate(0 16.141) translate(53.434 28.145)"
            />
            <path
              fill="#F2F4F5"
              d="M1.147 0L8.027 0 9.174 2.018 9.174 59.757 0 59.757 0 1.927z"
              transform="translate(6.964 21.357) translate(10.467) translate(0 16.141) translate(80.15 11.164)"
            />
            <path
              fill="#F2F4F5"
              d="M0.123 0L0.862 0 0.985 2.01 0.985 24.873 0 24.873 0 1.92z"
              transform="translate(6.964 21.357) translate(10.467) translate(0 16.141) translate(106.867 46.048)"
            />
            <g transform="translate(6.964 21.357) translate(10.467) translate(0 16.141) translate(24.016)">
              <mask id="prefix__b" fill="#fff">
                <use xlinkHref="#prefix__a" />
              </mask>
              <use fill="#2E5BFF" xlinkHref="#prefix__a" />
              <path
                fill="#1D3C81"
                d="M10.307 -1.705L-28.44 51.571 -19.742 -7.792z"
                mask="url(#prefix__b)"
              />
            </g>
          </g>
          <g>
            <path
              fill="#FFCE32"
              d="M99.174-.923c2.911 0 5.271 2.492 5.271 5.566s-2.36 5.566-5.27 5.566c-2.912 0-5.271-2.492-5.271-5.566s2.36-5.566 5.27-5.566zm0 4.453c-.582 0-1.054.498-1.054 1.113s.472 1.113 1.054 1.113c.583 0 1.055-.498 1.055-1.113s-.472-1.113-1.055-1.113z"
              transform="translate(6.964 21.357) translate(10.467) translate(3.754)"
            />
            <path
              stroke="#FFCE32"
              strokeWidth="2.783"
              d="M0 68.714L28.465 35.086 50.23 60.975 97.101 7.374"
              transform="translate(6.964 21.357) translate(10.467) translate(3.754)"
            />
          </g>
        </g>
        <path
          stroke="#F2F4F5"
          strokeLinecap="square"
          strokeWidth="1.67"
          d="M0.22 87.056L115.852 87.056"
          transform="translate(6.964 21.357)"
        />
      </g>
    </svg>
  );
}

export default StatisticSvg;
