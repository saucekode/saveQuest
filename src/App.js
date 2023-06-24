import OnboardingForm from 'components/Form';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [showForm, setShowForm] = useState()
  const [userRecord, setUserRecords] = useState([])

  const handleRegister = () => {
    setShowForm(true)
  }

  const handleCustomerRecords = () => {

    setShowForm(false)
    const users = localStorage.getItem("users");
    if(users){
      setUserRecords(JSON.parse(users))
    }
  }

  return (
    <div className="App">
      {

        !showForm
        &&
        <div className="p-top center">
        <p className="heading">Welcome to SaveQuest</p>
        <p className='sub-heading'>SaveQuest is a savings application that earns you profit in a week period.</p>
        <buton className="save-btn" onClick={handleRegister}>Start Saving Now</buton>
        <button className="view-btn">View Savings Records</button>
      </div>
      }

      {showForm
        ?

        <>
        <div className='center form-heading'>Savings form</div>
        <div  className='form'>
        <OnboardingForm/>
        </div>
        </>
        
        :

        <>
        {}
        </>
      }
    </div>
  );
}

export default App;
