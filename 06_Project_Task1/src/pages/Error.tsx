import { useNavigate, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(error);
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <button
            onClick={handleGoBack}
            className="inline-flex border border-brightRed dark:border-brightRedLight font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};
