import { Helmet } from "react-helmet";
import { Announcements, AboutCompany } from "../../components/elements";
import { Navbar, Newsletter, Footer } from "../../components/templates";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Cat Adoption | About Us</title>
      </Helmet>
      <Announcements />
      <Navbar />
      <AboutCompany />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
