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
    <li className="md:text-sm text-xs">
      <a href={href}>{heading}</a>
      {children}
    </li>
  );
};

export default ListItem;
