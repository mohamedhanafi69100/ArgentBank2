import React, { useState } from "react";

const EditName = ({ currentUserName, onSave, cancel }) => {
  const [newUserName, setNewUserName] = useState(currentUserName);
  const [firstName, setFirstName] = useState("Tony"); // valeur exemple
  const [lastName, setLastName] = useState("Stark");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newUserName); // on transmet le nouveau nom
    cancel(); // referme l'éditeur
  };

  return (
    <form className="edit-name-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">User name:</label>
        <input
          id="username"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstname">First name:</label>
        <input
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastname">Last name:</label>
        <input
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" className="cancel-button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
