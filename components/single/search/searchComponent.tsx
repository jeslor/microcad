"use client";
import { useState, useContext } from "react";
import { StateContext } from "@/components/providers/stateProvider";
import styles from "@/styles/search.module.css"

const SearchComponent = () => {
  const { openSearch, handleOpenSearch } = useContext(StateContext);

  
  const serchClasses = openSearch? styles.searchisOpen : styles.searchClosed


  return (
    <div className={`${serchClasses}`} >
          <div onClick={handleOpenSearch} className={styles.closeSearch}>
            <img src="/static/media/icons/close.svg" alt="closeIcon" />
          </div>
        <div className={styles.innerSearch}>
          <h2>Search for a product</h2>
          <form>
              <input type="text" placeholder="Search for a product" />
              <button type="submit">
               <img src="/static/media/icons/search.svg" alt="search" />
              </button>
          </form>
        </div>
    </div>
  )
}

export default SearchComponent