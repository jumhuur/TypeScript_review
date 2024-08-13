import React, { useEffect, useState } from "react";
import SelecSound from "../assets/Sounds/next.m4a";
interface QuationTypes {
  QuId: number;
  Quation: string;
  Answers: string[];
  CorectAnswer: string;
  GetOneQuation: (Jawaab: string | null) => void;
  CheckAnswer: (index: string) => void;
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
  const [Jawaab, setJawaab] = useState<string | null>(null);
  const Select = React.useRef<HTMLAudioElement>(null);
  //console.log(Qtime);

  //funtions
  const CheckIndex = async (
    e: React.MouseEvent<HTMLLIElement>,
    index: number
  ) => {
    const jawaab = e.currentTarget.textContent;
    setJawaab(jawaab);
    console.log();
    setIndexNum(index);
    await Select.current?.play();
  };

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
              <p className="Wakhtiga">
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
                        onClick={(e) => CheckIndex(e, index)}
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
                  GetOneQuation(Jawaab);
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
