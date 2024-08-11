import React, { useState } from "react";

interface PostInterFace {
  body: string;
  Id: number;
  title: string;
  userId: number;
}

const GithubUser = () => {
  const [userData, setuserData] = useState<PostInterFace>();
  const [loading, setloading] = useState<boolean>(false);
  const [NameUser, setNameUser] = useState<string>("1");

  const handalechangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(e.target.value);
    console.log(NameUser);
  };

  const dataHandaling = async (
    e: React.FormEvent<HTMLFormElement>,
    Id: string
  ) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${Id}`
      );
      const data = await response.json();
      if (response.ok) {
        setloading(false);
        setuserData(data);
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  //   useEffect(() => {
  //     dataHandaling();
  //   }, []);
  return (
    <>
      <div className="user">
        <form
          onSubmit={(e) => {
            dataHandaling(e, NameUser);
          }}
        >
          <label htmlFor="user">Github User Name :</label>
          <input
            onChange={handalechangeinput}
            id="user"
            type="text"
            placeholder="user name"
          />
          <input type="submit" value={"Get info"} />
        </form>
        {loading ? (
          <>
            <p>Loading ...</p>
          </>
        ) : (
          <>
            {userData && (
              <div className="userdetails">
                <p>
                  {userData.title} - {userData.Id}
                </p>
                <p>{userData.body}</p>
                <img src="" alt="sawir User Github" />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GithubUser;
