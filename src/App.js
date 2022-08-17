import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Loader from "./components/loader/loader";
import CategoryId from "./page/category-id/category-id";
import Category from "./page/category/category";
import Favorites from "./page/favorites/favorites";
import Home from "./page/home/home";
import NotAway from "./page/not-away";
import useGetFetch from "./utils/custom-hook/useGetHook";
import { useSelector, useDispatch } from "react-redux";
import Advertising from "./page/advertising/advertising";
import Product from "./page/product/product";
import { setmainCategory } from "./redux-toolkit/reducers/mainCategory";
import { setregionList } from "./redux-toolkit/reducers/regionList";
function App() {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();
  const { isLoading: loading1 } = useGetFetch(
    "category",
    "mainCategory?_embed=category",
    (data) => dispatch(setmainCategory(data)),
    (error) => console.log(error)
  );

  const { isLoading: loading2 } = useGetFetch(
    "regions",
    "region?_embed=city",
    (data) => dispatch(setregionList(data)),
    (error) => console.log(error)
  );
  return (
    <>
      {loading1 ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="categorys" element={<Category />} />
            <Route path="categorys/:categoryId" element={<CategoryId />} />

            <Route path="product/:productCategory" element={<Product />} />
            <Route path="product/:productCategory/:productName" element={<Product />} />
            <Route
              path="advertising/:advertisingName"
              element={<Advertising />}
            />
            <Route path="*" element={<NotAway />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}
export default App;
