import React, { useState } from "react";
import ChannelsList from "./ChannelsList";
import styles from "./MainPage.module.scss";
import Messages from "./Messages";

function MainPage({ userData }) {
  const [currentChannelId, setCurrentChannelId] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.channelsList}>
        <ChannelsList
          token={userData.authToken}
          userId={userData.userId}
          name={userData.me.name}
          setCurrentChannelId={setCurrentChannelId}
          currentChannelId={currentChannelId}
        />
      </div>
      <div className={styles.messages}>
        <Messages
          channelId={currentChannelId}
          token={userData.authToken}
          userId={userData.userId}
        />
      </div>
    </div>
  );
}

export default MainPage;
