
import { useState } from "react";
import { useEffect } from "react";
import axiosInfo from "../../components/GetInfo/ axiosInfo";
import { NavLink } from "react-router-dom";
interface Props {
  text: string,
  data: string,
  title: string,
  name:string
}
export default function Edit(props:Props) {
  const [info, setInfo] = useState([]);
  const [selectTitle, setSelectTitle] = useState(props.title);
  const [selectContent, setSelectContent] = useState(props.text);
  const [Pages, setPages] = useState([]);


  const putInfo = () => {
    axiosInfo.put(`/posts/${props.name}.json`, {
      content: selectContent,
      title: selectTitle,
      time: Date.now()
    });
  };


  // useEffect(() => {
  //   getInfo();
  // }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Add posts</h1>
          <textarea
            name={''}
            value={selectTitle}
            rows={4}
            cols={40}
            onChange={(e) => setSelectTitle(e.target.value)}
          />
          <textarea
            name={''}
            value={selectContent}
            rows={4}
            cols={40}
            onChange={(e) => setSelectContent(e.target.value)}
          />

         
            <button type="submit" onClick={putInfo}>
              Обновить данные
            </button>
          
        </div>
      </section>
    </>
  );
}
