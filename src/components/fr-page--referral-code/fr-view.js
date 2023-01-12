import CardText from "../balance-card/card-text";
import ReferralCode from "../referral-code-view/referralcode";
import "./fr-view.css";

const FrView = ({ text }) => {
  return (
    <div className="frview-section">
      <ReferralCode
        text={text}
        className={"fr-page-code"}
        sectionClass={"rm-margin"}
      >
        <p className="frview-referral--p">Your Referral Code</p>
      </ReferralCode>
      <div className="fr--balance-card">
        <CardText
          heading={"Wallet Balance"}
          text={"₹ 500"}
          textStyle={"fr-text"}
          className={"fr--card "}
        />
      </div>
    </div>
  );
};

export default FrView;
