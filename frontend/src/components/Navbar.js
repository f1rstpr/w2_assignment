export default function Navbar({ handleOnInputChange, filteredSearch }) {
  return (
    <div className="Navbar">
      search for a specific item:
      <input
        type="text"
        placeholder={`${filteredSearch}`}
        onChange={(e) => handleOnInputChange(e.target.value)}
      />
    </div>
  );
}
