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
  const getInfo = async () => {
    await axiosInfo.get(`/quotes/${props.name}.json`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  const removeInfo = async () => {
    props.status(false);
    await axiosInfo.delete(`/quotes/${props.name}.json`).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getInfo();
  }, [props]);
  return (
    <>
      {(() => {
        if (data) {
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
              <NavLink to={`/`} className="site-title">
                <button onClick={removeInfo}>Редактировать</button>
              </NavLink>
              <button onClick={removeInfo}>Удалить</button>
            </>
          );
        } else {
          return <div></div>;
        }
      })()}
    </>
  );
}
