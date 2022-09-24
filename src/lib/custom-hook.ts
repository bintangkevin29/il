import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addUser as addUserAction,
  deleteUser as deleteUserAction,
  setAllUser as setAllUserAction,
  updateUser as updateUserAction,
} from "../redux/slices/user-data.slice";

export const useUserData = () => {
  const { userData } = useAppSelector((state) => state.userData.value);
  const dispatch = useAppDispatch();
  const lsKeyName = "userData";

  const addUserData = (argUserData: UserData) => {
    dispatch(addUserAction({ ...argUserData, id: v4() }));
  };
  const updateUserData = (argUserData: UserData) => {
    dispatch(updateUserAction({ id: argUserData.id, userData: argUserData }));
  };
  const deleteUser = (userId: UserData["id"]) => {
    if (userData.length === 1 && userData.find((dt) => dt.id === userId)) {
      localStorage.setItem(lsKeyName, "[]");
    }
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

    const pageDivided = userData.length / arg.length;
    return {
      currentPageData,
      maxPage: Number.isInteger(pageDivided)
        ? pageDivided
        : Math.floor(userData.length / arg.length) + 1,
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

  return {
    userData,
    addUserData,
    deleteUser,
    getPaginatedUserData,
    updateUserData,
  };
};

export const useForm = <T>(defaultValues: T): UseFormReturn<T> => {
  const [formData, setFormData] = useState<T>(defaultValues);
  const resetForm = () => {
    setFormData(defaultValues);
  };

  return { formData, setFormData, resetForm };
};
