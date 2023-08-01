interface HeaderProps {
  title: string;
}

async function Header({ title }: HeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{title}</h2>
      <h3>{title}</h3>
      <h4>{title}</h4>
      <h5>{title}</h5>
      <h6>{title}</h6>
    </>
  );
}

export default Header;
