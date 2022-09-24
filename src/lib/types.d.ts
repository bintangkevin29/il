interface UserData {
  id: string;
  nama: string;
  pekerjaan: string;
  alamat: string;
  tanggalLahir: string;
}

interface UseFormReturn {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  resetForm: () => void;
}
