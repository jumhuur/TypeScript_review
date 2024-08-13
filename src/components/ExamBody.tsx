import React, { useEffect, useState } from "react";
import SelecSound from "../assets/Sounds/next.m4a";

interface QuationTypes {
  QuId: number;
  Quation: string;
  Answers: string[];
  CorectAnswer: number;
  GetOneQuation: (IndexNum: number | null) => void;
  CheckAnswer: (index: number) => void;
  Qtime: number;
  ActiveTime: boolean;
  setQtime: React.Dispatch<React.SetStateAction<number>>;
  CountQuation: number;
}

const ExamBoday = ({
  Quation,
  Answers,
  QuId,
  GetOneQuation,
  Qtime,
  CountQuation,
}: QuationTypes) => {
  const [IndexNum, setIndexNum] = useState<number | null>(null);
  const Select = React.useRef<HTMLAudioElement>(null);
  //console.log(Qtime);

  //funtions
  const CheckIndex = async (index: number) => {
    setIndexNum(index);
    await Select.current?.play();
  };

  // const Time = () => {
  //   setInterval(() => {
  //     if (ActiveTime && Qtime > 0) {
  //       //const timesecQ: number = 30;
  //       const time = Qtime - 1;
  //       setQtime(time);
  //       console.log("Time", time);
  //     }
  //   }, 1000);
  // };

  // Time();

  useEffect(() => {});
  return (
    <>
      <div className="ExamBody">
        <div className="Examin">
          <div className="ExamQuastions">
            <div className="head">
              <h2>
                <span></span> Html Complate Exam
              </h2>
              <p>
                Wakhtiga <span>{Qtime}</span>
              </p>
              <p>
                Suaalaha : <span>{QuId}</span> | {CountQuation}
              </p>
              <audio ref={Select}>
                <source src={SelecSound} />
              </audio>
            </div>
            <div className="suaal_jawaab">
              <div className="suaal">
                <h1>{Quation} :-</h1>
              </div>
              <div className="Jawaabo">
                <ul>
                  {Answers?.map((Ans, index) => (
                    <>
                      <li
                        className={index === IndexNum ? "Active" : ""}
                        onClick={() => CheckIndex(index)}
                        key={Ans}
                        value={Ans}
                      >
                        {Ans}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  GetOneQuation(IndexNum);
                  setIndexNum(null);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamBoday;
