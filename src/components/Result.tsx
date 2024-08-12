interface ExamBoday {
  InProgress: number;
}

const Result = ({ InProgress }: ExamBoday) => {
  return (
    <>
      <div className="ExamBody">
        <div className="Examin">
          <div className="ExamQuastions">
            <div className="head">
              <h2>
                <span></span> Html Complate Exam
              </h2>
              <p>Natiijada</p>
            </div>
            <div className="suaal_jawaab">
              <p>{InProgress}- Ayaa Saxa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
