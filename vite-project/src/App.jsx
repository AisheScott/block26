import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>{selectedContactId ? 
    <div> <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} /> </div> 
    : <ContactList setSelectedContactId={setSelectedContactId}/>}</>
  );
}

export default App;
