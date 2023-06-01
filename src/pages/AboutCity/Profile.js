import React from "react";
import TableExample from "../TableExample";
import AssembleHistory from "./AssemblyHistory";
import ElectionResults from "./ElectionResults";
const Profile=()=> {
const history="Bhokardan is a city located in the Jalna district of the Indian state of Maharashtra. The history of Bhokardan dates back several centuries, and the region has witnessed the rule of different dynasties and empires. The earliest known history of Bhokardan can be traced to ancient times when the region was part of the Mauryan Empire. The Mauryas, under the leadership of Emperor Ashoka, had a strong presence in the area. Ashoka, known for his propagation of Buddhism, established several edicts and inscriptions in nearby regions. During medieval times, Bhokardan came under the rule of various dynasties. The Yadavas of Devagiri, who were prominent rulers of the Deccan region, held control over Bhokardan for a significant period. They constructed forts and temples in the area, leaving behind architectural remnants that still exist today In the 14th century, the Bahmani Sultanate emerged as a major power in the Deccan. Bhokardan became a part of the Bahmani Sultanate, and subsequently, the region witnessed the rule of the Deccan Sultanates, including the Nizam Shahis and the Mughals.In the 17th century, the Marathas, led by the legendary warrior king Chhatrapati Shivaji Maharaj, established their supremacy in the Deccan. Bhokardan came under the control of the Marathas and remained a part of the Maratha Empire until the advent of British colonial rule. With the establishment of British rule in India in the 19th century, Bhokardan became a part of the Nizams Dominion. After India gained independence in 1947, the region became a part of the state of Hyderabad. Following the reorganization of states based on linguistic boundaries, Bhokardan became part of the state of Maharashtra in 1960.In recent years, Bhokardan has seen development in various sectors, including agriculture, education, and infrastructure. The city has witnessed the establishment of educational institutions, healthcare facilities, and other amenities to cater to the needs of its growing population.Today, Bhokardan serves as an important center for trade and commerce in the Jalna district. It continues to preserve its historical heritage while embracing modernization and progress.";
return( 
<div>
<div className="card border-light mb-3">
  <div className="card-header">History</div>
  <div className="card-body">
    <h5 className="card-title">Bhokardan</h5>
    <p className="card-text">{history}</p>
  </div>
</div>
  <AssembleHistory/>
  <ElectionResults/>
</div>
    )
}
export default Profile;