import clsx from "clsx";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  console.log("filter", filter);

  const handleChange = (e) => {
    dispatch({ type: "filters/search", payload: e.target.value });
  };
  return (
    <div className={clsx(css.search)}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};
export default SearchBox;
