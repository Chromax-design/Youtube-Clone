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
  const inputStyle = {};

  return (
    <input
      type={inputType}
      className={`${
        isMobile
          ? "w-full p-2 rounded-full bg-[#121212] border-[#303030] border-2 focus:outline-none text-white"
          : "w-[400px] h-full bg-[#121212] rounded-tl-full rounded-bl-full placeholder:capitalize placeholder:text-[#aaa] p-2 border-[#303030] border-2 focus:outline-none text-white focus:bg-[#121212] active:bg-[#121212]"
      }`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      required
    />
  );
};
