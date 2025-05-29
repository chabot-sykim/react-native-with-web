export default function AppModal({visible, onClose}: any) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-md">
        <p>웹 모달입니다</p>
        <button onClick={onClose} className="text-blue-500 mt-4">
          닫기
        </button>
      </div>
    </div>
  );
}
