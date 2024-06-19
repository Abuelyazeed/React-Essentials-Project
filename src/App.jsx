import Header from "./components/Header/Header";
import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
      </main>
    </div>
  );
}

export default App;
