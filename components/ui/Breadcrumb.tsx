import type { FC } from "react";

interface IProps {
  items: string[];
}

const Breadcrumb: FC<IProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center">
        {items.map((item, index) => (
          <li
            className={`font-medium last-of-type:font-bold after:content-['/'] last-of-type:after:content-[''] after:mx-[6px]`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
