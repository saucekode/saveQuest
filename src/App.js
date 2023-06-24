import OnboardingForm from 'components/Form';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [showForm, setShowForm] = useState()

  const handleRegister = () => {
    setShowForm(true)
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
      </div>
      }

      {showForm
        &&

        <>
        <div className='center'>Savings form</div>
        <OnboardingForm/>
        </>
        
      }
    </div>
  );
}

export default App;
