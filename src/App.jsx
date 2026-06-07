import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function BMIIcon() {
  return (
    <svg className="bmi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#eef2ff" />
      <path d="M6 15c1.333-2 3.333-3 6-3s4.667 1 6 3" stroke="#6366f1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="2" fill="#6366f1" />
    </svg>
  )
}

function App() {
  // Initialize States
  const [count, setCount] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBMI] = useState('')
  const [message, setMessage] = useState('')

  // Logic

  // Reload Function
  const reload = (e) => {
    e.preventDefault();
    setWeight(0);
    setHeight(0);
    setBMI('');
    setMessage('');
  };

  // Calculate BMI
  let calcBMI = (e) => {
    e.preventDefault();
    if(weight == 0  || height == 0){
      alert('Please enter a valid weight and height');
    }else{
      let bmi = (weight/(height*height) * 703);
      // set BMI
      setBMI(bmi.toFixed(1));

      // set message
      if(bmi < 25){
        setMessage('You are underWeight');
      }else if(bmi >= 25 && bmi < 30 ){
        setMessage('You are healthy weight');
      }else{
        setMessage('You are overweight');
      }
    }
  }

  return (
    <>
      <div className='App'>
        <div className="container">
          <div className="header">
            <div className="title">
              <BMIIcon />
              <h2>BMI Calculator</h2>
            </div>
          </div>
          <form action="">
            <div>
              <label htmlFor="weight">Weight (IBS)</label>
              <input type="text" name="" id="weight" placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label htmlFor="height">Height (In)</label>
              <input type="text" name="" id="height" placeholder='Enter height value' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
              <button className="btn" type="submit" onClick={calcBMI}>Calculate</button>
              <button className="btn btn-outline" onClick={reload} type='submit'>Reload</button>
            </div>
            <div className="center">
              <h3 className="message">
                Your BMI is: {bmi}
              </h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
