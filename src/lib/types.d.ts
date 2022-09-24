interface UserData {
  id: string;
  nama: string;
  pekerjaan: string;
  alamat: string;
  tanggalLahir: string;
}

interface UseFormReturn<T = any> {
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  resetForm: () => void;
}

interface GetPaginatedUserDataProps {
  length: number;
  page: number;
}

interface UserInterfaceData {
  show: boolean;
  updateData?: UserData;
  page: number;
}
