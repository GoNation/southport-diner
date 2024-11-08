import React from 'react';
import buildAvatar from 'helpers/general/buildAvatar';
import buildCover from 'helpers/general/buildCover';

export default function GiftCardForm({
  business,
  customDescription = '',
  formFields = [],
  formName = '',
}) {
  return (
    <section className=" text-dark  ">
      <div className="mt-12">
        <div className="lg:flex">
          <div
            className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto"
            x-data="{ card: true }"
          >
            <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
              <div className="text-center mb-6">
                <div className="mb-2">
                  {/* <img
                    className="-mt-8 inline-flex rounded-full"
                    src={buildAvatar(business)}
                    width="64"
                    height="64"
                    alt="User"
                  /> */}
                </div>
                <h1 className="text-4xl font-display  leading-snug text-gray-800 font-semibold mb-2">
                  {business.name}
                </h1>
                <div className="text-sm leading-loose">
                  {customDescription || business.desc}
                </div>
              </div>

              <div x-show="card">
                <form
                  name={formName || 'contact'}
                  method="POST"
                  data-netlify="true"
                  className=" flex flex-wrap py-2"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value={formName || 'contact'}
                  />
                  {formFields.map(
                    ({ name, id, label, placeholder, type, sectionTitle }) =>
                      sectionTitle ? (
                        <h1 className="text-xl leading-snug text-gray-800 font-semibold mt-4">
                          {sectionTitle}
                        </h1>
                      ) : (
                        formInput(type, name, label, id, placeholder)
                      )
                  )}
                  <div className="mt-6 w-full">
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="font-medium text-base inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-primary hover:bg-primary text-dark focus:outline-none focus-visible:ring-2 uppercase  tracking-widest"
                      >
                        Send
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 italic text-center"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function formInput(type, name, label, id, placeholder) {
    return (
      <div
        className={`${
          ['textarea'].includes(type)
            ? 'w-full px-2 py-2'
            : 'w-full md:w-1/2 px-2 py-2'
        }`}
      >
        <label
          className="block text-sm font-medium mb-1"
          htmlFor={name}
          type={type || 'text'}
        >
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          id={id}
          name={name}
          className={`text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full`}
          type={type && 'textarea'}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

{
  /* <div className="flex justify-center mb-6">
                <div className="relative flex w-full p-1 bg-gray-50 rounded">
                  <span
                    className="absolute inset-0 m-1 pointer-events-none"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out"></span>
                  </span>
                  <button className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                    Pay With Card
                  </button>
                  <button className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                    Pay With PayPal
                  </button>
                </div>
              </div> */
}
