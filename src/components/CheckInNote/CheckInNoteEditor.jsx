import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useState } from 'react';
import EditorDropdown from '../Editor/EditorDropdown';

/* CheckInNoteEditorProps {
  config: {
    value: string;
    onUpdate: (newValue: string) => void;
  };
} */

export default function CheckInNoteEditor(props) {
  const quillRef = useRef(null);

  const [isCommandDropdownShown, setIsCommandDropdownShown] = useState(false);
  const [filterText, setFilterText] = useState('');

  // eslint-disable-next-line react/prop-types
  const config = { ...props.config };

  const handleCommandSelect = (cmd) => {
    console.log('Command selected:', cmd);
    setIsCommandDropdownShown(false);
    setFilterText('');
    // Apply the command logic here if needed
  };

  /**
   * Checks if the char to the left of the cursor is a frontslash ("/")
   * - if yes, show command dropdown
   */
  const checkCommandPrompt = () => {
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();
    if (range && range.index > 0) {
      const charBeforeCursor = quill.getText(range.index - 1, 1);
      if (charBeforeCursor === '/') {
        console.log('show');
        setIsCommandDropdownShown(true);
      } else {
        console.log('hide');
        setIsCommandDropdownShown(false);
      }
    }
  };

  const handleEditorChange = (newValue) => {
    console.log('newValue', newValue);
    console.log('isCommandDropdownShown', isCommandDropdownShown);

    checkCommandPrompt();

    config.onUpdate(newValue);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={config.value}
        onChange={handleEditorChange}
        style={{ height: '250px', width: '400px' }}
      />

      <EditorDropdown
        isVisible={isCommandDropdownShown}
        filterText={filterText}
        setFilterText={setFilterText}
        onSelect={handleCommandSelect}
      />
    </div>
  );
}
