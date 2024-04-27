import Stars from "./Stars";

function App() {
  const defaultRating = localStorage.getItem("starRating");
  return (
    <div>
      <Stars iconSize={40} defaultRating={defaultRating} />
    </div>
  );
}

export default App;
