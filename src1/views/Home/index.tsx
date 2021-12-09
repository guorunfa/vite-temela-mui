import { ClassAttributes, HTMLAttributes } from "react";

export default function Home(
  props: ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptatum.
      </p>
    </div>
  );
}
