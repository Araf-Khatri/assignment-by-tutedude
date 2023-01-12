import "./referralcode.css";

const ReferralCode = ({ text, children, className='', sectionClass='' }) => {
  const words = [];
  for (let i = 0; i < text.length; i++) {
    words[i] = text[i].toUpperCase();
  }
  return (
    <div className={`referral-code--section ${sectionClass}`}>
      {children}
      <div className={className}>
        {words.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  );
};

export default ReferralCode;
