import { PropsWithChildren } from "react";

type GoalImg = { src: string; alt: string };
type HeaderProps = PropsWithChildren<{image: GoalImg}>;

export default function Header({image, children}: HeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}
