export default function Link({href, label}: any) {
  return (
    <a href={href} className="text-blue-500 underline">
      {label}
    </a>
  );
}
