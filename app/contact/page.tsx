"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xxxxxx";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xxxxxx";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    mode: "onChange",
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" }
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ 
        type: "success", 
        message: "✓ Message sent successfully! We will contact you within 24 hours." 
      });
      reset();
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "✗ Unable to send message. Please call us directly: +91 85559 12093" 
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
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
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                  className={`w-full rounded-3xl border ${errors.name ? "border-red-500" : "border-white/10"} bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold`}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                  })}
                  className={`w-full rounded-3xl border ${errors.email ? "border-red-500" : "border-white/10"} bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold`}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  {...register("phone", { 
                    required: "Phone is required",
                    pattern: { value: /^[0-9]{10}$|^[+][0-9]{1,3}[0-9]{7,}$/, message: "Invalid phone number" }
                  })}
                  className={`w-full rounded-3xl border ${errors.phone ? "border-red-500" : "border-white/10"} bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold`}
                />
                {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone.message}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject of Inquiry"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full rounded-3xl border ${errors.subject ? "border-red-500" : "border-white/10"} bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold`}
                />
                {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject.message}</p>}
              </div>
              <div>
                <textarea
                  placeholder="How can we help you?"
                  rows={6}
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  className={`w-full rounded-3xl border ${errors.message ? "border-red-500" : "border-white/10"} bg-black/60 px-5 py-4 text-white outline-none transition focus:border-gold`}
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95 disabled:brightness-75"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {status.type && (
                <div className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success" 
                    ? "border-green-500/30 bg-green-500/10 text-green-400" 
                    : "border-red-500/30 bg-red-500/10 text-red-400"
                }`}>
                  {status.type === "success" ? <FiCheckCircle className="h-5 w-5 flex-shrink-0" /> : <FiAlertCircle className="h-5 w-5 flex-shrink-0" />}
                  <p>{status.message}</p>
                </div>
              )}
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
