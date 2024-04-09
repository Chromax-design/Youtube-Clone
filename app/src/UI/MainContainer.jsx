export const MainContainer = ({ children, className }) => {
  return (
    <main className={`mx-auto min-h-[100vh] bg-black ${className}`}>
      {children}
    </main>
  );
};
