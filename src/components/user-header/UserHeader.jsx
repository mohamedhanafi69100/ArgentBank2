import React, { useState, useRef, useEffect } from "react";
import EditName from "../edit-name/EditName";

const UserHeader = () => {
  const [userName, setUserName] = useState("roger");
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSaveName = (newName) => {
    setUserName(newName);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="user-header">
      <h1>
        Welcome back <br />
        {userName}!
      </h1>
      <button className="edit-button" onClick={toggleCollapse}>
        Edit Name
      </button>

      <div
        className="user-editor-content-wrapper"
        style={{ height: `${height}px` }}
      >
        <div className="user-editor-content" ref={contentRef}>
          <EditName
            currentUserName={userName}
            onSave={handleSaveName}
            cancel={toggleCollapse}
          />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
