export default function Input({value, onChangeText}: any) {
  return (
    <input
      value={value}
      onChange={e => onChangeText(e.target.value)}
      placeholder="웹에서 입력"
      className="border border-gray-300 rounded-md p-2 text-base"
    />
  );
}
