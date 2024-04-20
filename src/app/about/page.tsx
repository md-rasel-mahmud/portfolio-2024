const About = () => {
  const aboutMe = [
    {
      field: "Name",
      value: "Md. Rasel Mahmud",
    },
    {
      field: "Email",
      value: "md.rasel.mahmud.mail@gmaiil.com",
    },
    {
      field: "Phone",
      value: "+880 1728 140 505",
    },
    {
      field: "Address",
      value: "Rajshahi, Bangladesh",
    },
    {
      field: "Nationality",
      value: "Bangladeshi",
    },
    {
      field: "Languages",
      value: "Bangla, English, Hindi",
    },
    {
      field: "Hobbies",
      value: "Photography, Traveling, Coding",
    },
    {
      field: "Freelance",
      value: "Available",
    },
    {
      field: "Birthday",
      value: "20th October 2000",
    },
  ];
  return (
    <div>
      <article className="prose prose-blockquote:not-italic prose-headings:my-1 max-w-none">
        <blockquote>
          <h2 className="uppercase text-success">About Me</h2>
        </blockquote>
        <h3>
          Web Developer | Front-End Developer | Junior MERN Stack Developer
        </h3>
        <p>
          Hello There! I&apos;m, Md. Rasel Mahmud Not only I&apos;m a Diploma
          Engineer , But also I&apos;m a MERN Stack Developer । Web developing
          is my passion. That&apos;s why i explore with Full Stack development
          Technology
        </p>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              {aboutMe.map((item) => (
                <tr key={item.field}>
                  <th>{item.field}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default About;
