import React, { useRef } from "react";

interface TodosFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodosFormProps> = ({ onAdd }) => {
  const inpRef = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (inpRef.current!.value.trim().length > 0) {
        onAdd(inpRef.current!.value);
        inpRef.current!.value = "";
        inpRef.current!.classList.remove("active");
        document.querySelector(".err-text")?.classList.remove("active");
      } else {
        inpRef.current!.classList.add("active");
        document.querySelector(".err-text")?.classList.add("active");
      }
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        placeholder="Введите свою задачу..."
        onKeyPress={keyPressHandler}
        ref={inpRef}
        className="todo-input"
      />
      <span className="err-text">Ошибка! Введите свою задачу. </span>
    </div>
  );
};
