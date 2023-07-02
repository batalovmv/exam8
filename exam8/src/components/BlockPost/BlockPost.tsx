import { useEffect, useState } from "react";

import axiosInfo from "../../components/GetInfo/axiosInfo";
import BasicModal from "../UI/Modal/Modal";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  status: any;
}
export default function BlockPost(props: Props) {
  const [data, setData] = useState({});
  const getInfo = () => {
    axiosInfo.get(`/posts/${props.name}.json`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  const removeInfo = () => {
    axiosInfo.delete(`/posts/${props.name}.json`).then((response) => {
      console.log(response.data);
      props.status(false);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <div>Время :{data.time}</div>
      <div>Заглавление : {data.title}</div>
      <BasicModal text={data.content} title={data.title} />
      <NavLink to={`/edit`} className="site-title">
        <button>Редактировать</button>
      </NavLink>
      <button onClick={removeInfo}>Удалить</button>
    </>
  );
}
