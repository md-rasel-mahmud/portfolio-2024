import Link from "next/link";
import { BiDownload, BiRightArrow } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { ImOffice } from "react-icons/im";

const Intro = () => {
  const subInfos = [
    {
      icon: <ImOffice />,
      text: "Shunno-IT",
    },
    {
      icon: <FaPhoneAlt />,
      text: "+880 1728 140 505",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Rajshahi, Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      link: "mailto:md.rasel.mahmud.mail@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mdraselmahmuddev/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/md-rasel-mahmud",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/MdRaselMahmudDev",
    },
  ];

  return (
    <div className="bg-base-200/50 p-5 rounded-lg -mt-10 pt-10 text-center flex flex-col gap-1">
      <article className="prose prose-headings:uppercase prose-headings:text-xl lg:prose-headings:text-3xl prose-headings:font-light prose-headings:text-accent prose-headings:mb-0">
        <h1>MD. RASEL MAHMUD</h1>
        <p className="mt-1 leading-5">
          Web Developer | Front-End Developer | Junior MERN Stack Developer
        </p>
      </article>

      <div className="divider my-1 lg:my-3"></div>

      <div className="flex  md:flex-row justify-between items-center gap-2">
        <div>
          {subInfos.map((subInfo, index) => (
            <small key={index} className="flex items-center gap-2">
              {subInfo.icon}
              <span>{subInfo.text}</span>
            </small>
          ))}

          <div className=" lg:hidden join mt-2">
            <a
              href="https://drive.google.com/file/d/1gF9uAvoZJ271yhYU1bv0W_gHMq8VzEan/view?usp=drive_link"
              target="_blank"
              referrerPolicy="no-referrer"
              className="join-item btn bg-success/20 gap-1 hover:bg-success hover:text-green-950 text-success btn-sm shadow-lg"
            >
              <BiDownload /> Resume
            </a>
            <Link
              href="/contact"
              className="join-item btn bg-success/20 gap-1 hover:bg-success hover:text-green-950 text-success btn-sm shadow-lg"
            >
              Hire me <BiRightArrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-2 items-center lg:items-end">
          <div className="join join-vertical lg:join-horizontal">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className="join-item btn btn-sm border-neutral btn-outline shadow-lg"
              >
                {socialLink.icon}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex join">
            <a
              href="https://drive.google.com/file/d/1gF9uAvoZJ271yhYU1bv0W_gHMq8VzEan/view?usp=drive_link"
              target="_blank"
              referrerPolicy="no-referrer"
              className="join-item btn bg-success/20 gap-1 hover:bg-success hover:text-green-950 text-success btn-sm shadow-lg"
            >
              <BiDownload /> Resume
            </a>
            <Link
              href="/contact"
              className="join-item btn bg-success/20 gap-1 hover:bg-success hover:text-green-950 text-success btn-sm shadow-lg"
            >
              Hire me <BiRightArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
