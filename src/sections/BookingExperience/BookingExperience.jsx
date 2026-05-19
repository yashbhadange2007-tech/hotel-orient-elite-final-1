import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import { siteConfig } from "../../config/site";

const roomTypes = [
  "Executive Deluxe Twin Bed AC",
  "Executive Suite AC",
  "Deluxe Queen Bed AC",
  "Single Non AC",
  "Dormitory Stay",
];

export default function BookingExperience() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "1",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: "" }));
  };

  const submitBooking = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Enter your full name.";
    if (!/^[0-9+\s-]{8,}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid mobile number.";
    if (!form.checkIn) nextErrors.checkIn = "Select a check-in date.";
    if (!form.checkOut) nextErrors.checkOut = "Select a check-out date.";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) nextErrors.checkOut = "Check-out must be after check-in.";
    if (!form.roomType) nextErrors.roomType = "Select a room type.";
    if (!form.guests || Number(form.guests) < 1) nextErrors.guests = "Enter the number of guests.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    window.setTimeout(() => {
      const message = encodeURIComponent(`Hello Hotel Orient Elite, I would like to reserve a stay.\nName: ${form.name}\nMobile: ${form.phone}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nRoom type: ${form.roomType}\nGuests: ${form.guests}`);
      window.open(`https://wa.me/917058757171?text=${message}`, "_blank", "noopener,noreferrer");
      setStatus("sent");
    }, 500);
  };

  return (
    <SectionShell
      id="booking"
      eyebrow="Reserve"
      title="Reserve your stay with quiet ease."
      description="Share your room preference, dates, and guest details through a calm WhatsApp-led reservation flow."
      size="lg"
      className="bg-[radial-gradient(circle_at_72%_18%,rgba(216,183,88,0.12),transparent_24rem),radial-gradient(circle_at_20%_78%,rgba(255,250,240,0.035),transparent_18rem)]"
    >
      <motion.div className="glass-panel mt-14 grid gap-8 rounded-lg p-5 md:grid-cols-[0.78fr_1.22fr] md:p-8 lg:mt-16" variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <p className="font-display text-4xl font-bold text-ivory-50">Call {siteConfig.phone}</p>
          <p className="mt-5 text-sm leading-7 text-ivory-100/66">Check-in from {siteConfig.checkIn}. Submit your preferred room and dates through WhatsApp for a smooth confirmation conversation.</p>
          <div className="mt-8 grid gap-3 text-sm text-ivory-100/68">
            <p className="rounded-md border border-ivory-50/10 bg-ink-950/36 px-4 py-3">Stay-only reservations</p>
            <p className="rounded-md border border-ivory-50/10 bg-ink-950/36 px-4 py-3">Direct WhatsApp handoff</p>
            <p className="rounded-md border border-ivory-50/10 bg-ink-950/36 px-4 py-3">Room preference captured</p>
          </div>
        </motion.div>
        <motion.form className="grid gap-4" variants={fadeUp} onSubmit={submitBooking} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Full Name" value={form.name} error={errors.name} onChange={updateField} />
            <Field name="phone" label="Mobile Number" value={form.phone} error={errors.phone} onChange={updateField} inputMode="tel" />
            <Field name="checkIn" label="Check-in Date" type="date" value={form.checkIn} error={errors.checkIn} onChange={updateField} />
            <Field name="checkOut" label="Check-out Date" type="date" value={form.checkOut} error={errors.checkOut} onChange={updateField} />
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ivory-100/58" htmlFor="roomType">Room Type</label>
              <select id="roomType" name="roomType" value={form.roomType} onChange={updateField} aria-invalid={Boolean(errors.roomType)} className="w-full rounded-md border border-ivory-50/12 bg-ink-950/70 px-4 py-4 text-sm text-ivory-50 outline-none transition-colors duration-300 focus:border-gold-200/70">
                <option value="">Select room type</option>
                {roomTypes.map((room) => <option key={room} value={room}>{room}</option>)}
              </select>
              {errors.roomType && <p className="mt-2 text-xs text-gold-200/88">{errors.roomType}</p>}
            </div>
            <Field name="guests" label="Number of Guests" type="number" min="1" max="8" value={form.guests} error={errors.guests} onChange={updateField} />
          </div>
          <button className="mt-1 rounded-md bg-gold-300 px-5 py-4 text-sm font-bold text-ink-950 shadow-glow transition-colors duration-300 hover:bg-gold-200 disabled:cursor-wait disabled:opacity-70" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Preparing WhatsApp..." : "Request via WhatsApp"}
          </button>
          {status === "sent" && <p className="text-sm leading-7 text-ivory-100/70">WhatsApp is opening with your enquiry details. The team can guide your booking from there.</p>}
        </motion.form>
      </motion.div>
    </SectionShell>
  );
}

function Field({ label, name, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ivory-100/58" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        className="w-full rounded-md border border-ivory-50/12 bg-ink-950/70 px-4 py-4 text-sm text-ivory-50 outline-none transition-colors duration-300 placeholder:text-ivory-100/36 focus:border-gold-200/70"
        placeholder={label}
        {...props}
      />
      {error && <p className="mt-2 text-xs text-gold-200/88">{error}</p>}
    </div>
  );
}
