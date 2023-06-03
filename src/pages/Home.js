import React, { useEffect, useState } from "react"
import axios from "axios"
import Profile from "./AboutCity/Profile"
import Schools from "./AboutCity/Schools"
import Hospitals from "./AboutCity/Hospitals"
import Colleges from "./AboutCity/Colleges"
import PoliceStations from "./AboutCity/PoliceStations"
import Banks from "./AboutCity/Banks"
import Offices from "./AboutCity/Offices"
import Map from "./AboutCity/Map"
import mainBG from "../khatkali.jpg"
import Blank from "./AboutCity/Blank"
import BhokardanMap from "./AboutCity/BhokardanMap"
import Villages from "./AboutCity/Villages"
{/*    const [accounts,setAccounts]=useState([]);
    useEffect(()=>{
        console.log("useEffect called");
        loadAccounts();
    },[]);
    //async is used to wait for api response
    const loadAccounts = async () => {
        const result= await axios.get("http://localhost:8088/getAllSavingAccount");
        console.log("result:"+result.data);
    }
    return(
            <div className="container">
                <div className="py-4">
                <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Balance</th>
      <th scope="col">Account Number</th>
    </tr>
  </thead>
  <tbody>
    {
        accounts.map((account,index)=>{
            <tr>
            <th scope="row" key={index+1}>{index+1}</th>
            <td>account.name</td>
            <td>account.balance</td>
            <td>account.accountNumber</td>
            </tr>
        })
    }
    
  </tbody>
</table>
  </div>
  </div>*/}
  const Home = ({ activeComponent }) => {
    const componentMap = {
      Profile: Profile,
      Schools: Schools,
      Hospitals: Hospitals,
      Banks: Banks,
      PoliceStations:PoliceStations,
      Colleges:Colleges,
      Offices:Offices,
      Map:Map,
      Blank:Blank,
      Villages:Villages
    };
  
    const Component = componentMap[activeComponent];
    const renderComponent = () => {
      switch (activeComponent) {
        case 'Profile':
          return <Profile />;
        case 'Schools':
          return <Schools />;
        case 'Hospitals':
          return <Hospitals />;
        case 'Banks':
          return <Banks />;
        case 'Offices':
          return <Offices />;
        case 'Map':
          return <BhokardanMap/>
        case 'PoliceStations':
          return <PoliceStations/>
        case 'Colleges':
          return <Colleges/>
        case 'Village Info':
              return <Villages/>
        default:
          return <Blank/>;
      }
    };
 return(
    
  <div>
  {/*Component && <Component />*/}
  {renderComponent()}
</div>);
}
export default Home;