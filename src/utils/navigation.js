const getNavigation = (user) => {

  const authLinks = [
    {
      title: "Dashboard",
      link: "/dashboard"
    },
    {
      title: "Articles",
      link: "/articles"
    },
    {
      title: "Add your article",
      link: "/articles/new"
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`
    }
  ];

  const guestLinks = [
    {
      title: "Dashboard",
      link: "/dashboard"
    },
    {
      title: "Price Plans",
      link: "/plans"
    }
  ];
  const loggedIn = user && user.loggedIn;
  return loggedIn ? authLinks : guestLinks;
};

export default getNavigation