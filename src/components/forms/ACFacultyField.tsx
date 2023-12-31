import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultiesApi";
import FormSelectField, { SelectOptions } from "./FormSelectFields";

type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACFacultyField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  console.log(academicFaculties);
  const acFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });
  console.log(acFacultyOptions);

  return (
    <FormSelectField
      name={name}
      label={label}
      options={acFacultyOptions as SelectOptions[]}
    />
  );
};

export default ACFacultyField;
