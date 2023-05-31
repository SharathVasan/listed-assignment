// Dependencies import
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";

// Local imports
import DashboardIcon from "../../assets/icons/dashboard.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import TransactionIcon from "../../assets/icons/transaction.svg";
import UsersIcon from "../../assets/icons/user.svg";
import SchedulingIcon from "../../assets/icons/schedule.svg";
import SearchIcon from "../../assets/icons/searchicon.svg";
import BellIcon from "../../assets/icons/bellicon.svg";
import TotalRevenueIcon from "../../assets/icons/totalrevenue.svg";
import TotalTransactionIcon from "../../assets/icons/totaltransaction.svg";
import TotalUserIcon from "../../assets/icons/totaluser.svg";
import TotalLikesIcon from "../../assets/icons/totallikes.svg";
import { userState } from "../../recoil/atoms/userState";
import { profileState } from "../../recoil/atoms/profileState";
import LineChart from "../../charts/LineChart";
import PieChart from "../../charts/PieChart";

// Style imports
import Dash from "./Dashboard.module.scss";

const navigationList = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Transactions",
    icon: TransactionIcon,
  },
  {
    title: "Schedules",
    icon: SchedulingIcon,
  },
  {
    title: "Users",
    icon: UsersIcon,
  },
  {
    title: "Settings",
    icon: SettingsIcon,
  },
];

const topCardsData = [
  {
    icon: TotalRevenueIcon,
    heading: "Total Revenues",
    value: "$2,129,430",
    background: "#DDEFE0",
  },
  {
    icon: TotalTransactionIcon,
    heading: "Total Transactions",
    value: "1,520",
    background: "#F4ECDD",
  },
  {
    icon: TotalLikesIcon,
    heading: "Total Likes",
    value: "9,721",
    background: "#F4ECDD",
  },
  {
    icon: TotalUserIcon,
    heading: "Total Users",
    value: "892",
    background: "#DEE0EF",
  },
];

const scheduleList = [
  {
    title: "Meeting width suppliers from Kuta Bali",
    time: "14.00-15.00",
    venue: "at Sunset Road, Kuta, Bali",
    sidecolor: "#9BDD7C",
  },
  {
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    venue: "at Central Jakarta",
    sidecolor: "#6972C3",
  },
];

const Dashboard = () => {
  const [user, setUser] = useRecoilState(userState);
  const [profile, setProfile] = useRecoilState(profileState);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
    //eslint-disable-next-line
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile([]);
    setUser([]);
  };

  return (
    <div className={Dash.maincontainer}>
      <div className={Dash.leftsidebar}>
        <h1 className={Dash.boardheading}>Board.</h1>
        <div className={Dash.navlinksholder}>
          {navigationList.map((value, i) => {
            return (
              <div className={Dash.linkholder}>
                <img className={Dash.link} src={value.icon} alt="" />
                <h3 className={Dash.linktext}>{value.title}</h3>
              </div>
            );
          })}
        </div>
        <div className={Dash.contactusholder}>
          <h3 className={Dash.helptext}>Help</h3>
          <h3 className={Dash.helptext}>Contact Us</h3>
        </div>
      </div>
      <div className={Dash.rightdashboard}>
        <div className={Dash.topbar}>
          <h2 className={Dash.heading}>Dashboard</h2>
          <div className={Dash.righticonsholder}>
            <div className={Dash.searchbar}>
              <input
                type="text"
                placeholder="Search..."
                className={Dash.searchtext}
              />
              <img
                className={Dash.searchicon}
                src={SearchIcon}
                alt="searchicon"
              />
            </div>
            <img className={Dash.bellicon} alt="bellicon" src={BellIcon} />
            <img
              className={Dash.usericon}
              onClick={() => logOut()}
              alt="usericon"
              src={profile.picture}
            />
          </div>
        </div>
        <div className={Dash.cardsholder}>
          {topCardsData.map((value, i) => {
            return (
              <div
                className={Dash.individualcard}
                style={{ background: value.background }}
              >
                <div className={Dash.iconholder}>
                  <img
                    src={value.icon}
                    alt={value.heading}
                    className={Dash.cardicon}
                  />
                </div>
                <h3 className={Dash.cardtitle}>{value.heading}</h3>
                <h4 className={Dash.cardvalue}>{value.value}</h4>
              </div>
            );
          })}
        </div>
        <div className={Dash.chartholder}>
          <h3 className={Dash.maincardhead}>Activities</h3>
          <select className={Dash.selectoption}>
            <option className={Dash.options}>May - June 2021</option>
            <option className={Dash.options}>June - July 2021</option>
          </select>
          <LineChart />
        </div>
        <div className={Dash.bottomcardsholder}>
          <div className={Dash.piechartholder}>
            <div className={Dash.topcardbar}>
              <h3 className={Dash.maincardhead}>Top products</h3>
              <select className={Dash.selectoptionright}>
                <option className={Dash.options}>May - June 2021</option>
                <option className={Dash.options}>June - July 2021</option>
              </select>
            </div>
            <PieChart />
          </div>
          <div className={Dash.scheduleholder}>
            <div className={Dash.topcardbar}>
              <h3 className={Dash.maincardhead}>Todays schedule</h3>
              <h4 className={Dash.seeall}>See all ﹥</h4>
            </div>
            <div className={Dash.schedulesholder}>
              {scheduleList.map((value, i) => {
                return (
                  <div
                    className={Dash.individualscheduleholder}
                    style={{ borderColor: value.sidecolor }}
                  >
                    <h3 className={Dash.meetinghead}>{value.title}</h3>
                    <h4 className={Dash.meetingtime}>{value.time}</h4>
                    <h5 className={Dash.meetingvenue}>{value.venue}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
