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

  return { userData, addUserData, deleteUser };
};

export const useForm = <T>(defaultValues: T): UseFormReturn => {
  const [formData, setFormData] = useState(defaultValues);
  const resetForm = () => {
    setFormData(defaultValues);
  };

  return { formData, setFormData, resetForm };
};
