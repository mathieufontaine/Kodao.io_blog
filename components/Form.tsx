import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
  id: string;
}

const Form: React.FC<FormProps> = ({ id }) => {
  const [submitted, setSubmitted] = useState(false);

  interface IFormInput {
    _id?: string;
    name?: string;
    email?: string;
    comment?: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      setSubmitted(false);
    }
  };

  return (
    <div className="form_container">
      {submitted ? (
        <div className="form_success">
          <h2>Comment Submitted!</h2>
          <p>Once apporoved it will appear below</p>
        </div>
      ) : (
        <>
          <h3 className="form_heading">Vous avez aimé cet article?</h3>
          <h4 className="form_subheading">Laissez un commentaire !</h4>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("_id")} type="hidden" name="_id" value={id} />
            <label className="form_label">
              <span className="form_span">Nom :</span>
              <input
                {...register("name", { required: true })}
                className="form_input"
                placeholder="Mathieu Fontaine"
                type="text"
              />
              {errors.name && (
                <span className="form_error">- Le nom est requis</span>
              )}
            </label>
            <label className="form_label">
              <span className="form_span">Email :</span>
              <input
                {...register("email", { required: true })}
                className="form_input"
                placeholder="mathieu@kodao.io"
                type="email"
              />
              {errors.email && (
                <span className="form_error">- L&apos;email est requis</span>
              )}
            </label>
            <label className="form_label">
              <span className="form_span">Commentaire :</span>
              <textarea
                {...register("comment", { required: true })}
                placeholder="Web3 is amazing!"
                className="form_input"
                name="comment"
                cols="90"
                rows="8"
              ></textarea>
              {errors.comment && (
                <span className="form_error">- Le commentaire est vide</span>
              )}
            </label>
            <input
              className="button button--small"
              type="submit"
              value="Envoyer"
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
