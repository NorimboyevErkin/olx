function PaperSvg({ width = "111", height = "132" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 111 132"
    >
      <defs>
        <path
          id="a"
          d="M78.192 18.226v79.547l-4.106 4.099H4.107c-1.612-1.599-2.505-2.5-4.107-4.099V4.098C1.602 2.5 2.495 1.598 4.107 0h55.819l18.266 18.226z"
        />
        <path id="c" d="M78.192 18.226H59.926V0z" />
        <path id="d" d="M55.683 5v46.474l-4.107 4.098H5z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#23E5DB"
          strokeWidth="6.944"
          d="M52.23 110.202l-18.652 18.611M21.652 79.692L3 98.304"
        />
        <g transform="translate(32.69)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path fill="#FFCE32" d="M-5-5h88.192v111.872H-5z" mask="url(#b)" />
          <use fill="#FFEBAC" xlinkHref="#c" />
        </g>
        <g transform="translate(55.196 46.303)">
          <mask id="e" fill="#fff">
            <use xlinkHref="#d" />
          </mask>
          <path fill="#D8B87A" d="M0 0h60.683v60.572H0z" mask="url(#e)" />
        </g>
        <path
          stroke="#003035"
          strokeWidth="6"
          d="M96.993 34.683H50.555M96.993 44.182H50.555M96.993 53.681H50.555M96.993 63.18H50.555M96.993 72.678H50.555"
        />
        <path
          stroke="#23E5DB"
          strokeWidth="6.944"
          d="M34.802 42.941L6.16 71.519M88.561 97.553l-25.385 25.329M43.548 88.936L4.558 127.84"
        />
      </g>
    </svg>
  );
}

export default PaperSvg;