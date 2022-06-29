import React from "react";

const Form = () => {
  return (
    <form className="form">
      <label className="form_label">
        <span className="form_span">Nom :</span>
        <input
          className="form_input"
          placeholder="Mathieu Fontaine"
          type="text"
        />
      </label>
      <label className="form_label">
        <span className="form_span">Email :</span>
        <input
          className="form_input"
          placeholder="mathieu@kodao.io"
          type="text"
        />
      </label>
      <label className="form_label">
        <span className="form_span">Commentaire :</span>
        <textarea
          placeholder="Web3 is amazing!"
          className="form_input"
          name=""
          id=""
          cols="90"
          rows="8"
        ></textarea>
      </label>
      <button className="button button--small" type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default Form;
