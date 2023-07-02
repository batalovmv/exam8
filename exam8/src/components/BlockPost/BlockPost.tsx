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
    axiosInfo.get(`/quotes/${props.name}.json`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  const removeInfo = () => {
    axiosInfo.delete(`/quotes/${props.name}.json`).then((response) => {
      console.log(response.data);
      props.status(false);
    });
  };

  useEffect(() => {
    getInfo();
  }, [props]);
  return (
    <>
      <div>Время :{data.author}</div>
      <div>Заглавление : {data.text}</div>
      <BasicModal
        text={data.text}
        author={data.author}
        category={data.category}
        name={props.name}
      />
      <NavLink to={`/edit`} className="site-title">
        <button>Редактировать</button>
      </NavLink>
      <button onClick={removeInfo}>Удалить</button>
    </>
  );
}
