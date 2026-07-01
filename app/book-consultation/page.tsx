"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
  caseType: string;
  date: string;
  time: string;
  details: string;
}

const caseTypes = [
  "Civil Law",
  "Criminal Law",
  "Family Law",
  "Property Law",
  "Consumer Law",
  "Labour Law",
  "Cyber Law",
  "Documentation",
  "Legal Advisory"
];

export default function BookConsultationPage() {
  const { register, handleSubmit, reset } = useForm<BookingFormValues>();
  const [success, setSuccess] = useState(false);

  const onSubmit = (values: BookingFormValues) => {
    console.log("Booking submitted", values);
    setSuccess(true);
    reset();
  };

  return (
    <main className="py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Book Consultation</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Schedule your premium legal appointment.</h1>
          <p className="mt-6 text-white/70 leading-8">Select a date and time for a confidential consultation with Advocate Venkatesh. We will confirm promptly.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-white/10 bg-black/60 p-10 shadow-soft">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            />
            <select
              {...register("caseType", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            >
              <option value="">Select Case Type</option>
              {caseTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="date"
              {...register("date", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            />
            <input
              type="time"
              {...register("time", { required: true })}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
            />
          </div>
          <textarea
            placeholder="Case Details"
            rows={6}
            {...register("details", { required: true })}
            className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-gold"
          />
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95">
            Confirm Appointment
          </button>
          {success && (
            <div className="rounded-3xl border border-gold/20 bg-gold/10 p-5 text-center text-sm text-white">
              Your appointment request has been sent. Our office will contact you shortly to confirm the booking.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
