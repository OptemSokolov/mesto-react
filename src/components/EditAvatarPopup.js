import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = ''
  }

  return (
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={props.isOpen}
          onClose={props.onClose}
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
            ref={avatarRef}
          />
          <span className="popup__error" id="avatar-link-error"></span>
        </PopupWithForm>
  );
}

export default EditAvatarPopup;