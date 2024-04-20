import { NextRequest } from "next/server";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Design and development of end-to-end web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). Creating interactive, high-performance, and scalable web solutions.",
    icon: "🔧",
  },
  {
    title: "Single-Page Applications (SPAs)",
    description:
      "Building dynamic and responsive SPAs using React for enhanced user experience. Implementing efficient state management using Redux or Context API.",
    icon: "📱",
  },
  {
    title: "RESTful API Development",
    description:
      "Designing and developing robust APIs with Express.js and Node.js. Ensuring secure data exchange and integration with front-end applications.",
    icon: "🔗",
  },
  {
    title: "Database Management",
    description:
      "Setting up and managing NoSQL databases using MongoDB. Data modeling, indexing, and optimization for efficient querying.",
    icon: "🗃️",
  },
  {
    title: "User Authentication and Authorization",
    description:
      "Implementing secure user authentication using JSON Web Tokens (JWT) and OAuth. Managing user roles and permissions for data access control.",
    icon: "🔒",
  },
  {
    title: "Real-Time Applications",
    description:
      "Building real-time features such as chat applications or live notifications using WebSocket. Integration of real-time data updates with front-end applications.",
    icon: "💬",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed and performance. Implementing best practices for code quality and efficiency.",
    icon: "⚡",
  },
  {
    title: "Code Quality and Testing",
    description:
      "Writing clean, maintainable code with proper documentation. Implementing unit and integration tests for application reliability.",
    icon: "✔️",
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensuring web applications are fully responsive and accessible on all devices. Utilizing CSS frameworks and media queries for adaptive layouts.",
    icon: "📱💻",
  },
  {
    title: "Consultation and Strategy",
    description:
      "Providing expert advice on MERN stack projects and architecture. Assisting clients with planning and implementation of web applications.",
    icon: "💡",
  },
];

export async function GET(request: NextRequest) {
  return Response.json({ data: services });
}
