
function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
