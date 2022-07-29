import { useUpdateMeData, useGetToken } from "hooks/atom";
import { updateMeDate } from "lib/api";
import css from "./editMeComp.css";
import React from "react";
import { InputCompUI } from "ui/input-text/InputText";
import { ButtonComp } from "ui/button/Button";
ButtonComp;
InputCompUI;

function EditMeComp() {
  const token = useGetToken();
  const [meData, setMeData] = useUpdateMeData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const changesData = await updateMeDate(email, name, token);
    if (changesData) {
      setMeData({ email, name });
      alert("cambios realizados");
    }
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputCompUI type="text" name="email" placeholder={meData.email} />
        <InputCompUI type="text" name="name" placeholder={meData.name} />
        <ButtonComp>Modificar</ButtonComp>
      </form>
    </div>
  );
}
export { EditMeComp };