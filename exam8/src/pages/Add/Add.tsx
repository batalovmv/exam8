import "./Add.css";
import { useState } from "react";
import { useEffect } from "react";

import axiosInfo from "../../components/GetInfo/axiosInfo";
import { NavLink } from "react-router-dom";

export default function Add() {
  const [info, setInfo] = useState([]);
  const [selectTitle, setSelectTitle] = useState("");
  const [selectContent, setSelectContent] = useState("");
  const [selectAuthor, setSelectAuthor] = useState("");
  const [Pages, setPages] = useState([]);

  const putInfo = () => {
    axiosInfo.post(`/quotes/.json`, {
      author: selectAuthor,
      content: selectContent,
      title: selectTitle,
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
    setSelectContent(Object.values(info)[Pages.indexOf(text)].content);
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
            {Pages.map((select) => {
              return <option value={select}>{select}</option>;
            })}
          </select>

          <textarea
            name={""}
            value={selectTitle}
            rows={4}
            cols={40}
            onChange={(e) => setSelectTitle(e.target.value)}
          />
          <textarea
            name={""}
            value={selectContent}
            rows={4}
            cols={40}
            onChange={(e) => setSelectContent(e.target.value)}
          />

          <NavLink to={`/posts`} className="site-title">
            <button type="submit" onClick={putInfo}>
              Обновить данные
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
