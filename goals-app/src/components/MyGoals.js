
import GoalItem from './GoalItem'
import React, { useState } from 'react'
export default function MyGoals() {
    const goalItems = []
    const goals = [
        {
            name: 'Get an internship',
            date: '05/01/2021',
        },
        {
            name: 'Get a life',
            date: '05/08/2021',
        }
    ]

    for (let goal of goals) {

        goalItems.push(<GoalItem goalName={goal.name} date={goal.date} key={goal.name} />)
    }
    return (
        <div className="mt-2 container">
            <h1 className="p-2">My Goals</h1>
            <div className="row">
                <div className="col-md-7">
                <button type="button" className="ml-3 btn btn-info">Add Goal</button>
                    {goalItems}
                </div>
                <div className="col-md-4">
                    third side
            </div>
            </div>

        </div>


    )


}
