import "./section.css";

const Section = ({ children, className='' }) => {
  return <div className={`${className}section`}>{children}</div>;
};

export default Section;
