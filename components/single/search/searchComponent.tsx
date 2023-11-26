import styles from "@/styles/search.module.css"

const SearchComponent = () => {
  return (
    <div className={styles.search}>
        <h2>Search for a product</h2>
        <form>
            <input type="text" placeholder="Search for a product" />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchComponent