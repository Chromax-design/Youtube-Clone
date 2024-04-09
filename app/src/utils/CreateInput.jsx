export const CreateInput = ({
  inputType,
  placeholder,
  name,
  value,
  onInputChange,
  isMobile,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onInputChange(value);
  };
  return (
    <input
      type={inputType}
      className={`text-white border-2 focus:outline-none p-2 border-[#303030] bg-[#121212]  ${
        isMobile
          ? "w-full rounded-full"
          : "w-[400px] h-full rounded-tl-full rounded-bl-full placeholder:capitalize placeholder:text-[#aaa] focus:bg-[#121212] active:bg-[#121212]"
      }`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      required
    />
  );
};
