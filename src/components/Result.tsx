import { useEffect, useState } from "react";
interface ExamBoday {
  InProgress: number;
  CountQuation: number;
  ResultPercentage: number;
}
const Result = ({ InProgress, CountQuation }: ExamBoday) => {
  const [precantage, setprecantage] = useState<number | null>(null);
  const calc = () => {
    const Xisaab = (InProgress * 100) / CountQuation;
    setprecantage(Xisaab);
  };
  useEffect(() => {
    calc();
  }, []);
  return (
    <>
      <div className="ExamBody">
        <div className="Examin">
          <div className="ExamQuastions result">
            <div className="head result">
              <h2>Natiijada</h2>
              <p>Waxaad Saxday | {InProgress}</p>
            </div>
            <div className="suaal_jawaab">
              <p className="resulText">{precantage}%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
