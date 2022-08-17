function PhoneSvg() {
  const style = {
    height: "32px",
    width: "32px",
    color: "rgb(0, 47, 52)",
    padding: "8px",
    backgroundColor: "rgb(35, 229, 219)",
    borderRadius: "50%",
    marginRight: "16px",
  };

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M18.388 19.978C10.62 19.635 4.365 13.38 4.022 5.612l3.515-1.406 2.149 4.299-1.664.832v.62a6.029 6.029 0 0 0 6.021 6.021h.62l.278-.554.555-1.11 4.298 2.15-1.406 3.514zm3.13-4.897-6.022-3.011-1.347.45-.704 1.407a4.023 4.023 0 0 1-3.372-3.372l1.408-.704.449-1.346-3.01-6.022L7.65 2 2.63 4.007 2 4.94C2 14.347 9.654 22 19.061 22l.932-.63L22 16.35l-.483-1.27z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default PhoneSvg;
