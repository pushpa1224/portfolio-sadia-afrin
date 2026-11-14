import { useState } from 'react';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profileData } from '../data/profileData';

const initialForm = { name: '', email: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      valid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData(initialForm);
    setErrors(initialErrors);
    // Hide success banner after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  }

  const inputBase = 'w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200';
  const inputNormal = 'border-light-border dark:border-dark-border';
  const inputError = 'border-red-400 dark:border-red-500';

  return (
    <section id="contact" className="bg-slate-50 dark:bg-dark-bg">
      <div className="section">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left: Contact Info */}
          <div className="w-full lg:w-72 space-y-6 flex-shrink-0">
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">Let&apos;s talk</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether you have a project idea, a collaboration proposal, or just want to say hi — my inbox is always open.
              </p>
            </div>
            <div className="space-y-4">
              <a href={`mailto:${profileData.social.email}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FiMail size={16} className="text-primary" />
                {profileData.social.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <FiMapPin size={16} className="text-primary" />
                {profileData.location}
              </div>
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FiGithub size={16} className="text-primary" />
                github.com/pushpa1224
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FiLinkedin size={16} className="text-primary" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full">
            {/* Success Banner */}
            {submitted && (
              <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 animate-fade-in">
                <FiCheckCircle size={20} />
                <span className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  <FiUser className="inline mr-1 mb-0.5" size={12} />
                  Full Name *
                </label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  placeholder="Your full name"
                  className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  <FiMail className="inline mr-1 mb-0.5" size={12} />
                  Email Address *
                </label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  <FiMessageSquare className="inline mr-1 mb-0.5" size={12} />
                  Message * (min. 10 characters)
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-primary/30"
              >
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
