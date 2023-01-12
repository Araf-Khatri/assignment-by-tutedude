import CoursesEnrolled from "../components/courses-enrolled-by-friends/courses-enrolled";
import FrView from "../components/fr-page--referral-code/fr-view";
import Section from "../components/section";

const FriendsReffered = () => {
  return (
    <Section>
      <FrView text={"EDCH54"} />
      <CoursesEnrolled />
    </Section>
  );
};

export default FriendsReffered;
