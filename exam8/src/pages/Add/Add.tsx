import "./Add.css";
import { useState } from "react";

import list from "../../data/lists/list";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import { NavLink } from "react-router-dom";

export default function Add() {
  const [selectAuthor, setSelectAuthor] = useState("");
  const [selectText, setSelectText] = useState("");
  const [selectCategory, setSelectCategory] = useState(list[0].title);

  const putInfo = () => {
    axiosInfo.post(`/quotes/.json`, {
      author: selectAuthor,
      text: selectText,
      category: selectCategory,
      time: Date.now(),
    });
  };
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Add posts</h1>
          <select
            onChange={(e) => setSelectCategory(e.target.value)}
            className="selectedPage"
          >
            {list.map((select) => {
              return <option value={select.title}>{select.title}</option>;
            })}
          </select>
          Автор :
          <textarea
            name={""}
            value={selectAuthor}
            rows={4}
            cols={40}
            onChange={(e) => setSelectAuthor(e.target.value)}
          />
          Цитата :
          <textarea
            name={""}
            value={selectText}
            rows={4}
            cols={40}
            onChange={(e) => setSelectText(e.target.value)}
          />
          <NavLink to={`/`} className="site-title">
            <button type="submit" onClick={putInfo}>
              Отправить цитату
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
