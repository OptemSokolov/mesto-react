import React from "react";
import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onUpdateAvatar, onClose}) {

  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  React.useEffect(() => {
    ref.current.value = ""
  }, [isOpen])

  return (
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={isOpen}
          onClose={onClose}
          btnText="Сохранить"
          onSubmit={handleSubmit}
        >
          <input
            id="avatar-link" 
            className="popup__input" 
            name="avatar" 
            type="url" 
            placeholder="Ссылка на картинку"
            required
            ref={ref}
          />
          <span className="popup__error" id="avatar-link-error"></span>
        </PopupWithForm>
  );
}

export default EditAvatarPopup;