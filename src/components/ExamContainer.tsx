import ExamBoday from "./ExamBody";
import Quations from "../Data/Quations.json";
import { useEffect, useRef, useState } from "react";
import Result from "./Result";
import Next from "../assets/Sounds/LevelUp.m4a";
import TimeSound from "../assets/Sounds/superTime.wav";
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
  const [Qtime, setQtime] = useState<string>("");
  const [ActiveTime, setActiveTime] = useState<boolean>(false);
  const CountQuation: number = Quations.length;
  //const [count, setCount] = useState<number>(0);
  const NextSound = useRef<HTMLAudioElement>(null);
  const TimeUpd = useRef<HTMLAudioElement>(null);
  const GetOneQuation = async (Jawaab: string | null) => {
    setActiveTime(true);
    CheckAnswer(Jawaab);
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

  const Time = (Deuration: number, QId: number) => {
    //Waa Hadii aan ku xidhayo wakhti gaara
    //const TimeEvent: number = new Date("Aug 20, 2024 00:00:00").getTime();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TimeEvent: number | any = new Date();
    const DeadLine: number = TimeEvent.setSeconds(
      TimeEvent.getSeconds() + Deuration
    );
    const TimeInterval = setInterval(async () => {
      if (QId <= 5) {
        const TimeNow: number = new Date().getTime();
        const Farqi: number = DeadLine - TimeNow;

        // how ican get Time Unites
        const seconds = 1000;
        const Minutes = seconds * 60;
        const Hours = Minutes * 60;
        //const Days = Hours * 24;

        // isku gaynta wakhtiyada
        // const textday = Math.floor(Farqi / Days);
        // const TextHour = Math.floor((Farqi % Days) / Hours);
        const TextMinute = Math.floor((Farqi % Hours) / Minutes);
        const TextSecond = Math.floor((Farqi % Minutes) / seconds);

        // kala habaynta wakhitaga TextMinute  &  TextSecond
        let TimeDhaba: string = `${TextMinute}:${TextSecond}`;
        if (TextMinute <= 9) {
          TimeDhaba = `0${TextMinute}:${TextSecond}`;
        }

        if (TextSecond <= 9) {
          TimeDhaba = `${TextMinute}:0${TextSecond}`;
        }

        if (TextSecond <= 9 && TextMinute <= 9) {
          TimeDhaba = `0${TextMinute}:0${TextSecond}`;
        }

        //qalad ayaa ka jira halkan waan hakiyay ilaa uu cadaanayo qaladku
        // if (TextMinute <= 0 && TextMinute <= 5) {
        //   await TimeUpd.current?.play();
        //   console.log(TimeUpd);
        // }

        if (TextMinute <= 0 && TextSecond <= 0) {
          console.log("Time is End");
          clearInterval(TimeInterval);
          setActiveTime(false);
          //TimeUpd.current?.pause();
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setQtime((_prevQtime) => (_prevQtime = `${TimeDhaba}`));
        return () => clearInterval(TimeInterval);
      }

      if (QId > 5) {
        clearInterval(TimeInterval);
        console.log("Time is Up");
      }
    }, 1000);

    // if (Mnow === 0 && Snow === 0) {
    //   console.log("Time is End");
    // }
  };

  useEffect(() => {
    GetOneQuation(Jawaab);
  }, []);

  useEffect(() => {
    Time(CountQuation * 20, QId);
  }, []);

  return (
    <>
      <div className="container">
        <audio ref={NextSound}>
          <source src={Next} />
        </audio>
        <audio ref={TimeUpd}>
          <source src={TimeSound} />
        </audio>
        {Quation && ActiveTime ? (
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
