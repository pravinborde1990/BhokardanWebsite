import React from "react";
const Population = () =>{

return( 
<div className="card border-light mb-3">
    <div className="card-header">Bhokardan Population as per 2011</div>
    <div className="card-body">
    <h5 className="card-title"></h5>
<table className="table table-bordered table-hover table-responsive">
<thead><tr><th className="table-heading">Particulars</th>
<th className="table-heading">Rural</th>
<th className="table-heading">Urban</th>
<th className="table-heading">Total</th></tr></thead>
<tbody><tr><td>Total Population</td>
<td>2,86,887</td>
<td>24,416</td>
<td>3,11,303</td>
</tr>
<tr><td>Male Population</td>
<td>1,48,722</td>
<td>12,751</td>
<td>1,61,473</td>
</tr>
<tr><td>Female Population</td>
<td>1,38,165</td>
<td>11,665</td>
<td>1,49,830</td>
</tr>
<tr><td>Population Density</td>
<td>244 <span className="vi-minfo">/ km²</span></td>
<td>9,427 <span className="vi-minfo">/ km²</span></td>
<td>264 <span className="vi-minfo">/ km²</span></td>
</tr></tbody></table>
</div>
</div>
)
}
export default Population;