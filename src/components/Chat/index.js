import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import ChatDialog from "../Chat/chatDialog/index";
const Chat = () => {
  const [icon, setIcon] = React.useState(false);

  return (
    <>
      <div className="chat">
        <IconButton
          onClick={() => {
            setIcon(!icon);
          }}
        >
          {icon ? (
            <CloseIcon style={{ color: "#0874ec" }} fontSize="large" />
          ) : (
            <ChatIcon style={{ color: "#0874ec" }} fontSize="large" />
          )}
        </IconButton>
      </div>
      {icon && <ChatDialog updateState={setIcon} />}
    </>
  );
};

export default Chat;
