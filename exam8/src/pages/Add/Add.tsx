import "./Add.css";
import { useState } from "react";
import { useEffect } from "react";
import list from "../../data/lists/list";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import { NavLink } from "react-router-dom";

export default function Add() {
  const [info, setInfo] = useState([]);
  const [selectAuthor, setSelectAuthor] = useState("");
  const [selectText, setSelectText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [Pages, setPages] = useState([]);

  const putInfo = () => {
    axiosInfo.post(`/quotes/.json`, {
      author: selectAuthor,
      Text: selectText,
      category: selectCategory,
      time: Date.now(),
    });
  };

  const getInfo = () => {
    axiosInfo.get(`/quotes/.json`).then((response) => {
      setPages(Object.keys(response.data));
      console.log(response.data);
      setInfo(response.data);
    });
  };
  const reloadPage = (text: string) => {
    setSelectPage(text);
    getInfo();
    setSelectText(Object.values(info)[Pages.indexOf(text)].content);
  };

  // useEffect(() => {
  //   getInfo();
  // }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Add posts</h1>
          <select
            onChange={(e) => reloadPage(e.target.value)}
            className="selectedPage"
          >
            {list.map((select) => {
              return <option value={select.title}>{select.title}</option>;
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

          <NavLink to={`/`} className="site-title">
            <button type="submit" onClick={putInfo}>
              Обновить данные
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
