import "./Posts.css";
import { useState } from "react";
import { useEffect } from "react";
import axiosInfo from "../../components/GetInfo/axiosInfo";
import BlockPost from "../../components/BlockPost/BlockPost";
import { NavList } from "../../navbar";
interface Props {
  category?: string;
}

export default function Posts(props: Props) {
  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState(true);
  const [Pages, setPages] = useState([]);

  const getInfo = () => {
    if (props.category) {
      axiosInfo
        .get(`/quotes.json?orderBy="category"&equalTo="${props.category}"`)
        .then((response) => {
          setPages(Object.keys(response.data));
          setInfo(response.data);
        });
    } else {
      axiosInfo.get(`/quotes/.json`).then((response) => {
        setPages(Object.keys(response.data));
        setInfo(response.data);
      });
    }
  };

  useEffect(() => {
    getInfo();
  }, [info, status]);
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
