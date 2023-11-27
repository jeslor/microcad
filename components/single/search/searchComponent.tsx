"use client";
import { useState, useContext, useEffect } from "react";
import { StateContext } from "@/components/providers/stateProvider";
import styles from "@/styles/search.module.css"
import { searchProducts } from "@/lib/actions/product.actions";
import SmallSpinner from "@/components/single/spinner/smallSpinner";
import { useRouter } from 'next/navigation'

const SearchComponent = () => {
  const router = useRouter()
  const { openSearch, handleOpenSearch } = useContext(StateContext);
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)


  
  const serchClasses = openSearch? styles.searchisOpen : styles.searchClosed

  const handleSearch = async(e:any) => {
    setIsSearching(true)
    e.preventDefault();
    e.stopPropagation();
    const searchWord  = e.target.value;
    setSearch(searchWord)
    const foundSuggestions  = await searchProducts(searchWord);
    setSuggestions([...foundSuggestions])
    setIsSearching(false)
  }

  const handleSearchFormSubmit = (e:any) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/products/${search}`)
    handleOpenSearch()
  }


  return (
    <div className={`${serchClasses}`} >
          <div onClick={handleOpenSearch} className={styles.closeSearch}>
            <img src="/static/media/icons/close.svg" alt="closeIcon" />
          </div>
        <div className={styles.innerSearch}>
          <h2>Search for a product</h2>
          <form onSubmit={handleSearchFormSubmit}>
              <input onChange={handleSearch} value={search} type="text" placeholder="Search for a product" />
              <button type="submit">
               <img src="/static/media/icons/search.svg" alt="search" />
              </button>
          </form>
          <div className={styles.searchResults}>
            {
              isSearching
              ?<SmallSpinner term={"searching"} />
              : suggestions.map((suggestion:any) => (
              <a href={`/products/product/${suggestion._id}`} key={suggestion._id} className={styles.searchResult}>
                <div className={styles.searchImageHolder}>
                  <img src={suggestion.imageURL} alt={suggestion.name} />
                </div>
                <div className={styles.searchResultInfo}>
                  <h3>{suggestion.name}</h3>
                  <p>{suggestion.model}</p>
                </div>
                <div className={styles.Prices}>
                  <p className="text-secondaryMedium">${suggestion.price.toLocaleString()}</p>
                  <div className="text-xs">{suggestion.quantity>0?
                  <span>In stock</span>
                  :
                  <span>Out of stock</span>
                  }</div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SearchComponent