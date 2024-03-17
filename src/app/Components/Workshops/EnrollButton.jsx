"use client";
const EnrollButton = ({ id, children }) => {
  return (
    <button
      type="button"
      className="relative rounded-full inline-block h-12   w-60 overflow-hidden border-sky-500 px-5 py-2 text-sky-500 shadow-lg shadow-teal-100 before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[80%] before:rounded-s-full before:bg-skin-fill before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[80%] after:rounded-e-full after:bg-skin-fill after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
    >
      {children}
    </button>
  );
};

export default EnrollButton;
