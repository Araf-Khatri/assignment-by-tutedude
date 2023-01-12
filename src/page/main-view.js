import { Fragment } from "react";
import BalanceCard from "../components/balance-card/balance-card";
import Section from "../components/section";
import CardText from "../components/balance-card/card-text";
import ReferralCode from "../components/referral-code-view/referralcode";
import HeadingText from "../components/heading-text";
import HowItWorks from "../components/how-does-it-works/how-it-works";

const MainView = ({ cardText, howDoesItWork }) => {
  return (
    <Fragment>
      <Section className="user-balance ">
        <BalanceCard>
          {cardText.map(({ heading, text, className }, i) => (
            <CardText
              key={i}
              className={className}
              heading={heading}
              text={text}
            />
          ))}
          <button className="withdraw-balance--btn">Withdraw Balance</button>
        </BalanceCard>

        <ReferralCode text={"EDCH54"} className={"referral-code"}>
          <HeadingText text={"Your Referral Code"} />
        </ReferralCode>
      </Section>

      <Section className="how-does-it-work--section ">
        <HeadingText text={"How does it work ?"} />
        <div className="how-does-it-work--steps">
          {howDoesItWork.map(({ icon, heading, description }, i) => (
            <HowItWorks
              key={i}
              icon={icon}
              heading={heading}
              description={description}
            />
          ))}
        </div>
      </Section>

    </Fragment>
  );
};
export default MainView;
