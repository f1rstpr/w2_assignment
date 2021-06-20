export default function Searchbar({ handleOnInputChange, filteredSearch }) {
  return (
    <div className="Navbar">
      <input
        type="text"
        placeholder={`${filteredSearch}`}
        onChange={(e) => handleOnInputChange(e.target.value)}
      />
    </div>
  );
}
