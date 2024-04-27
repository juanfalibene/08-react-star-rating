import Stars from "./Stars";

function App() {
  const defaultRating = localStorage.getItem("starRating");
  return (
    <div>
      <Stars iconSize={40} icon='☆' color='red' defaultRating={defaultRating} />
    </div>
  );
}

export default App;
