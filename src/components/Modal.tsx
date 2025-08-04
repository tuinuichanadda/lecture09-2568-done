import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //pnpm install uuid
import { type TaskCardProps } from "../libs/Todolist";
//
type props = {
  onAdd: (todo: TaskCardProps) => void;
};
//1.สร้าง modal ก่อน
export default function Modal({ onAdd }: props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //4.ใช้ usestate reset value
  const handleSubmit = () => {
    if (title.trim()) {
      const newtodo = {
        //เตรียมส่ง prop อันใหม่
        id: uuidv4(),
        title,
        description,
        isDone: false,
      };
      onAdd(newtodo); // เรียกฟังก์ชันที่รับมาจาก props
      setTitle("");
      setDescription("");
    }
  };
  //3. Onchange text ให้เรียบร้อย
  const titleOnchange = (event: any) => {
    setTitle(event.target.value);
  };

  const descriptionOnchang = (event: any) => {
    setDescription(event.target.value);
  };

  return (
    <div className="modal fade" id="todoModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo List</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title Todo"
              value={title}
              onChange={titleOnchange}
            />
            <textarea
              className="form-control"
              placeholder="description..."
              value={description}
              onChange={descriptionOnchang}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="closeModal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              //2. กด save
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
