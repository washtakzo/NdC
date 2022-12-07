import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Basket from "../pages/basket";
import { basketActions } from "../store/basket-slice";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const numberOfProduct = useSelector(
    (state: any) => state.basketSection.numberOfProducts
  );

  const opacity = scrollY / 2 / 100;
  const headerTranslation = "-" + (scrollY / 2 <= 54 ? scrollY / 2 : 54) + "%";
  const headerHeigth = (200 - scrollY >= 80 ? 200 - scrollY : 80) + "px";

  const scrollListener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);

  // const basketClickHandler = () => {
  //   router.push("/basket");
  // };

  //Basket Modal
  const isShowBasket = useSelector(
    (store: any) => store.basketSection.isShowBasket
  );
  const dispatch = useDispatch();
  const basketClickHandler = () => {
    dispatch(basketActions.toggleShowBasket());
  };

  return (
    <header>
      <div className="fixed top-0 z-10 w-full">
        <div
          id="header_background"
          className="absolute h-full w-full bg-primary -z-10"
          style={{ opacity: opacity }}
        />
        <div
          className="flex flex-col py-2 px-6 xl:px-28"
          style={{ height: headerHeigth }}
        >
          <div
            id="header_translate"
            style={{ transform: `translateY(${headerTranslation})` }}
          >
            <h2 className="inline-flex font-semibold text-3xl mb-8 cursor-pointer font-serif">
              <Link href="/">Noce de coton</Link>
            </h2>
            <ul className="flex space-x-8">
              <li className="header__liste_item sm:text-green-500 md:text-blue-500 lg:text-orange-500 xl:text-red-500">
                Our Story
              </li>
              <Link href="/shop" className="header__liste_item">
                Shop
              </Link>
              <li className="header__liste_item">Contact Us</li>
            </ul>
          </div>
          <div className="absolute top-6 right-6 lg:right-28">
            <ul className="flex space-x-4">
              <li>
                <div>
                  {/* Search Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="header__liste_item w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <div className="relative">
                  {/* Basket Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="header__liste_item w-6 h-6"
                    onClick={basketClickHandler}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  {numberOfProduct > 0 && (
                    <div
                      className="absolute h-6 w-6 bg-third -top-2 -right-2 rounded-full flex justify-center items-center text-white text-xs cursor-pointer"
                      onClick={basketClickHandler}
                    >
                      {numberOfProduct}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="header_border"
          className="h-[1px] w-full bg-black"
          style={{ opacity: opacity }}
        />
      </div>

      {isShowBasket && <Basket />}
    </header>
  );
};

export default Header;
