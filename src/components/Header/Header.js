import { Head } from "./Header.styles";

const Header = ({list}) => {
  return (
    <Head>
      <h1 className="title">Todo list</h1>
      <p>Количество заданий {list.length}</p>
    </Head>
  );
};

export default Header;
