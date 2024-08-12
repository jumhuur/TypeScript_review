interface QuationTypes {
  QuId: number;
  Quation: string;
  Answers: string[];
  CorectAnswer: number;
  GetOneQuation: () => void;
  CheckAnswer: (index: number) => void;
}

const ExamBoday = ({
  Quation,
  Answers,
  QuId,
  GetOneQuation,
  CheckAnswer,
}: QuationTypes) => {
  //   const [IndexNum, setIndexNum] = useState<number>();
  //   const CheckIndex = (index: number) => {
  //     setIndexNum(index);
  //   };
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
                Wakhtiga <span>32</span>
              </p>
              <p>
                Su,aashii <span>{QuId}</span>
              </p>
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
                        className={index === 2 ? "Active" : ""}
                        onClick={() => CheckAnswer(index)}
                        key={index}
                        value={Ans}
                      >
                        {Ans}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <button onClick={GetOneQuation}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamBoday;
