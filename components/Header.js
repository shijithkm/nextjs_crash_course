import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web News</span>
      </h1>
      <p className={headerStyles.description}>
        Keep updatodate with latest dev news{" "}
      </p>
    </div>
  );
};

export default Header;
