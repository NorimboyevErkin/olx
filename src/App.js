import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Loader from "./components/loader/loader";
import CategoryId from "./page/category-id/category-id";
import Category from "./page/category/category";
import Favorites from "./page/favorites/favorites";
import Home from "./page/home/home";
import NotAway from "./page/not-away";
import useGetFetch from "./utils/custom-hook/useGetHook";
import { useDispatch } from "react-redux";
import Advertising from "./page/advertising/advertising";
import Product from "./page/product/product";
import { setmainCategory } from "./redux-toolkit/reducers/mainCategory";
import { setregionList } from "./redux-toolkit/reducers/regionList";
import PostNewAdd from "./page/post-new-add/post-new-add";
import Translation from "./translation";
import Register from "./page/register/register";
import { CurrentAccount } from "./context";
import useLocalStore from "./utils/custom-hook/useLocalStore";
import { useAuth } from "./firebase/config";
import Account from "./page/account/account";

function App() {
  const currentUser = useAuth();
  const [curAccount, setcurAccount] = useLocalStore("olx-account", {});

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

  useEffect(() => {
    setcurAccount(currentUser);
  }, [currentUser]);

  return (
    <>
      {loading1 ? (
        <Loader />
      ) : (
        <CurrentAccount.Provider
          value={{
            curAccount,
            setcurAccount,
          }}
        >
          <Translation>
            <Layout>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="account" element={<Account />} />
                  <Route path="register" element={<Register />} />
                  <Route path="categorys" element={<Category />} />
                  <Route path="post-new-add" element={<PostNewAdd />} />
                  <Route
                    path="categorys/:categoryId"
                    element={<CategoryId />}
                  />

                  <Route path="product/:mainCategoryId" element={<Product />} />
                  <Route
                    path="product/:mainCategoryId/:categoryId"
                    element={<Product />}
                  />
                  <Route
                    path="advertising/:advertisingName"
                    element={<Advertising />}
                  />
                  <Route path="*" element={<NotAway />} />
                </Routes>
              </Suspense>
            </Layout>
          </Translation>
        </CurrentAccount.Provider>
      )}
    </>
  );
}
export default App;
