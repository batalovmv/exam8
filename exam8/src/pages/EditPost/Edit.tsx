import { useState } from "react";
import { useEffect } from "react";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import list from "../../data/lists/list";
import { NavLink } from "react-router-dom";
interface Props {
  text: string;
  category: string;
  author: string;
  name: string;
}
export default function Edit(props: Props) {
  const [info, setInfo] = useState([]);
  const [selectAuthor, setSelectAuthor] = useState(props.author);
  const [selectText, setSelectText] = useState(props.text);
  const [selectCategory, setSelectCategory] = useState(props.category);
  const [Pages, setPages] = useState([]);

  const putInfo = () => {
    axiosInfo.put(`/quotes/${props.name}.json`, {
      text: selectText,
      category: selectCategory,
      author: selectAuthor,
      time: Date.now(),
    });
  };

  // useEffect(() => {
  //   getInfo();
  // }, []);
  return (
    <>
      <select
        onChange={(e) => setSelectCategory(e.target.value)}
        className="selectedPage"
      >
        {list.map((select) => {
          if (select.title === selectCategory) {
            return (
              <option selected value={select.title}>
                {select.title}
              </option>
            );
          } else {
            return <option value={select.title}>{select.title}</option>;
          }
        })}
      </select>
      <textarea
        name={""}
        value={selectAuthor}
        rows={4}
        cols={40}
        onChange={(e) => setSelectAuthor(e.target.value)}
      />
      <textarea
        name={""}
        value={selectText}
        rows={4}
        cols={40}
        onChange={(e) => setSelectText(e.target.value)}
      />

      <button type="submit" onClick={putInfo}>
        Обновить данные
      </button>
    </>
  );
}
