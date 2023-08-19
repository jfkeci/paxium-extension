import 'react-quill/dist/quill.snow.css';
import '../../assets/css/EditorDropdown.css';

export default function EditorDropdown({
  isVisible,
  filterText,
  setFilterText,
  onSelect,
}) {
  const commands = ['bold', 'italic', 'underline', 'strike']; // Add your commands here

  const filteredCommands = filterText
    ? commands.filter((cmd) => cmd.includes(filterText))
    : commands;

  return isVisible ? (
    <div className="command-dropdown">
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search..."
      />
      {filteredCommands.map((cmd) => (
        <div key={cmd} onClick={() => onSelect(cmd)}>
          {cmd}
        </div>
      ))}
    </div>
  ) : null;
}
