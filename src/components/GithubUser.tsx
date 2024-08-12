import React, { useEffect, useState } from "react";
interface PostInterFace {
  Id: number;
  description: string;
  title: string;
  price: number;
  image: string;
}

const GithubUser = () => {
  const [userData, setuserData] = useState<PostInterFace>();
  const [loading, setloading] = useState<boolean>(false);
  const [NameUser, setNameUser] = useState<string>("1");
  const [Products, setProducts] = useState<[PostInterFace]>();

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
      const response = await fetch(`https://fakestoreapi.com/products/1${Id}`);
      const data = await response.json();
      if (response.ok) {
        setloading(false);
        setuserData(data);
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  const GetAll = async () => {
    const AllProduct = await fetch("https://fakestoreapi.com/products");
    const data = await AllProduct.json();
    if (AllProduct.ok) {
      setloading(true);
      setProducts(data);
    }
  };

  useEffect(() => {
    GetAll();
  }, []);
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
                <h3>
                  {userData.title} - {userData.Id}
                </h3>
                <p>{userData.description}</p>
                <img
                  src={userData.image}
                  alt="sawir User Github"
                  width={"400px"}
                />
              </div>
            )}
          </>
        )}
      </div>
      <hr />
      {Products &&
        Products.map((Product) => (
          <div className="all">
            <div className="userdetails">
              <h3>
                {Product.title} - {Product.Id}
              </h3>
              <p>{Product.description}</p>
              <img
                src={Product.image}
                alt="sawir User Github"
                width={"400px"}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default GithubUser;
