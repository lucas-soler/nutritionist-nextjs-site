interface HeaderProps {
  title: string;
}

async function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

export default Header;
