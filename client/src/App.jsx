import {
  Welcome,
  Navbar,
  Loader,
  Transactions,
  Services,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-creen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
