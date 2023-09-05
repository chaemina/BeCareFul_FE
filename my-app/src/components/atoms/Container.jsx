const Container = ({ children, className }) => {
  return (
    <div
      className={`border w-full h-full flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
