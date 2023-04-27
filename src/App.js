export const App = () => {
  return (
    <div>
      <div className="app-container">
        <div className="app-side-bar">
          <aside className="app-side-nav">Aside</aside>
        </div>
        <div className="app-content-container">
          <header className="app-header">
            <nav className="app-top-navigation">Navigation header</nav>
          </header>
          <main className="app-main-container">Main</main>
          <footer className="footer-container">Footer</footer>
        </div>
      </div>
    </div>
  );
};

export default App;
