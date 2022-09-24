import React from "react";
import { useForm, useUserData } from "../../lib/custom-hook";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUserData(formEngine.formData);
    setShow(false);
    formEngine.resetForm();
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
