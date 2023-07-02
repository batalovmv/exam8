import "./Posts.css";
import { useState } from "react";
import { useEffect } from "react";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import { NavLink } from "react-router-dom";
import BlockPost from "../../components/BlockPost/BlockPost";
import { NavList } from "../../navbar";
interface Props {
  category?: string;
}

export default function Posts(props: Props) {
  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState(true);
  const [selectPage, setSelectPage] = useState("");
  const [selectContent, setSelectContent] = useState("");
  const [Pages, setPages] = useState([]);

  const getInfo = async () => {
    if (props.category) {
      await axiosInfo
        .get(`/quotes.json?orderBy="category"&equalTo="${props.category}"`)
        .then((response) => {
          setPages(Object.keys(response.data));
          console.log(response.data);
          setInfo(response.data);
        });
    } else {
      await axiosInfo.get(`/quotes/.json`).then((response) => {
        setPages(Object.keys(response.data));
        console.log(response.data);
        setInfo(response.data);
      });
    }
  };

  const reloadPage = (text: string) => {
    setSelectPage(text);
    getInfo();
    setSelectContent(Object.values(info)[Pages.indexOf(text)].content);
  };

  useEffect(() => {
    getInfo();
  }, [status, props]);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>List of Posts</h1>
          <NavList />
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
