import Navbar from "../Navbar";
import BrightFutureSection from "./BrightFutureSection";
import DetailSections from "./DetailSections";

const detailSectionData = [
  {
    imgUrl: "/assets/images/professional-profile.png",
    heading: "Build Your most Professional Profile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgOrderRight: true,
    background: "/assets/backgrounds/home-bg.png",
    imgWidth: "764px",
    imgHeight: "576px",
    paddingSmall: "20px",
    paddingMedium: "40px",
    paddingLarge: "254px 40px 20px 40px",
  },
  {
    imgUrl: "/assets/images/confidence-level.png",
    heading: "Improve your Confidence level that helps in Interviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColorWhite: false,
    imgOrderRight: false,
    imgWidth: "",
    imgHeight: "",
    paddingSmall: "20px",
    paddingMedium: "40px",
    paddingLarge: "168px 40px 0 40px",
  },
  {
    imgUrl: "/assets/images/job-description.png",
    heading: "Match your Profile and Skills with the job description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColorWhite: true,
    imgOrderRight: true,
    imgWidth: "",
    imgHeight: "",
    paddingSmall: "20px",
    paddingMedium: "40px",
    paddingLarge: "78px 0 0 40px",
  },
  {
    imgUrl: "/assets/images/practice-answering.png",
    heading: "Practice answering questions asked in Interviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColorWhite: false,
    imgOrderRight: false,
    imgWidth: "",
    imgHeight: "",
    paddingSmall: "20px",
    paddingMedium: "40px",
    paddingLarge: "88px 40px 57px 40px",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div>
        {detailSectionData.map((data) => {
          return (
            <DetailSections
              imgUrl={data.imgUrl}
              heading={data.heading}
              description={data.description}
              sectionAlignment={data.imgOrderRight}
              bgColorWhite={data.bgColorWhite}
              background={data.background}
              imgWidth={data.imgWidth}
              imgHeight={data.imgHeight}
              paddingSmall={data.paddingSmall}
              paddingMedium={data.paddingMedium}
              paddingLarge={data.paddingLarge}
            />
          );
        })}
      </div>

      <BrightFutureSection
        imgUrl={"/assets/images/bright-future.png"}
        heading={"Start building your steps to the Bright Future"}
        bgColorWhite={false}
        imgWidth={""}
        imgHeight={""}
      ></BrightFutureSection>
    </div>
  );
};

export default HomePage;
