"use client";
import axios from "axios";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface FormValues extends FormData {
  smsConsent: boolean;
  termsConsent: boolean;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  terms?: string;
}

const htmlFunction = (values: FormValues): string => {
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>First Name:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${values.firstName || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Last Name:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${values.lastName || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${values.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone Number:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${values.phone || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>SMS Consent:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${values.smsConsent ? 'Yes' : 'No'}</td>
      </tr>
    </table>
    <p style="font-size: 14px; color: #666;">
      This submission was made on ${new Date().toLocaleString()}. Please review the details and respond accordingly.
    </p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
    <p style="font-size: 12px; color: #999; text-align: center;">
      Submitted via Cittis App Contact Form
    </p>
  </div>`;
};

const ContactFormPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [smsConsent, setSmsConsent] = useState<boolean>(false);
  const [termsConsent, setTermsConsent] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setter(e.target.checked);
    // Clear terms error on change
    if (e.target.name === 'terms' && errors.terms) {
      setErrors((prev) => ({ ...prev, terms: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!termsConsent) {
      newErrors.terms = 'You must accept the Terms of Service and Privacy Policy.';
    }

    // Optional: Validate phone if provided
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +1234567890).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (values: FormValues): Promise<void> => {
    try {
      setIsSubmitting(true);
      const to = 'adiodamilare44@gmail.com'; // Replace with actual receiver email
      const result = await axios.post("https://userbackendservice.cittis.co/user/mail/request/only", {
        reciever: to,
        subject: "Contact Details Submission",
        message: htmlFunction(values),
      });
      console.log('Submission successful:', result.data);
      // Optionally: Reset form or redirect
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      setSmsConsent(false);
      setTermsConsent(false);
      setErrors({});
      alert('Thank you! Your details have been submitted successfully.');
    } catch (err) {
      console.error('Submission error:', (err as Error).message);
      alert('There was an error submitting your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      const values: FormValues = { ...formData, smsConsent, termsConsent };
      handleSubmit(values);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="bg-card shadow-xl rounded-lg p-8 sm:p-12 w-full max-w-lg space-y-6">
        <header className="text-center">
          <h1 className="text-lg sm:text-xl md:text-4xl font-extrabold text-primary mb-2">
            Please provide your contact details
          </h1>
        </header>

        <form className="space-y-4" onSubmit={onFormSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80 mb-1">
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name Example"
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80 mb-1">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name Example"
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@smsoptin.com"
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1234567891"
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label className="flex  space-x-2">
              <input
                type="checkbox"
                name="sms"
                checked={smsConsent}
                onChange={(e) => handleCheckboxChange(e, setSmsConsent)}
                className="!h-6 min-h-6 min-w-6 border-2 border-red-200 !w-6 text-primary focus:ring-primary border-border rounded"
              />
              <span className="text-base text-foreground/80">I agree to receive informational SMS messages from Cittis App related to my account and activity. Message frequency may vary. Msg & data rates may apply. Reply STOP to cancel or HELP for help. Consent is not a condition of purchase.</span>
            </label>
            <label className="flex  space-x-2">
              <input
                type="checkbox"
                name="terms"
                checked={termsConsent}
                onChange={(e) => handleCheckboxChange(e, setTermsConsent)}
                className="h-6 w-6 text-primary focus:ring-primary border-border rounded"
                required
              />
              <span className="text-base text-foreground/80">
                I accept the <Link href="/terms" className="text-primary">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="text-primary">Privacy Policy</Link>.
              </span>
            </label>
            {errors.terms && <p className="text-sm text-red-500 ml-8">{errors.terms}</p>}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            By providing your phone number you agree to receive informational text messages from Cities App. Consent is not a condition of purchase. Message frequency will vary. Msg & data rates may apply. Reply HELP for help or STOP to cancel.
          </p>

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              className="flex-1 p-4 text-sm font-medium text-foreground/80 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => {
                // Handle SKIP logic, e.g., navigate without submission
                console.log('Skipped');
              }}
            >
              SKIP
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 p-4 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SUBMITTING...' : 'CONTINUE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPage;