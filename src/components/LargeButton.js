export default function LargeButton({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 rounded-lg bg-primary-100 hover:bg-primary-200 active:scale-95 transition"
    >
      {children}
    </button>
  );
}
