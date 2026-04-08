import { useState } from "react";
import "cally";

const CreatePaymentPage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [sender, setSender] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submission
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Create a Payment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Amount</legend>
          <input
            type="number"
            className="input w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Recurring</legend>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="toggle"
              checked={recurring}
              onChange={(e) => setRecurring(e.target.checked)}
            />
            <span>{recurring ? "True" : "False"}</span>
          </div>
        </fieldset>

        {recurring && (
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <calendar-date
              className="cally bg-base-100 border border-base-300 rounded-box"
              value={startDate}
              onChange={(
                e: React.ChangeEvent<HTMLElement & { value: string }>,
              ) => setStartDate(e.target.value)}
            >
              <svg
                aria-label="Previous"
                className="fill-current size-4"
                slot="previous"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              <svg
                aria-label="Next"
                className="fill-current size-4"
                slot="next"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <calendar-month />
            </calendar-date>
          </fieldset>
        )}

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Payment Sender</legend>
          <input
            type="text"
            className="input w-full"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </fieldset>

        <button type="submit" className="btn w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePaymentPage;
