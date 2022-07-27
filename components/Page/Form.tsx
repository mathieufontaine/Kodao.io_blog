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
    <div className="container">
      <div className="max-w-4xl mx-auto">
        {submitted ? (
          <div className="form_success">
            <h2>Comment Submitted!</h2>
            <p>Once apporoved it will appear below</p>
          </div>
        ) : (
          <>
            <h3 className="text-center text-lg md:text-xl">
              Did you like this article?
            </h3>
            <h4 className="text-accent text-center text-lg md:text-xl">
              Leave a comment!
            </h4>
            <form
              className="bg-gray-200 mt-8 p-6 text-sm lg:border-r-1 lg:border-accent"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input {...register("_id")} type="hidden" name="_id" value={id} />
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-2">Name:</span>
                  <input
                    {...register("name", { required: true })}
                    className="mt-2 bg-white p-3 outline-none w-full placeholder:text-gray-400"
                    placeholder="Mathieu Fontaine"
                    type="text"
                  />
                  {errors.name && (
                    <span className="text-red-400 my-3 italic">
                      Name is required
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="mb-2">Email:</span>
                  <input
                    {...register("email", { required: true })}
                    className="mt-2 bg-white p-3 outline-none w-full placeholder:text-gray-400"
                    placeholder="mathieu@kodao.io"
                    type="email"
                  />
                  {errors.email && (
                    <span className="text-red-400 my-3 italic">
                      Email is required
                    </span>
                  )}
                </label>
              </div>

              <label className="block mt-5">
                <span className="mt-4 mb-2">Comment:</span>
                <textarea
                  {...register("comment", { required: true })}
                  placeholder="Web3 is amazing!"
                  className="mt-2 bg-white p-3 outline-none w-full placeholder:text-gray-400"
                  name="comment"
                  // cols={90}
                  rows={4}
                ></textarea>
                {errors.comment && (
                  <span className="text-red-400 my-3 italic">
                    Comment is empty
                  </span>
                )}
              </label>
              <input className="mt-5 btn btn-sm" type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;