import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    loadDomains();
  }, []);

  const loadDomains = async () => {
    const result = await axios.get(
      "http://localhost:7070/api/domain/get"
    );
    setDomains(result.data);
    console.log(result.data);
  };
  
  return (
    <div className="container">
      <div className="py-4">
        <h1>List of Domains</h1>
        {/* <div> */}
        <Link  className='btn btn-outline-primary mx-2' to='/addDomain'>Add Domain</Link>
        {/* </div> */}
        <table className="table table-secondary shadow table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Domain_ID</th>
              <th scope="col">Program</th>
              <th scope="col">Batch</th>
              <th scope="col">Capactiy</th>
              <th scope="col">Qualification</th>
              {/* <th scope="col">View</th>
              <th scope="col">Edit</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={domain.domain_id}>
                <td>{domain.domain_id}</td>
                <td>{domain.program}</td>
                <td>{domain.batch}</td>
                <td>{domain.capacity}</td>
                <td>{domain.qualification}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/Students/${domain.domain_id}`}
                  >
                    View Students
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editDomain/${domain.domain_id}`}
                  >
                    Edit Domain
                  </Link>
                </td>
                {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/EditDomain/${domain.domain_id}`}
                  >
                    Edit Domain
                  </Link>
                  
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}