export const Time = (deuration: number, QId: number) => {
  const TimeInterval = setInterval(() => {
    if (QId <= 5) {
      const daq_outflot: number = deuration / 60;
      const modules: number = deuration % 60;
      const Minit = parseInt(String(daq_outflot));
      const sikin = parseInt(String(modules));
      console.log(`${Minit}:${sikin}`);
    }

    if (QId > 5) {
      clearInterval(TimeInterval);
      console.log("Time is Up");
    }
  }, 1000);
};
