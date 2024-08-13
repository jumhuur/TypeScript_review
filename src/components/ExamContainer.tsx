import ExamBoday from "./ExamBody";
import Quations from "../Data/Quations.json";
import { useEffect, useRef, useState } from "react";
import Result from "./Result";
import Next from "../assets/Sounds/LevelUp.m4a";
//import TimeSound from "../assets/Sounds/superTime.wav";
const ExamContainer = () => {
  interface QuationTypes {
    QuId: number;
    Quation: string;
    Answers: string[];
    CorectAnswer: string;
  }
  const [QId, setQId] = useState<number>(1);
  const [Quation, setQuation] = useState<QuationTypes>();
  const [InProgress, setInProgress] = useState<number>(0);
  const [Jawaab, setJawaab] = useState<string | null>(null);
  const [ResultPercentage, setResultPercentage] = useState<number>(0);
  const [Qtime, setQtime] = useState<number>(30);
  const [ActiveTime, setActiveTime] = useState<boolean>(false);
  const CountQuation: number = Quations.length;
  //const [count, setCount] = useState<number>(0);
  const NextSound = useRef<HTMLAudioElement>(null);
  const GetOneQuation = async (Index: string | null) => {
    setActiveTime(true);
    CheckAnswer(Index);
    // Bilaabida Timka su,aasha
    //Time(80, QId);
    setQId(QId + 1);
    const suaal = Quations.filter((QuationOne) => {
      return QuationOne.QuId === QId;
    });
    const [ObjectQuation]: QuationTypes[] = suaal;
    setQuation(ObjectQuation);
    // console.log("setka", Quation);
    //console.log("setka", ObjectQuation);
    await NextSound.current?.play();
    calcProgress();
  };

  const calcProgress = (): number => {
    const Result = (InProgress * 100) / CountQuation;
    setResultPercentage(Result);
    console.log("Hada", InProgress);
    return Result;
  };

  const CheckAnswer = (Jawaab: string | null) => {
    if (Jawaab === Quation?.CorectAnswer) {
      setJawaab(Jawaab);
      setInProgress(InProgress + 1);
      console.log("sax", InProgress);
    }
  };

  useEffect(() => {
    GetOneQuation(Jawaab);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQtime((prevQtime) => prevQtime - 1);
    }, 1000);

    return () => clearInterval(interval);

    // const Time = (deuration: number, QId: number) => {
    //   const TimeInterval = setInterval(() => {
    //     if (QId <= 5) {
    //       const daq_outflot: number = deuration / 60;
    //       const modules: number = deuration % 60;
    //       const Minit = parseInt(String(daq_outflot));
    //       const sikin = parseInt(String(modules));
    //       console.log(`${Minit}:${sikin}`);
    //     }

    //     if (QId > 5) {
    //       clearInterval(TimeInterval);
    //       console.log("Time is Up");
    //     }
    //   }, 1000);

    //   return () => clearInterval(TimeInterval);
    // };

    // Time(5, QId);
  }, []);

  return (
    <>
      <div className="container">
        <audio ref={NextSound}>
          <source src={Next} />
        </audio>
        {Quation ? (
          <ExamBoday
            Quation={Quation.Quation}
            Answers={Quation.Answers}
            QuId={Quation.QuId}
            CorectAnswer={Quation.CorectAnswer}
            GetOneQuation={GetOneQuation}
            CheckAnswer={CheckAnswer}
            Qtime={Qtime}
            ActiveTime={ActiveTime}
            setQtime={setQtime}
            CountQuation={CountQuation}
          />
        ) : (
          <>
            <Result
              InProgress={InProgress}
              CountQuation={CountQuation}
              ResultPercentage={ResultPercentage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ExamContainer;
