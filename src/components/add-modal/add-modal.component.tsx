import {
  randAddress,
  randBetweenDate,
  randFullName,
  randJobTitle,
} from "@ngneat/falso";
import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useForm, useUserData } from "../../lib/custom-hook";
import { formatDate } from "../../lib/helper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hide as hideModal } from "../../redux/slices/table.slice";
import Button from "../button/button.component";
import Heading from "../heading/heading.component";
import Input from "../input/input.component";
import "./add-modal.style.scss";

const userDataDefaultValues: UserData = {
  nama: "",
  alamat: "",
  id: "",
  pekerjaan: "",
  tanggalLahir: "",
};

const AddModal: React.FC = () => {
  const { addUserData, updateUserData } = useUserData();
  const { show, updateData } = useAppSelector((state) => state.table.value);
  const dispatch = useAppDispatch();
  const formEngine = useForm<UserData>({
    nama: "",
    alamat: "",
    id: "",
    pekerjaan: "",
    tanggalLahir: "",
  });

  const handleSubmit = (
    e?: React.FormEvent<HTMLFormElement>,
    argFormData?: UserData
  ) => {
    if (e) e.preventDefault();
    const finalFormData = argFormData || formEngine.formData;
    if (!updateData) {
      addUserData(finalFormData);
    } else {
      updateUserData(finalFormData);
    }
    formEngine.resetForm();
    dispatch(hideModal());
  };

  const handleRandomise = () => {
    const tempFormData = {
      alamat: randAddress().street,
      nama: randFullName(),
      id: v4(),
      pekerjaan: randJobTitle(),
      tanggalLahir: formatDate(
        randBetweenDate({
          from: new Date("10/07/1900"),
          to: new Date(),
        })
      ),
    };
    handleSubmit(undefined, tempFormData);
  };

  useEffect(() => {
    formEngine.setFormData(updateData || userDataDefaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);

  return show ? (
    <div className={`add-modal`}>
      <div className="add-modal__modal">
        <Heading>Add User</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            required={!updateData}
            name="nama"
            formEngine={formEngine}
            label="Nama"
          />
          <Input
            required={!updateData}
            name="alamat"
            label="Alamat"
            formEngine={formEngine}
          />
          <Input
            required={!updateData}
            name="pekerjaan"
            label="Pekerjaan"
            formEngine={formEngine}
          />
          <Input
            required={!updateData}
            name="tanggalLahir"
            type="date"
            label="Tanggal Lahir"
            formEngine={formEngine}
          />
          <div className="add-modal__button-group">
            <Button
              type="submit"
              size="lg"
              theme="success"
              className="add-modal__button"
            >
              Simpan
            </Button>
            <Button
              onClick={handleRandomise}
              size="lg"
              theme="primary"
              className="add-modal__button"
            >
              Randomise
            </Button>
            <Button
              onClick={() => dispatch(hideModal())}
              size="lg"
              theme="danger"
              className="add-modal__button"
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AddModal;
