type ButtonProps = {
  onClick: () => void;
  label: string;
};

export default function Button({onClick, label}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 px-4 py-2 rounded text-white mt-4">
      {label}
    </button>
  );
}
