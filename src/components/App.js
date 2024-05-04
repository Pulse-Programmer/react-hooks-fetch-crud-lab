import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => alert(error.message));
  }, []);

  if (items.length < 1) {
    return <h1>Loading...</h1>;
  }

  function handlePost(itemData) {
    setItems([...items, itemData]);
  }

  function handleDeleteUpdate(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleUpdate(updatedItem) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else return item;
    });

    setItems(updatedItems);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onHandlePost={handlePost} />
      ) : (
        <QuestionList
          items={items}
          onUpdateDelete={handleDeleteUpdate}
          onHandleUpdate={handleUpdate}
        />
      )}
    </main>
  );
}

export default App;
