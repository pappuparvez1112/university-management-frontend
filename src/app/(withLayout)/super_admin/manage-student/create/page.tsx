"use client";
import StepperForm from "@/components/stepperForm/StepperForm";
import GuardianInfo from "@/components/studentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/studentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/studentForms/StudentBasicInfo";
import StudentInfo from "@/components/studentForms/StudentInfo";

const steps = [
  {
    title: "Student Information",
    content: <StudentInfo />,
  },
  {
    title: "Student Basic Information",
    content: <StudentBasicInfo />,
  },
  {
    title: "Guardian Info",
    content: <GuardianInfo />,
  },
  {
    title: "LocalGuardian Info",
    content: <LocalGuardianInfo />,
  },
];
const handleStudentSubmit = async (data: any) => {
  try {
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
const CreatePage = () => {
  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreatePage;
