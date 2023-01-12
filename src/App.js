import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation-bar/navbar";
import MainView from "./page/main-view";
import FriendsReffered from "./page/friends-referred";

const App = () => {
  const cardText = [
    {
      heading: "Referral Earning",
      text: "₹ 2,500",
      className: "",
    },
    {
      heading: "Total Referrals",
      text: "7",
      className: "cardtext--align-end ",
    },
    {
      heading: "Wallet Balance",
      text: "₹ 500",
      className: "",
    },
  ];

  const howDoesItWork = [
    {
      icon: "invite-friends",
      heading: "Invite your Friends",
      description: "Share the link tutedude.com with your friends",
    },
    {
      icon: "referral-coupon",
      heading: "Friend purchases any course",
      description: "Using you REFERRAL CODE in the payments page",
    },
    {
      icon: "rupee",
      heading: "You get ₹ 200 as referral money",
      description:
        "Of total purchase the friend makes sharebale to your wallet",
    },
    {
      icon: "discount",
      heading: "Your Friend gets ₹ 200 Off",
      description:
        "On his overall fee on successful purchase using your referral code ",
    },
    {
      icon: "wallet",
      heading: "Transfer money from wallet",
      description:
        "When the wallet balance reaches ₹200 or more, you can withdraw it",
    },
  ];

  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <MainView howDoesItWork={howDoesItWork} cardText={cardText} />
            }
          />

          <Route path="/friends-referred" element={<FriendsReffered />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Navbar>
    </div>
  );
};

export default App;
