import { useState, useEffect, useRef } from "react";
import useStore from "../store";
import { ContactItem } from "./ContactItem";

import GithubLight from "../assets/github-light.webp";
import GithubDark from "../assets/github-dark.webp";
import LinkedinLight from "../assets/linkedin-light.webp";
import LinkedinDark from "../assets/linkedin-dark.webp";
import GmailLight from "../assets/gmail-light.webp";
import GmailDark from "../assets/gmail-dark.webp";

export function Contact() {
  const theme = useStore((state) => state.theme);
  const setContactRef = useStore((state) => state.setContactRef);
  const ref = useRef(null);
  const [contact, setContact] = useState([
    {
      imgSrc: GithubLight,
      link: "github.com/TienThinh-fe",
    },
    {
      imgSrc: LinkedinLight,
      link: "linkedin.com/in/hoang-tien-thinh-663358224",
    },
    {
      imgSrc: GmailLight,
      link: "tienthinhhoang317@gmail.com",
    },
  ]);

  useEffect(() => {
    if (theme === "") {
      setContact([
        {
          imgSrc: GithubLight,
          link: "github.com/TienThinh-fe",
        },
        {
          imgSrc: LinkedinLight,
          link: "linkedin.com/in/hoang-tien-thinh-663358224",
        },
        {
          imgSrc: GmailLight,
          link: "tienthinhhoang317@gmail.com",
        },
      ]);
    } else {
      setContact([
        {
          imgSrc: GithubDark,
          link: "github.com/TienThinh-fe",
        },
        {
          imgSrc: LinkedinDark,
          link: "linkedin.com/in/hoang-tien-thinh-663358224",
        },
        {
          imgSrc: GmailDark,
          link: "tienthinhhoang317@gmai.com",
        },
      ]);
    }
  }, [theme]);

  useEffect(() => {
    setContactRef(ref);
  }, []);

  return (
    <div className="contact" ref={ref}>
      <div className="contact__title">
        <span>Wanna contact me?</span>
        <br />
        <span>Click below links for talking</span>
      </div>
      <div className="contact__links">
        <ul>
          {contact.map((item, index) => (
            <ContactItem key={index} imgSrc={item.imgSrc} link={item.link} />
          ))}
        </ul>
      </div>
    </div>
  );
}
