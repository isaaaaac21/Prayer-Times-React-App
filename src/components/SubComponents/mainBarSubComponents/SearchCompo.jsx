import React, { useContext, useRef, useState } from "react";
import "./searchCompo.css";
import { PrayersTimesContext } from "../../../contexts/PrayersTimesProvider";

const SearchCompo = ({ resetNextPrayer, t, activeLang }) => {
  const [inputCity, setInputCity] = useState("");
  const { handleSearchClick, lastCityName } = useContext(PrayersTimesContext);
  const enterBtnRef = useRef(null);

  function handleEnterClick(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      enterBtnRef.current?.click();
    }
  }
  function handleSearchBtnClick() {
    if (inputCity.trim() !== "" && lastCityName.current !== inputCity) {
      resetNextPrayer();
      handleSearchClick(inputCity);
    }
  }
  return (
    <div
      dir={activeLang === "en" ? "ltr" : "rtl"}
      className={`md:-mt-2 ${activeLang == "ar" ? "sm:order-1 md:order-1 lg:order-2 font-tajawal" : "lg:order-0 font-inter"}  flex justify-center items-center`}
    >
      <input
        className={`search-text py-3 px-4 md:px-5 2xl:py-5 2xl:px-7   border-0 ${activeLang === "ar" ? "rounded-r-lg" : "rounded-l-lg"}  bg-white/15 text-white text-base sm:text-sm md:text-base  backdrop-blur outline-none transition-all duration-300 focus placeholder-white w-[190px] md:w-[240px]`}
        type="text"
        placeholder={t("searchPlaceholder")}
        onChange={(e) => setInputCity(e.target.value)}
        onKeyDown={handleEnterClick}
      />
      <button
        ref={enterBtnRef}
        className={`btn py-3 px-5 2xl:py-5 2xl:px-7  border-0 ${activeLang == "ar" ? "rounded-l-xl" : "rounded-r-xl"}  text-white text-base sm:text-sm md:text-base cursor-pointer font-bold bg-accent-500 hover:bg-accent-600 transition-all duration-300 ease-in-out  sm:max-w-[80px] md:max-w-none shadow`}
        onClick={handleSearchBtnClick}
      >
        {t("search")}
      </button>
    </div>
  );
};

export default SearchCompo;
