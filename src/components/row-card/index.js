import { useMediaQuery } from "react-responsive";
import ProductRowCardMobile from "./product-row-card-mobile/product-row-card-mobile";
import ProductRowCard from "./product-row-card/product-row-card";
function RowCard({...others}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      {isMobile ? (
        <ProductRowCardMobile {...others} />
      ) : (
        <ProductRowCard {...others} />
      )}
    </>
  );
}

export default RowCard;
