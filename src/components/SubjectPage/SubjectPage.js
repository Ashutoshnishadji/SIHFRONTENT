import React from "react";
import Button from "@mui/material/Button";
import { Line, Pie , Bar} from "react-chartjs-2";
import Chart from "chart.js/auto";
function SUbjectPage() {
  const labels = ["CT1", "CT2", "MID-TERM", "CR3", "CT4", "Annual"];
  const dataLine = {
    labels: labels,
    datasets: [
      {
        borderColor: "rgb(75, 192, 192)",
        label: "Maths",
        data: [1, 2, 3, 4, 5, 6],
      },
      {
        label: "BIO",
        data: [7, 6, 5, 4, 3, 2],
      },
    ],
  };
  const dataPie = {
    labels: ["Good", "Average", "Below Av"],
    datasets: [
      {
        label: "Nidhi Ka Idea",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="teacherPageContainer">
      <h2 className="title"># Class 11th</h2>
      <div className="profile">
        <div className="info">
          <div className="fields">
            <b>Subject </b> &nbsp;:&nbsp; <p> Chemistry </p>
          </div>
          <div className="fields">
            <b>Teacher </b> &nbsp;:&nbsp; <p>  kalyani Netam </p>
          </div>
          <div className="fields">
            <b>Total student</b> &nbsp;:&nbsp; <p>  60</p>
          </div>
          <div className="fields">
            <b>Grade</b> &nbsp;:&nbsp; <p>  A</p>
          </div>
         
        </div>
        <div className="fields">
            <Pie
             data={{
               labels: ["Good " , "Best" , "Average" , "Weak"],
               datasets: [{
                 label: "class 11th Chemistry",
                 data: [20 , 30 , 40 , 10],
                 backgroundColor: [
                   "Green",
                   "blue",
                   "yellow",
                   "red"
                 ],
               }]
             }}
             />
          </div>
      </div>
      <h2 className="title"># Tasks</h2>
      <div className="tasks">
        <Button className="optionBtn" variant="outlined">
          Attendence
        </Button>
        <Button className="optionBtn" variant="outlined">
          Grade Tests
        </Button>
        <Button className="optionBtn" variant="outlined">
          View Class
        </Button>
        <Button className="optionBtn" variant="outlined">
          Assign Homework{" "}
        </Button>
        <Button className="optionBtn" variant="outlined">
          Class Performance
        </Button>
      </div>

      <h2 className="title"># Class Performance</h2>
     <div>
       <div className="graph">
<h2>Unit Test Performance</h2>
<div className="graph_in">
<Bar
     
     data={{

     labels: ["unit1" , "unit2" ,  "unit3" ,  "unit4" ,  "unit5" ] ,
     datasets: [{
       label: "student" , 
       data: [80 , 20 , 60 , 30 , 70 ] ,
       backgroundColor: [
         "yellow"
       ],
       borderColor: "black"
       
     }]
     }}
     />
  
  </div>
       </div>
      < div className="graph">
<h2> Doubt </h2> 
<div className="graph_in">
<Bar
     
     data={{

     labels: ["unit1" , "unit2" ,  "unit3" ,  "unit4" ,  "unit5" ] ,
     datasets: [{
       label: "student" , 
       data: [5 , 20 , 60 , 30 , 70 ] ,
       backgroundColor: [
         "Red"
       ],
       borderColor:  'rgb(50, 50 ,500)' ,
       
       
     }]
     
     }}


     options={{
       scales:[
        
       ]
     }}
     />
  
  </div>
       </div>
     </div>
    </div>
    
  );
}

export default SUbjectPage;
