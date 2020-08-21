import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import Member from './components/Member';
import Navbar from './components/Navbar'
import Test from './components/Test';
import {container, Row, Col} from 'react-bootstrap';
import members from './data';

import { csv } from 'd3';
import membersCsv from './members.csv';




function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    csv(membersCsv).then(data => {
      setData(data);
      });
  }, []);

  return (
    <div className="App">
    <Navbar />
    <Row>
    {data.map(data => (
      <Member key={`${data.id}`} data={data} />
      ))}
    </Row>

    </div>
  );
}

export default App;
