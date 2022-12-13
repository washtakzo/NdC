import React from "react";
import QuestionAnswer from "../QuestionAnswer";
import IndexContent from "../../Content/IndexContent";

const QuestionsSection = () => {
  return (
    <section className="md:flex md:justify-around border-[1px] border-black md:border-t-0">
      {IndexContent.questionsAnswers.map((qa) => (
        <QuestionAnswer
          key={qa.question}
          question={qa.question}
          answer={qa.answer}
        />
      ))}
    </section>
  );
};

export default QuestionsSection;
