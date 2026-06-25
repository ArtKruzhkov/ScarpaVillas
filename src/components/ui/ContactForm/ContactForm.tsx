import React from 'react';

const interests = [
  'Villa Rental',
  'Borgo Experience',
  'Events & Celebrations',
  'Long-Term Stays',
  'Other',
];

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  return (
    <form className="w-full max-w-[1120px] bg-white px-8 py-10 lg:px-12 lg:py-12">
      {/* Header */}
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 h-px w-[45%] bg-[#2C3654]" />

        <img
          src={`${process.env.PUBLIC_URL}/images/contactModal/logo_modal.svg`}
          alt="Scarpa"
          className="h-12"
        />

        <div className="absolute right-0 h-px w-[45%] bg-[#2C3654]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-[-10px] text-[48px] font-semibold leading-none text-[#2C3654] transition-opacity hover:opacity-60"
          aria-label="Close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C3654"
            strokeWidth="1.5"
            strokeLinecap="round">
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h2 className="mx-auto mt-4 max-w-[760px] text-center font-serif text-[36px] leading-[42px] text-[#2C3654]">
        Tell us about your plans, and we will create the perfect Italian experience for you.
      </h2>

      {/* Interests */}
      <div className="mt-8">
        <p className="mb-4 font-sans text-[15px] font-semibold uppercase tracking-[0.18em] text-[#2C3654]">
          What are you interested in?
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4 font-sans">
          {interests.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-[14px] text-[#2C3654]">
              <input type="checkbox" className="h-[16px] w-[16px] border border-[#2C3654]" />

              {item}
            </label>
          ))}
        </div>

        <div className="mt-3 h-px bg-[#2C3654]" />
      </div>

      {/* Details */}
      <div className="mt-6">
        <p className="mb-4 font-sans text-[15px] font-semibold uppercase tracking-[0.18em] text-[#2C3654]">
          Your Details
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 font-sans text-[#2C3654]">
          <input
            type="text"
            placeholder="Name"
            className="h-[54px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="h-[54px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="h-[54px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-6 font-sans">
        <p className="mb-4 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#2C3654]">
          Message
        </p>

        <textarea
          rows={2}
          placeholder="Share a few details about your travel dates, group size, or any special requests."
          className="text-[#2C3654] w-full resize-none border border-[#2C3654] bg-transparent p-5 placeholder:text-center placeholder:text-[#BFBFBF] focus:outline-none"
        />
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="min-w-[440px] bg-[#2C3654] px-10 py-4 font-sans text-[16px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#404B73]">
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
