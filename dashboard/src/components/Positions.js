import React from "react";
import { useState,useEffect } from "react";
// import { holdings, positions } from "../data/data";
import axios from "axios";

const Positions = () => {

  const [allPositions,setAllpositions] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/allPositions")
    .then((res)=>{
      setAllpositions(res.data);
    })
  },[]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>{(currValue - stock.price * stock.qty).toFixed(2)}</td>
                <td className={profitClass}>{stock.day}</td>
              </tr>
            )
          })}

        </table>
      </div>
    </>
  );
};

export default Positions;
