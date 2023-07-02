import "./Posts.css";
import { useState } from "react";
import { useEffect } from "react";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import { NavLink } from "react-router-dom";
import BlockPost from "../../components/BlockPost/BlockPost";

export default function Posts() {
  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState(true);
  const [selectPage, setSelectPage] = useState("");
  const [selectContent, setSelectContent] = useState("");
  const [Pages, setPages] = useState([]);

  const getInfo = () => {
    axiosInfo.get(`/posts/.json`).then((response) => {
      setPages(Object.keys(response.data));
      console.log(response.data);
      setInfo(response.data);
    });
  };
  const putInfo = () => {
    axiosInfo.put(`/${selectPage}.json`, {
      content: selectContent,
      title: selectPage,
    });
  };

  const reloadPage = (text: string) => {
    setSelectPage(text);
    getInfo();
    setSelectContent(Object.values(info)[Pages.indexOf(text)].content);
  };

  useEffect(() => {
    getInfo();
  }, [status]);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>List of Posts</h1>
          {Pages.map((select) => {
            return (
              <>
                <BlockPost name={select} status={setStatus} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
