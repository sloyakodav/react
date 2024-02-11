import UserContainer from "./userContainer";

UserContainer;
const NavLinks = (max) => {
  // login({ name: "selma" });
  const name = max.name;
  const login = max.login;

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
      <UserContainer login={login} user={name} />
    </div>
  );
};
export default NavLinks;
