
import GoalItem from './GoalItem';
import React, { useState, useEffect } from 'react';
import './MyGoals.css';
import { useAppContext } from '../index.js'
import { Auth, API } from 'aws-amplify';
import CreateGoal from './CreateGoal.js';

export default function MyGoals() {
    const { isAuthenticated } = useAppContext();
    const [goals, setGoals] = useState([]);
    const [createMode, setCreateMode] = useState(false);

    //Load notes when component first loads
    useEffect(() => {
        async function loadGoals() {
            let goals = await API.get("goals", "/goals");
            setGoals(goals);
        }
        loadGoals();
        console.log(isAuthenticated)
    }, [isAuthenticated])

    function handleClick() {
        setCreateMode(true);
    }

    function renderCreate() {
        if (createMode) {
            return <CreateGoal />
        }
    }


    return (
        <div className="mt-2 container goalsList">
            <div className="row">
                <h1 className="p-2 col-md-9">My Goals</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button onClick={handleClick} type="button" className="addGoalBtn btn btn-info">Add Goal</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {goals.map((goal) => {
                       return <GoalItem goalName={goal.goalName} date={goal.dateAchieveBy} key={goal.goalId} />
                    })}
                </div>
            </div>
            {renderCreate()}
        </div>
    )


}
