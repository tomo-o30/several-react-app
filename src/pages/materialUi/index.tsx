import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import styles from "./index.module.scss";

const MatelialUi = () => {
  return (
    <div>
      <div>material ui icon利用サンプル一覧</div>
      <div className={styles.displayIcons}>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>ExpandMore</div>
          <div className={styles.icon}>
            <ExpandMoreIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Add</div>
          <div className={styles.icon}>
            <AddIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Mic</div>
          <div className={styles.icon}>
            <MicIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Headphones</div>
          <div className={styles.icon}>
            <HeadphonesIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Settings</div>
          <div className={styles.icon}>
            <SettingsIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>AccountCircle</div>
          <div className={styles.icon}>
            <AccountCircleIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Notifications</div>
          <div className={styles.icon}>
            <NotificationsIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>PushPin</div>
          <div className={styles.icon}>
            <PushPinIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>PeopleAlt</div>
          <div className={styles.icon}>
            <PeopleAltIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Search</div>
          <div className={styles.icon}>
            <SearchIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Send</div>
          <div className={styles.icon}>
            <SendIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
        <div className={styles.displayIcon}>
          <div className={styles.iconName}>Help</div>
          <div className={styles.icon}>
            <HelpIcon className={styles.muiSvgIconRoot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatelialUi;
