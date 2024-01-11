import "./style.css";

function App() {
  const appTitle = "Fun Facts App";
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="Fun Facts App Logo" />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter /> {/* Corrected the function name */}
        <FactList />
      </main>
    </>
  );
}
function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  /* Corrected the function name */
  return <aside>Category filter</aside>;
}
function FactList() {
  return <section>Facts list</section>;
}

export default App;
