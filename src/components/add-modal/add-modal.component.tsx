import {
  randAddress,
  randBetweenDate,
  randFullName,
  randJobTitle,
} from "@ngneat/falso";
import React from "react";
import { v4 } from "uuid";
import { useForm, useUserData } from "../../lib/custom-hook";
import { formatDate } from "../../lib/helper";
import Button from "../button/button.component";
import Heading from "../heading/heading.component";
import Input from "../input/input.component";
import "./add-modal.style.scss";

interface AddModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdate?: boolean;
}

const AddModal: React.FC<AddModalProps> = ({ show, setShow, isUpdate }) => {
  const { addUserData } = useUserData();
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
    addUserData(argFormData || formEngine.formData);
    setShow(false);
    formEngine.resetForm();
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

  return show ? (
    <div className={`add-modal`}>
      <div className="add-modal__modal">
        <Heading>Add User</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            required={!isUpdate}
            name="nama"
            formEngine={formEngine}
            label="Nama"
          />
          <Input
            required={!isUpdate}
            name="alamat"
            label="Alamat"
            formEngine={formEngine}
          />
          <Input
            required={!isUpdate}
            name="pekerjaan"
            label="Pekerjaan"
            formEngine={formEngine}
          />
          <Input
            required={!isUpdate}
            name="tanggalLahir"
            type="date"
            label="Tanggal Lahir"
            formEngine={formEngine}
          />
          <div className="add-modal__button-group">
            <Button
              type="submit"
              size="lg"
              theme="primary"
              className="add-modal__button"
            >
              Simpan
            </Button>
            <Button
              onClick={handleRandomise}
              size="lg"
              theme="default"
              className="add-modal__button"
            >
              Randomise
            </Button>
            <Button
              onClick={() => setShow(false)}
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
