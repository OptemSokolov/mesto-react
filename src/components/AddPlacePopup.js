import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleNameChange(e) {
      setName(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({
        name: name,
        link: link,
      });
    }
    
    React.useEffect(() => {
      setName('');
      setLink('');
    }, [props.isOpen]); 


  return (
    <PopupWithForm
      name="add-photo"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      btnText="Сохранить"
      onSubmit={handleSubmit}
    >
      
    <input
      id="place-name" 
      className="popup__input" 
      name="name"
      type="text" 
      placeholder="Название" 
      minLength="2" 
      maxLength="30" 
      required 
      autoFocus
      pattern="^[a-zA-Zа-яА-я-\s]+$"
      onChange={handleNameChange}
      value={name ?? ''}
     />
     <span className="popup__error" id="place-name-error"></span>
     <input
       id="place-link" 
       className="popup__input" 
       name="link" 
       type="url" 
       placeholder="Ссылка на картинку"
       required
       onChange={handleLinkChange}
       value={link ?? ''}
     />
     <span className="popup__error" id="place-link-error"></span>
    
    </PopupWithForm>
  );
}

export default AddPlacePopup;