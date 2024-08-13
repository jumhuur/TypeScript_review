interface ExamBoday {
  InProgress: number;
  CountQuation: number;
  ResultPercentage: number;
}

const Result = ({ ResultPercentage, InProgress }: ExamBoday) => {
  return (
    <>
      <div className="ExamBody">
        <div className="Examin">
          <div className="ExamQuastions result">
            <div className="head result">
              <h2>Natiijada</h2>
              <p>Waxaad Saxday | {InProgress - 1}</p>
            </div>
            <div className="suaal_jawaab">
              <p className="resulText">{ResultPercentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
