export default function SmallButton({ link, children }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="px-6 py-2 rounded-lg bg-primary-100 hover:bg-primary-200 transition-[3s]"
    >
      {children}
    </a>
  );
}
