import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Mens Products",
      to: "/mens",
    },
    {
      title: "Womens Products",
      to: "/womens",
    },
    {
      title: "Contact Us",
      to: "/contact-us",
    },
    {
      title: "About Us",
      to: "/about-us",
    },
    {
      title: "FAQ",
      to: "/faq",
    },
    {
      title: "Login",
      to: "/login",
    },
    {
      title: <BsCart3/>,
      to: "/cart",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "yellow", padding: "5px" }}>
        {navItems.map((e, i) => (
          <Link
            key={i}
            to={e.to}
            style={{
              margin: "20px",
              textDecoration: "none",
              fontWeight: "bold",
              color: "red",
            }}
          >
            {e.title}
          </Link>
        ))}
        
      </div>
    </>
  );
};
