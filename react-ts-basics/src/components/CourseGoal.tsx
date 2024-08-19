// import { ReactNode } from "react";
import { type PropsWithChildren } from "react";
// import { type FC } from "react";

// interface CourseGoalProps {
//   title: string;
// //   description: string;
//   children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id: number,
  title: string,
  onDelete: (id: number) => void,
}>;

// const CourseGoal:FC<CourseGoalProps> = ({title, children}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// export default CourseGoal;

export default function CourseGoal({
  title,
//   description,
  id,
  onDelete,
  children
// }: {
//   title: string;
//   description: string;
// }) {
}: CourseGoalProps) {
  return (
    <article>
      <div>
        {/* <h2>Title</h2> */}
        <h2>{title}</h2>
        {/* <p>Description</p> */}
        {/* <p>{description}</p> */}
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
