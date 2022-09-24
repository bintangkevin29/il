import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { setSort } from "../../redux/slices/user-data.slice";
import "./td-sortable.style.scss";

interface TDSortableProps {
  sortBy: keyof UserData;
  children: React.ReactNode;
}

const TDSortable: React.FC<TDSortableProps> = ({
  sortBy: propsSortBy,
  children,
}) => {
  const { direction, sortBy } = useAppSelector((state) => state.userData.value);
  const dispatch = useDispatch();

  return (
    <td
      className="td-sortable"
      role="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(
          setSort({
            direction: direction === "asc" ? "desc" : "asc",
            sortBy: propsSortBy,
          })
        );
      }}
    >
      {children}
      <i
        className={`fa ${
          sortBy === propsSortBy
            ? `fa-chevron-${direction === "asc" ? "down" : "up"}`
            : ""
        }`}
      />
    </td>
  );
};

export default TDSortable;
