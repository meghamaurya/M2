import "./bright-future.scss";
import { Link } from "react-router-dom";

export interface brightFuturePropsInterface {
  imgUrl: string;
  heading: string;
  imgWidth: string;
  imgHeight: string;
  sectionAlignment?: boolean;
  bgColorWhite?: boolean;
  background?: string;
  paddingSmall?: string;
  paddingMedium?: string;
  paddingLarge?: string;
}

const tabList = [
  {
    id: 1,
    name: "About us",
    link: "",
  },
  {
    id: 2,
    name: "Contect us",
    link: "",
  },
  {
    id: 3,
    name: "User Agreement",
    link: "",
  },
  {
    id: 4,
    name: "Privacy Policy",
    link: "",
  },
  {
    id: 5,
    name: "Copyrights",
    link: "",
  },
];
const BrightFutureSection = ({
  imgUrl,
  heading,
  paddingSmall,
  paddingMedium,
  paddingLarge,
}: brightFuturePropsInterface) => {
  return (
    <section
      className="detail-sec"
      style={
        {
          "--padding-sm": paddingSmall,
          "--padding-md": paddingMedium,
          "--padding-lg": paddingLarge,
        } as React.CSSProperties
      }
    >
      <div className="content">
        <div className="text-content">
          <h3>{heading}</h3>
          <button className="btn">Get Started</button>
        </div>
        <div className="image-content">
          <img src={imgUrl} alt="Bright Future" className="img" />
        </div>
      </div>
      <div className="links">
        {tabList.map(({ id, name, link }) => (
          <Link key={id} to={link}>
            {name}
          </Link>
        ))}
      </div>
      <footer className="footer">
        <p>Ugaan @ 2021 &nbsp; All copyrights issued</p>
      </footer>
    </section>
  );
};

export default BrightFutureSection;
