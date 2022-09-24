import React, { useState } from "react";
import "./td-sortable.style.scss";

interface TDSortableProps {
  sortBy: keyof UserData;
  children: React.ReactNode;
}

const TDSortable: React.FC<TDSortableProps> = ({ sortBy, children }) => {
  const [ascending, setAscending] = useState<boolean>(true);
  return (
    <td className="td-sortable" onClick={() => setAscending(!ascending)}>
      {children}
      <i className={`fa fa-chevron-${ascending ? "down" : "up"}`} />
    </td>
  );
};

export default TDSortable;
