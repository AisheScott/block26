import React from "react";
import { useState } from "react";
import { useEffect } from "react"; 

const api = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

function SelectedContact ({ setSelectedContactId, contact }) {

  const [contact, setContact] = useState(null);

  useEffect(() => {
      async function fetchContact() {
        try {
          const response = await fetch(`${api}${selectedContactId}`);
          const json = await response.json();
          console.log("Response: ", json);
  
          setContacts(json);
          console.log("State: ", contacts);
        } catch (error) {
          console.log("Error in fetchContacts", error);
        }
      }
      fetchContacts();
    }, []);

  return (
    <></>
  )
}

export default SelectedContact;