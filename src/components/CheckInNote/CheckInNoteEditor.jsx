import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/* CheckInNoteEditorProps {
  config: {
    value: string;
    onUpdate: (newValue: string) => void;
  };
} */

export default function CheckInNoteEditor(props) {
  // eslint-disable-next-line react/prop-types
  const config = { ...props.config };

  return (
    <ReactQuill theme="snow" value={config.value} onChange={config.onUpdate} />
  );
}
