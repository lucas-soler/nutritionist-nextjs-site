import Header from "../components/Header";

export default function Home() {
  function handleClick() {
    alert("Clicked");
  }

  return (
    <main>
      <Header />
    </main>
  );
}
