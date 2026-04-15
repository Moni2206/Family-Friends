const Button = ({ temperament }) => {
  // 👉 HER definerer du farverne
  const colors = ["bg-blue-200 text-blue-800", "bg-red-200 text-red-800", "bg-green-200 text-green-800", "bg-yellow-200 text-yellow-800"];

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {temperament.length > 0 ? (
        temperament.map((temp, i) => (
          <span
            key={i}
            // 👉 HER bruger du colors
            className={`px-3 py-1 rounded-full text-sm ${colors[i % colors.length]}`}
          >
            {temp}
          </span>
        ))
      ) : (
        <p className="text-gray-400">No temperament info</p>
      )}
    </div>
  );
};

export default Button;
