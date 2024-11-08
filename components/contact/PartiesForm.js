import NetlifyForm from './NetlifyForm';

export default function PartiesForm({ title = 'Parties', desc }) {
  return (
    <div className="flex justify-center items-center bg-lighter p-4 lg:py-12">
      <NetlifyForm name="genericContactForm">
        <h2 className="text-center text-2xl font-bold font-display uppercase mb-4 lg:text-xl xl:text-4xl">
          {title}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Phone"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="text"
            name="Type of Event"
            placeholder="Type of Event"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="number"
            name="Approximate Headcount"
            placeholder="Approximate Headcount"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="text"
            name="Preferred Date(s)"
            placeholder="Preferred Date(s)"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="text"
            name="Time of Event"
            placeholder="Time of Event"
            className="w-full p-2 border border-secondary rounded"
          />

          <textarea
            name="Comments, Questions, Any Details"
            placeholder="Comments, Questions, Any Details"
            rows="5"
            className="w-full p-2 border border-secondary rounded"
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-primary text-background rounded"
          >
            Submit
          </button>
        </div>
      </NetlifyForm>
    </div>
  );
}
