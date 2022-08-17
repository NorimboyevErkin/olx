import { useMediaQuery } from "react-responsive";
import ProductColumnCardMobile from "./product-column-card-mobile/product-column-card-mobile";
import ProductColumnCard from "./product-column-card/product-column-card";
function ColumnCard({...others}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      {isMobile ? (
        <ProductColumnCardMobile {...others} />
      ) : (
        <ProductColumnCard {...others} />
      )}
    </>
  );
}

export default ColumnCard;
