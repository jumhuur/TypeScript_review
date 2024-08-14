// export const Time = (Deuration: number, QId: number) => {
//   //Waa Hadii aan ku xidhayo wakhti gaara
//   //const TimeEvent: number = new Date("Aug 20, 2024 00:00:00").getTime();
//   const TimeEvent: number | any = new Date();
//   const DeadLine: number = TimeEvent.setSeconds(
//     TimeEvent.getSeconds() + Deuration
//   );
//   const TimeInterval = setInterval(() => {
//     if (QId <= 5) {
//       const TimeNow: number = new Date().getTime();
//       const Farqi: number = DeadLine - TimeNow;

//       // how ican get Time Unites

//       const seconds = 1000;
//       const Minutes = seconds * 60;
//       const Hours = Minutes * 60;
//       //const Days = Hours * 24;

//       // isku gaynta wakhtiyada
//       // const textday = Math.floor(Farqi / Days);
//       // const TextHour = Math.floor((Farqi % Days) / Hours);
//       const TextMinute = Math.floor((Farqi % Hours) / Minutes);
//       const TextSecond = Math.floor((Farqi % Minutes) / seconds);
//       console.log(`${TextMinute}:${TextSecond}`);
//     }

//     if (QId > 5) {
//       clearInterval(TimeInterval);
//       console.log("Time is Up");
//     }
//   }, 1000);
// };
