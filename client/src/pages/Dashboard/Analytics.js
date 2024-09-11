import React, { useState, useEffect } from "react";
import Header from "../../components/Shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";
import './Analytics.css';

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  const colors = [
    "#FFCDD2", // Light Red
    "#F8BBD0", // Light Pink
    "#E1BEE7", // Light Purple
    "#D1C4E9", // Light Deep Purple
    "#C5CAE9", // Light Indigo
    "#BBDEFB", // Light Blue
    "#B3E5FC", // Light Light Blue
    "#B2EBF2", // Light Cyan
  ];

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card"
            key={i}
            style={{ backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In: <b> {record.totalIn} </b> (ML)
              </p>
              <p className="card-text">
                Total Out: <b> {record.totalOut} </b> (ML)
              </p>
            </div>
            <div className="card-footer">
              Total Available: <b> {record.availableBlood} </b> (ML)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h3 className="my-3"> Recent Blood Transactions:</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;