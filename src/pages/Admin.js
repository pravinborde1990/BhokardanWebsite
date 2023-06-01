import React from 'react'
import { Tab } from 'react-bootstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
const Admin = () => {
    return (
    <>
      <div className="container-fluid ">
        <div className="row">
          
          <div className="col-6 offset-3 bg-dark mt-4 py-4">
            <div className="row">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div className="col-3 bg-success"><LeftSide/></div>
              <div className="col-9 bg-success"><RightSide/></div> 
              </Tab.Container>
            </div>
          </div>
        </div>
        </div> 
    </>
   )
}

export default Admin;