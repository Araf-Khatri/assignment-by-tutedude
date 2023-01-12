import "./course-info.css";

const CourseInfo = ({
  data: { date, name, enrolledCourses, technologies, amount },
}) => (
  <div className="course-card">
    <div className="enroll">
      <p className="friend-name">{name}</p>
      <p className="enroll-date">{date}</p>
    </div>
    <div className="total-courses">
      <p className="courses-heading">Courses Enrolled({enrolledCourses})</p>
      <div className="technologies">
        {technologies.map((tech, i) => (
          <div key={i} className="technology">
            <p className="tech-name">{tech}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="amount">
      <p>Referral Amount </p>
      <h2>₹{amount}</h2>
    </div>
  </div>
);

export default CourseInfo;
