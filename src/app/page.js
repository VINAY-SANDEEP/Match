"use client"
import React, { useState } from "react";
import { students } from "./data/data";

const page = () => {
  const [matchedPair, setMatchedPair] = useState(null);

  const getImageUrl = (student) => {
    if (student.college === 'ACET') {
      return `https://info.aec.edu.in/ACET/StudentPhotos/${student.roll_number}.jpg`;
    } else if (student.college === 'AEC') {
      return `https://info.aec.edu.in/AEC/StudentPhotos/${student.roll_number}.jpg`;
    }
    return 'https://via.placeholder.com/60x60?text=No+Photo';
  };

  const generateMatch = () => {
    const maleStudents = students.filter(student => student.gender === 'male');
    const femaleStudents = students.filter(student => student.gender === 'female');
    
    if (maleStudents.length === 0 || femaleStudents.length === 0) {
      alert('Not enough students of both genders available');
      return;
    }

    const randomMale = maleStudents[Math.floor(Math.random() * maleStudents.length)];
    const randomFemale = femaleStudents[Math.floor(Math.random() * femaleStudents.length)];
    
    setMatchedPair({ male: randomMale, female: randomFemale });
  };

  return (
    <>
      <h1>Naku ee alochina ala vachindhi anni adgadhu niku andhuku raledhu alochinchu</h1>
      
      <button onClick={generateMatch}>Try Chey</button>
       <marquee style={{backgroundColor:'orange'}}>Sorry friends kavail anni cheyledhu naku pani pata ledhu</marquee>
      {matchedPair && ( 
        <div className="matched-pair">
          <div className="match-container">
            <div className="student-card">
              <img src={getImageUrl(matchedPair.male)} alt={`${matchedPair.male.roll_number}`} />
              <div className="student-details">
                <h3>{matchedPair.male.name}</h3>
                <p>Roll: {matchedPair.male.roll_number}</p>
                <p>College: {matchedPair.male.college}</p>
                <p>Mobile: {matchedPair.male.mobile}</p>
                <p>Branch: {matchedPair.male.branch}</p>
              </div>
            </div>
            <div className="heart">❤️</div>
            <div className="student-card">
              <img src={getImageUrl(matchedPair.female)} alt={`${matchedPair.female.roll_number}`} />
              <div className="student-details">
                <h3>{matchedPair.female.name}</h3>
                <p>Roll: {matchedPair.female.roll_number}</p>
                <p>College: {matchedPair.female.college}</p>
                <p>Mobile: {matchedPair.female.mobile}</p>
                <p>Branch: {matchedPair.female.branch}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <img src="https://media.makeameme.org/created/thats-why-im-7bfaa077eb.jpg"/>
    </>
  );
};

export default page;