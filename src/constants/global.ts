export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];
export const departmentOptions = [
  {
    label: "HR",
    value: "hr manager",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Management Department",
    value: "management department",
  },
];
export const bloodGroupOptions = [
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "O-",
    value: "O-",
  },
];

export const academicFacultyOptions = [
  {
    label: "Engineering",
    value: "engineering",
  },
  {
    label: "Faculty of science and engineering",
    value: "faculty of science and engineering",
  },
];
export const academicDepartmentOptions = [
  {
    label: "CSE",
    value: "cse",
  },
  {
    label: "Software engineering",
    value: "software engineering",
  },
];
export const academicSemesterOptions = [
  {
    label: "Fall 2023",
    value: "fall 2023",
  },
  {
    label: "Autumn 2023",
    value: "autumn 2023",
  },
  {
    label: "Summer 2023",
    value: "summer 2023",
  },
];

// export const acSemesterOptions = [
//   {
//     label: "Fall",
//     value: "fall",
//   },
//   {
//     label: "Autumn",
//     value: "autumn",
//   },
//   {
//     label: "Summer",
//     value: "summer",
//   },
// ];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});
