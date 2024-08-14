import React, { useEffect, useState } from "react";
import SelecSound from "../assets/Sounds/next.m4a";
interface QuationTypes {
  QuId: number;
  Quation: string;
  Answers: string[];
  CorectAnswer: string;
  GetOneQuation: (Jawaab: string | null) => void;
  CheckAnswer: (index: string) => void;
  Qtime: string;
  ActiveTime: boolean;
  setQtime: React.Dispatch<React.SetStateAction<string>>;
  CountQuation: number;
}

const ExamBoday = ({
  Quation,
  Answers,
  QuId,
  GetOneQuation,
  CountQuation,
  Qtime,
}: QuationTypes) => {
  const [IndexNum, setIndexNum] = useState<number | null>(null);
  const [Jawaab, setJawaab] = useState<string | null>(null);
  const Select = React.useRef<HTMLAudioElement>(null);
  const btn = React.useRef<HTMLButtonElement>(null);
  //funtions
  const CheckIndex = async (
    e: React.MouseEvent<HTMLInputElement>,
    index: number
  ) => {
    const jawaab = e.currentTarget.value;
    setJawaab(jawaab);
    console.log();
    setIndexNum(index);
    await Select.current?.play();
  };

  console.log(Qtime);

  useEffect(() => {}, []);
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
                Wakhtiga Ku Hadhay: <span className="Time">{Qtime} </span>
              </p>
              <p>
                Suaalaha : <span className="Qid">{QuId}</span> | {CountQuation}
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
                      <li className={index === IndexNum ? "Active" : ""}>
                        <input
                          className="inputradio"
                          id={Ans}
                          type="radio"
                          onClick={(e) => CheckIndex(e, index)}
                          key={index}
                          value={Ans}
                          name="jawaab"
                        />
                        <label htmlFor={Ans}>{Ans}</label>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <button
                ref={btn}
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
