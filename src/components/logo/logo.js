import OlxSvg from "../../assets/svg/olx-svg";
import { Link } from "react-router-dom";

function Logo({ width = "98", height = "56", color = "#24e5db" }) {
  return (
    <Link to="/">
      <OlxSvg width={width} height={height} color={color} />
    </Link>
  );
}

export default Logo;
