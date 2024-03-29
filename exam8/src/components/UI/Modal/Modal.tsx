import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Edit from "../../../pages/EditPost/Edit";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  text: string;
  author: string;
  category: string;
  name: string;
  status: (status: boolean) => void;
}

export default function BasicModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Изменить Пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Изменить пост</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Edit
              text={props.text}
              category={props.category}
              author={props.author}
              name={props.name}
              status={props.status}
              onClose={handleClose}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
