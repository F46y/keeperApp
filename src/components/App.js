import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";



function App() {
  return (
    <div>
      <Header />
      {notes.map(n => <Note
          key = {n.key}
          title={n.title}
          text={n.content}
        />)}
      <Footer />
    </div>
  );
}

export default App;
