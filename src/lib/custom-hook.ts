import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addUser as addUserAction,
  deleteUser as deleteUserAction,
  setAllUser as setAllUserAction,
} from "../redux/user-data/user-data.slice";

export const useUserData = () => {
  const userData = useAppSelector((state) => state.userData.value);
  const dispatch = useAppDispatch();
  const lsKeyName = "userData";

  const addUserData = (argUserData: UserData) => {
    dispatch(addUserAction(argUserData));
  };
  const deleteUser = (userId: UserData["id"]) => {
    dispatch(deleteUserAction(userId));
  };
  const setAllUser = (argUserData: UserData[]) => {
    dispatch(setAllUserAction(argUserData));
  };
  const getPaginatedUserData = (arg: GetPaginatedUserDataProps) => {
    const firstIndex = (arg.page - 1) * arg.length;
    const lastIndex = arg.page * arg.length - 1;

    const currentPageData = userData.filter(
      (dt, i) => i >= firstIndex && i <= lastIndex
    );
    return {
      currentPageData,
      maxPage: Math.floor(userData.length / arg.length),
      startIndex: firstIndex + 1,
    };
  };

  useEffect(() => {
    const lsUserData: UserData[] = JSON.parse(
      localStorage.getItem(lsKeyName) || "[]"
    );
    if (!userData.length && lsUserData.length) {
      setAllUser(lsUserData);
    } else if (userData.length) {
      localStorage.setItem(lsKeyName, JSON.stringify(userData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return { userData, addUserData, deleteUser, getPaginatedUserData };
};

export const useForm = <T>(defaultValues: T): UseFormReturn => {
  const [formData, setFormData] = useState(defaultValues);
  const resetForm = () => {
    setFormData(defaultValues);
  };

  return { formData, setFormData, resetForm };
};
