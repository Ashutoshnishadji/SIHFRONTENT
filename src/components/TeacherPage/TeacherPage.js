import React from "react";
import "./TeacherPage.css";
import Button from "@mui/material/Button";
import { Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import PieChart from "./PieChart";
function TeacherPage() {
  const labels = ["CT1", "CT2", "MID-TERM", "CR3", "CT4", "Annual"];
  const dataLine = {
    radius:50,
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
    labels: ["Good", "Average", "Below Avg"],
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
      <h2 className="title"># Profile</h2>
      <div className="profile">
        <div className="info">
          <div className="fields">
            <b>Name: </b> &nbsp;:&nbsp; <p>Miss.Ranu Ramteke</p>
          </div>
          <div className="fields">
            <b>Father's Name: </b> &nbsp;:&nbsp; <p>Mr.Tilendra Ramteke </p>
          </div>
          <div className="fields">
            <b>Edu.: </b> &nbsp;:&nbsp; <p>M.sc.,BE.d</p>
          </div>
          <div className="fields">
            <b>D.O.B: </b> &nbsp;:&nbsp; <p>10/11/1986</p>
          </div>
          <div className="fields">
            <b>Empl. Code: </b> &nbsp;:&nbsp; <p>99-XX</p>
          </div>
          <div className="fields">
            <b>Cont.No: </b> &nbsp;:&nbsp; <p>+91 4444 4444 44</p>
          </div>
        </div>
        <div className="image">
          <img
            className="profileImage"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="profile image"
          />
        </div>
      </div>
      <h2 className="title"># Class</h2>
      <div className="tasks">
        <Button className="optionBtn" variant="outlined">
          Attendence
        </Button>
        <Button className="optionBtn" variant="outlined">
          Student Performance
        </Button>
        <Button className="optionBtn" variant="outlined">
          Assign Homework{" "}
        </Button>
        <Button className="optionBtn" variant="outlined">
          Class Performance
        </Button>
      </div>

      <h2 className="title"># Class Performance</h2>
      <div className="classGraphs">
        <div className="class_info_teacher_profile">
          <h3>Class: 9th</h3>
          <h2>English</h2>
          <h4>Total student : 54</h4>
          <h4>Grade: B</h4>
        </div>
        <Pie className="pieChart" width={400} height={400} data={dataPie} />
      </div>
      <div className="classGraphs">
        <div className="class_info_teacher_profile">
          <h3>Class: 9th</h3>
          <h2>Social Science</h2>
          <h4>Total student : 54</h4>
          <h4>Grade: B</h4>
        </div>
        <Pie className="pieChart" width={400} height={400} data={dataPie} />
      </div>
      <div className="classGraphs">
        <div className="class_info_teacher_profile">
          <h3>Class: 7th</h3>
          <h2>English</h2>
          <h4>Total student : 48</h4>
          <h4>Grade: B</h4>
        </div>
        <Pie className="pieChart" width={400} height={400} data={dataPie} />
      </div>
      <div className="classGraphs">
        <div className="class_info_teacher_profile">
          <h3>Class: 8th</h3>
          <h2>Social Science</h2>
          <h4>Total student : 55</h4>
          <h4>Gread: B</h4>
        </div>
        <Pie className="pieChart" width={400} height={400} data={dataPie} />
      </div>
      <div className="classGraphs">
        <div className="class_info_teacher_profile">
          <h3>Class: 6th</h3>
          <h2>Engish</h2>
          <h4>Total student : 60</h4>
          <h4>Grade: B</h4>
        </div>
        <div className="pieChartContainer">
          <PieChart/>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
