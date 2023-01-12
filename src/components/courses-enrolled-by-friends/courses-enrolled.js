import { Fragment } from "react";
import CourseInfo from "../course-info/course-info";
import "./courses-enrolled.css";

const CoursesEnrolled = () => {
  const totalCoursesEnrolled = [
    {
      date: "14 Sep, 2022",
      name: "Dhiraj Saxsena",
      enrolledCourses: 6,
      technologies: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
      ],
      amount: 185,
    },
    {
      date: "15 Sep, 2022",
      name: "Subhash Mishra",
      enrolledCourses: 23,
      technologies: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "Javascript",
        "Lorem",
        "Python3",
        "UI/UX",
        "Java",
        "MERN",
        "Ruby",
        "MongoDB",
        "Express",
        "React",
        "NodeJS",
        "MERN",
      ],
      amount: 485,
    },
    {
      date: "16 Sep, 2022",
      name: "Prafull Kumar",
      enrolledCourses: 23,
      technologies: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "Javascript",
        "Lorem",
        "Python3",
        "UI/UX",
        "Java",
        "MERN",
        "Ruby",
        "MongoDB",
        "Express",
        "React",
        "NodeJS",
        "MERN",
      ],
      amount: 485,
    },
  ];

  return (
    <Fragment>
      <div className="courses--section--heading">
        <p className="course-heading">Friends who Enrolled</p>
        <span className="total-courses-enrolled">
          ({totalCoursesEnrolled.length})
        </span>
      </div>
      <div className="courses--section">
        <div className="courses">
          {totalCoursesEnrolled.map((dataObj, i) => {
            console.log(dataObj);
            return <CourseInfo key={i} data={dataObj} />;
          })}
        </div>
        <div
          className="abso-div"
        ></div>
      </div>
    </Fragment>
  );
};

export default CoursesEnrolled;
