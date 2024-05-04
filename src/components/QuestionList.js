import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ items, onUpdateDelete, onHandleUpdate }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {items.map((question) => {
          return (
            <QuestionItem
              key={question.id}
              question={question}
              onUpdateDelete={onUpdateDelete}
              onHandleUpdate={onHandleUpdate}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
