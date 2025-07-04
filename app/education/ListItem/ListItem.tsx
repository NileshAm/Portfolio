import { ReactNode } from "react";

const ListItem = ({
  href,
  heading,
  children,
}: {
  href: string;
  heading: string;
  children?: ReactNode;
}) => {
  return (
    <li>
      <a href={href}>{heading}</a>
      {children}
    </li>
  );
};

export default ListItem;
