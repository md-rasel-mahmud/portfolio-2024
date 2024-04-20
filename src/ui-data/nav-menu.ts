export const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Login",
    path: "/auth/login",
  },
  {
    label: "Sigh Up",
    path: "/auth/signup",
  },
  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Service 1",
        path: "/service-1",
      },
      {
        label: "Service 2",
        path: "/service-2",
      },
      {
        label: "Service 3",
        path: "/service-3",
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
