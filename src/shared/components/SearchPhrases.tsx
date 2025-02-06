import { useEffect, useState } from "react";
import InputComponent from "./form/Input";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addsearch } from "../../redux/sliders/search";

const SearchPhrases = () => {
  const dispatch = useDispatch<any>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(addsearch({ search: search }));
  }, [search]);

  return (
    <div className="w-full relative flex justify-center items-center">
      <FiSearch className="absolute left-[10px] top-[17px]" size={23} />
      <InputComponent
        className="pl-[35px] "
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar frases"
      />
    </div>
  );
};

export default SearchPhrases;
