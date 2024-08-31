import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  addGoal: (goal: string, summary: string) => void
}

export default function NewGoal({addGoal} : NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // new FormData(event.currentTarget);

    const enteredGoal = goal.current!.value;
    const enteredSummary = goal.current!.value;
    addGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" name="goal" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" name="summary" ref={summary}></input>
      </p>
      <button>Add Goal</button>
    </form>
  );
}
