// import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalRecord = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoal] = useState<CourseGoalRecord[]>([]);
  
  function handleAddGoal(goal:string, summary: string) {
    setGoal((prevGoals) => {
      const newGoal: CourseGoalRecord = {
        id: Math.random(),
        // title: 'Learn React + TS',
        // description: 'Learn in in depth'
        title: goal,
        description: summary
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoal((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  // return <h1>Let's get started!</h1>;
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal addGoal={handleAddGoal}/>
      {/* <CourseGoal
        title="Learn React + TS"
        // description="Learn it from the ground up"
        // id = {1}
      >
        <p>Learn it from the ground up</p>
      </CourseGoal> */}
      {/* <CourseGoal /> */}
      {/* <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>
                {goal.description}
              </p>
            </CourseGoal>
          </li>
        ))}
      </ul> */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
