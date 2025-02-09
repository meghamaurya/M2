import React, { useState } from "react";
import { SocialLinks } from "./login-form-type";
import InputComponent from "../../../SharedComponents/Input/input";

const socialLinks: SocialLinks[] = [
  {
    name: "Google",
    img: "assets/icons/twitter-white.svg",
    link: "/assets/icons/google.svg",
  },
  {
    name: "Facebook",
    img: "assets/icons/facebook-white.svg",
    link: "/assets/icons/facebook.svg",
  },
  {
    name: "Linkedin",
    img: "assets/icons/linkedin-white.svg",
    link: "/assets/icons/linkedIn.svg",
  },
];

export const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (name: string, value: string) => {
    switch (name) {
      case "email":
        setEmailValue(value);
        break;

      case "password":
        setPasswordValue(value);
        break;

      default:
        console.error(`unexpected input field: ${name}`);
    }
  };

  return (
    <div>
      <div className="input-fields">
        <InputComponent
          formControlName={"email"}
          inputType={"email"}
          placeholder="Email ID or Phone Number"
          onChange={handleInputChange}
        />
        <InputComponent
          formControlName={"password"}
          inputType={"password"}
          placeholder="Password"
          onChange={handleInputChange}
        />
      </div>

      <div>or connect with</div>

      <div>
        {socialLinks.map((item) => {
          return (
            <a href={item.link} target="blank">
              <img src={item.img} alt={item.name} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
