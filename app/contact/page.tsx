"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xxxxxx";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xxxxxx";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message
      }, EMAILJS_PUBLIC_KEY);
      setStatus("Your message has been sent successfully. We will reply shortly.");
      reset();
    } catch (error) {
      setStatus("Unable to send message at the moment. Please contact us directly by phone or email.");
      console.error(error);
    }
  };

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Get in touch for premium legal services.</h1>
            <p className="mt-6 text-white/75 leading-8">Send a message or reach us directly by phone, WhatsApp and email for immediate consultation and legal guidance.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Office</p>
                <p className="mt-3 text-white">No 22-11-100/2/2, Cottonmill, Gollavanigunta, Tirupati, Andhra Pradesh</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Working Hours</p>
                <p className="mt-3 text-white">Mon - Fri: 10AM - 7PM</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Phone</p>
                <p className="mt-3 text-white">+91 85559 12093</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">WhatsApp</p>
                <p className="mt-3 text-white">+91 91600 93811</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Reach Us</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Send a message and we will contact you promptly.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full rounded-3xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full rounded-3xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                {...register("phone", { required: true })}
                className="w-full rounded-3xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold"
              />
              <textarea
                placeholder="How can we help you?"
                rows={6}
                {...register("message", { required: true })}
                className="w-full rounded-3xl border border-white/10 bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold"
              />
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95">
                Send Message
              </button>
              {status ? <p className="text-sm text-white/80">{status}</p> : null}
            </form>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft">
          <h2 className="text-2xl font-semibold text-white">Map & Directions</h2>
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/60">
            <iframe
              title="Contact Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.462935633447!2d79.13075077532223!3d13.63585659050587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ccf53e6c2f863%3A0x9ddb802e7ee8d258!2sCotton%20Mill%2C%20Gollavanigunta%2C%20Tirupati%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1748844987662!5m2!1sen!2sin"
              className="h-96 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
