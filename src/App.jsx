import React, { useState, useEffect } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';
import { getGoals, createGoal, updateGoal, deleteGoal } from './api';
import './App.css'; // Make sure this file has the latest fancy Barbie styles

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals().then(data => setGoals(data));
  }, []);

  const handleAddGoal = (newGoal) => {
    createGoal(newGoal).then((savedGoal) => {
      setGoals([...goals, savedGoal]);
    });
  };

  const handleUpdateGoal = (updatedGoal) => {
    updateGoal(updatedGoal.id, updatedGoal).then((savedGoal) => {
      setGoals(goals.map(goal => goal.id === savedGoal.id ? savedGoal : goal));
    });
  };

  const handleDeleteGoal = (goalId) => {
    deleteGoal(goalId).then(() => {
      setGoals(goals.filter(goal => goal.id !== goalId));
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Smart Goal Planner</h1>

        {/* Overview stats */}
        <Overview goals={goals} />

        {/* Add new goal form */}
        <GoalForm onAdd={handleAddGoal} />

        {/* List of all goals with delete/edit */}
        <GoalList
          goals={goals}
          onUpdate={handleUpdateGoal} 
          onDeleteGoal={handleDeleteGoal}
        />

        {/* Deposit money into a goal */}
        <DepositForm
          goals={goals}
          onUpdateGoal={handleUpdateGoal}
        />
      </div>
    </div>
  );
}

export default App;
