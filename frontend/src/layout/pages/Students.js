import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Student() {
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(
      `http://localhost:7070/api/student/getStudentsByDomain/${id}`
    );
    setStudents(result.data);
    // console.log(result);
    // console.log(students);
  };
  //   let obj = JSON.stringify(students[0]);

  // if (students.length == 0) return null;

  // console.log(students[0].course_id);
  console.log("check2");
  if (students.length === 0) return null;
  console.log("check3");
  console.log(students);
  return (
    // <div>Studsents enrolled </div>
    <div className="container">
      <div className="py-4">
        <h3 align="left">
          <u>Students Enrolled in {students[0].domain.program} Domain</u>
        </h3>
        <br></br>
        <Link  className='btn btn-outline-primary mx-2' to='/home'>Home</Link>
        {/* {students.map((domain) => (
          <div key={domain.domain_id}>
            {course.course_name} */}
            <table className="table table-info shadow table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th></th>
                  <th scope="col">Roll Number</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Graduation year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.student_id}>
                    {/* <div key={student.student_id}></div> */}
                    <td></td>
                    <td>{student.roll_number}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.email}</td>
                    <td>{student.graduation_year}</td>
                  </tr>
                  //   </div>
                ))}
              </tbody>
            </table>
          </div>
        {/* ))} */}
      </div>
      
    // </div>
  );
}