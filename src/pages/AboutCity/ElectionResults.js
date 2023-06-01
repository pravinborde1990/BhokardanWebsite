import React from 'react';

const ElectionResults = () => {
    const styles = {
        textAlign: 'right',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '16px'
        // Add more CSS properties here
      };
    
  return (
    <div className="card border-light mb-3">
    <div className="card-header">Election Results</div>
    <div className="card-body">
    <h5 className="card-title">2014 Maharashtra Legislative Assembly election</h5>
    <table className="table table-bordered table-hover table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th>Party</th>
          <th>Candidate</th>
          <th>Votes</th>
          <th>%</th>
          <th>±%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>BJP</td>
          <td>Santosh Raosaheb Danve</td>
          <td>69,597</td>
          <td>35.11</td>
          <td>-5.25</td>
        </tr>
        <tr>
          <td scope="row">2</td>
          <td>NCP</td>
          <td>Chandrakant Pundlikrao Danve</td>
          <td>62,847</td>
          <td>31.71</td>
          <td>-9.65</td>
        </tr>
        <tr>
          <td scope="row">3</td>
          <td>NCP</td>
          <td>Rameshwar Gavhad</td>
          <td>36,298</td>
          <td>18.50</td>
          <td>+18.50</td>
        </tr>
        <tr>
            <td colspan="3"><div style={styles}>Majority</div></td>
            <td><b>6,750</b></td>
            <td><b>3.40</b></td>
        </tr>
        <tr>
            <td colspan="3"><div style={styles}>Turnout</div></td>
            <td><b>1,98,210</b></td>
            <td><b>75.05</b></td>
        </tr>
        {/* Add more rows here */}
      </tbody>
    </table>
    </div>
    </div>
    )
}
export default ElectionResults;