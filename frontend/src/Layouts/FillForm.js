import SelectForm from "../Components/SelectForm";

const FillForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center flex-col container pt-4">
        <SelectForm label="Job Knowledge" />
        <SelectForm label="Problem Solving Ability" />
        <SelectForm label="Productivity" />
        <SelectForm label="Cummunication Skill" />
        <SelectForm label="Leadership" />
        <SelectForm label="Creativity/Integrity" />
        <SelectForm label="Achievement" />
        <SelectForm label="Projects" />
      </div>
      <button className="text-lg font-bold bg-orange-500 rounded-full px-8 py-1 text-white">
        Submit
      </button>
    </>
  );
};

export default FillForm;
