import logo from "../../assets/logo-dmseta.svg";
import "./styles.css";
export const Header = () => {
  return (
    <header className="dsmeta-logo-container">
      <img src={logo} alt="DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por{" "}
        <a href="https://www.instagram.com/mogly_lima/">@mogly_lima</a>
      </p>
    </header>
  );
};
