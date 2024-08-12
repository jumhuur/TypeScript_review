import ExamBoday from "./ExamBody";
import Quations from "../Data/Quations.json";
import { useEffect, useState } from "react";
import Result from "./Result";
const ExamContainer = () => {
  interface QuationTypes {
    QuId: number;
    Quation: string;
    Answers: string[];
    CorectAnswer: number;
  }
  const [QId, setQId] = useState<number>(1);
  const [Quation, setQuation] = useState<QuationTypes>();
  const [InProgress, setInProgress] = useState<number>(0);

  const GetOneQuation = () => {
    setQId(QId + 1);
    const suaal = Quations.filter((QuationOne) => {
      return QuationOne.QuId === QId;
    });
    const [ObjectQuation]: QuationTypes[] = suaal;
    setQuation(ObjectQuation);
    // console.log("setka", Quation);
    //console.log("setka", ObjectQuation);
  };

  const CheckAnswer = (index: number) => {
    if (index === Quation?.CorectAnswer) {
      setInProgress(InProgress + 1);
      console.log("sax", InProgress);
    }
  };

  useEffect(() => {
    GetOneQuation();
  }, []);

  return (
    <>
      <div className="container">
        {Quation ? (
          <ExamBoday
            Quation={Quation.Quation}
            Answers={Quation.Answers}
            QuId={Quation.QuId}
            CorectAnswer={Quation.CorectAnswer}
            GetOneQuation={GetOneQuation}
            CheckAnswer={CheckAnswer}
          />
        ) : (
          <>
            <Result InProgress={InProgress} />
          </>
        )}
      </div>
    </>
  );
};

export default ExamContainer;
