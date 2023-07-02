import { useEffect, useState } from "react";

import axiosInfo from "../../components/GetInfo/axiosInfo";
import BasicModal from "../UI/Modal/Modal";

interface Props {
  name: string;
  status: (status: boolean) => void;
}
export default function BlockPost(props: Props) {
  const [data, setData] = useState({});
  const getInfo = async () => {
    await axiosInfo.get(`/quotes/${props.name}.json`).then((response) => {
      setData(response.data);
    });
  };
  const removeInfo = async () => {
    props.status(false);
    await axiosInfo.delete(`/quotes/${props.name}.json`).then((response) => {});
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
              <div className="block-post">
                <div className="disctiption">
                  <div>Автор :{data.author}</div>
                  <div>Текст : {data.text}</div>
                </div>
                <div className="buttons">
                  <BasicModal
                    text={data.text}
                    author={data.author}
                    category={data.category}
                    name={props.name}
                    status={props.status}
                  />
                  <button onClick={removeInfo}>Удалить</button>{" "}
                </div>
              </div>
            </>
          );
        } else {
          return <div></div>;
        }
      })()}
    </>
  );
}
