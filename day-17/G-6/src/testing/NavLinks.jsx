import UserContainer from "./userContainer";

UserContainer;
const NavLinks = () => {
  const FLex = {
    display: "flex",
    gap: "1rem",
  };
  return (
    <div className="nav-container">
      <ul style={FLex} className="navLinks">
        <li>
          <a href="#">home</a>
        </li>{" "}
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;
