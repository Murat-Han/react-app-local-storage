import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { addDataToLocalStorage } from "../data/apiData.js";
import { ScaleLoader } from "react-spinners";

function ButtonBar(){
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const override = `
  display:flex;
  align-items:center;
  justify-content:center;
  border-color:red;
  `;

  async function setDataToStorage(){
    try {
      setLoading(true);
      const d = await addDataToLocalStorage();
      localStorage.setItem("data", JSON.stringify(d));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
 function getDataFromStorage(){
    try {
      const arrayOfData = localStorage.getItem("data");
      const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };
  function removeDataFromStorage(){
      try {
          localStorage.removeItem("data");
          setData([]);
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
   
  }, []);

  return (
    <div className="container-fluid">
      <Card>
        <Card.Title className="text-danger font-weight-bold mt-3 mb-3">
          Save & Retrieve data from local storage
        </Card.Title>
        <Card.Header>
          {loading ? (
            <ScaleLoader
              css={override}
              size={150}
              color={"#eb4034"}
              loading={loading}
            />
          ) : (
            <div className="d-flex justify-content-center ">
              <div>
              <Button
                className="btn btn-success"
                onClick={() => {
                  setDataToStorage();
                }}
              >
           
                Set Data To Local Storage
              </Button>
              </div>
              <div className="align-self ml-3">
              <Button
                className="btn btn-warning"
                onClick={() => {
                  getDataFromStorage();
                }}
              >
                Get Data From Local Storage
              </Button>
              </div>
              <div className="align-self ml-3">
              <Button className="mr-3 btn btn-danger"
                onClick={()=>{
                    removeDataFromStorage();
                }}
              >
                Remove Data From Local Storage
              </Button>
              </div>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          <div className="row">
            {Data.map((elem) => (
              <div className="col-3 p-2" key={elem.id}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={elem.url} />
                  <Card.Body>
                    <Card.Title>{elem.albumId}</Card.Title>
                    <Card.Text>
                      {elem.title}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ButtonBar;
