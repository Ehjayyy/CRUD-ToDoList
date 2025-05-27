import { useState } from "react";

export const Task = ({ taskName, id, completed, deleteTask, completeTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(taskName);

  const handleEditChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const handleSave = () => {
    if (editedTaskName.trim() !== "") {
      editTask(id, editedTaskName);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          value={editedTaskName}
          onChange={handleEditChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
          }}
          autoFocus
          style={{ flex: 1, marginRight: "10px", padding: "5px", borderRadius: "6px" }}
        />
      ) : (
        <span>{taskName}</span>
      )}

      <div>
        {isEditing ? (
          <button className="completeBtn" onClick={handleSave}>Save</button>
        ) : (
          <button className="completeBtn" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        {!completed && (
          <button className="completeBtn" onClick={() => completeTask(id)}>Complete</button>
        )}
        <button className="deleteBtn" onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
};
