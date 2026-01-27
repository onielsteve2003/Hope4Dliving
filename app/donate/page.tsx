"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { organizationProfile } from "@/lib/content";

const donationAmounts = [5000, 10000, 25000, 50000, 100000];

const stewardshipPromises = [
  {
    icon: "📋",
    text: "Audited accounts filed annually with the Corporate Affairs Commission",
  },
  {
    icon: "🔒",
    text: "Restricted funds honored for event-, medical-, or food-specific gifts",
  },
  {
    icon: "✍️",
    text: "Chairman and Trustee dual signatories on every bank mandate",
  },
];

const impactStats = [
  { number: "100%", label: "Goes to mission" },
  { number: "CAC", label: "Registered" },
  { number: "24hr", label: "Acknowledgement" },
];

// Paystack Public Key from environment variable
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

// Flutterwave Public Key from environment variable
const FLUTTERWAVE_PUBLIC_KEY = process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY || "";

// Set to true when Paystack live keys are ready
const PAYSTACK_ENABLED = false;

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const [activeMethod, setActiveMethod] = useState<"paystack" | "flutterwave" | "transfer">("flutterwave");
  
  // Payment form state
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("2007944960");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPaymentAmount = () => {
    if (customAmount) {
      return parseInt(customAmount.replace(/,/g, ""), 10) || 0;
    }
    return selectedAmount || 0;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG").format(amount);
  };

  const handleCustomAmountChange = (value: string) => {
    // Remove non-numeric characters except comma
    const numericValue = value.replace(/[^0-9]/g, "");
    setCustomAmount(numericValue);
    if (numericValue) {
      setSelectedAmount(null);
    }
  };

  const generateReference = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `H4DL-${timestamp}-${random}`.toUpperCase();
  };

  const handlePaystackPayment = () => {
    const amount = getPaymentAmount();
    if (amount < 100) {
      alert("Minimum donation is ₦100");
      return;
    }
    if (!donorEmail) {
      alert("Please enter your email address");
      return;
    }

    setIsProcessing(true);
    const reference = generateReference();

    // Load Paystack inline script dynamically
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      // @ts-expect-error Paystack is loaded dynamically
      const handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: donorEmail,
        amount: amount * 100, // Paystack expects amount in kobo
        currency: "NGN",
        ref: reference,
        metadata: {
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: donorName || "Anonymous",
            },
            {
              display_name: "Purpose",
              variable_name: "purpose",
              value: "Donation to Hope4DLiving",
            },
          ],
        },
        callback: (response: { reference: string }) => {
          // Payment successful
          setIsProcessing(false);
          setPaymentSuccess(true);
          setPaymentReference(response.reference);
          // Reset form
          setDonorEmail("");
          setDonorName("");
          setSelectedAmount(10000);
          setCustomAmount("");
        },
        onClose: () => {
          setIsProcessing(false);
        },
      });
      handler.openIframe();
    };
    script.onerror = () => {
      setIsProcessing(false);
      alert("Failed to load payment gateway. Please try again.");
    };
    document.body.appendChild(script);
  };

  const handleFlutterwavePayment = () => {
    const amount = getPaymentAmount();
    if (amount < 100) {
      alert("Minimum donation is ₦100");
      return;
    }
    if (!donorEmail) {
      alert("Please enter your email address");
      return;
    }

    setIsProcessing(true);
    const reference = generateReference();

    // Load Flutterwave inline script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.onload = () => {
      // @ts-expect-error FlutterwaveCheckout is loaded dynamically
      FlutterwaveCheckout({
        public_key: FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: reference,
        amount: amount,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd, mobilemoney",
        customer: {
          email: donorEmail,
          phone_number: donorPhone || "",
          name: donorName || "Anonymous Donor",
        },
        customizations: {
          title: "Hope4DLiving Donation",
          description: "Donation to Hope4DLiving Global Outreach",
          logo: "https://hope4dliving.org/logo.png",
        },
        callback: (response: { tx_ref: string; status: string }) => {
          setIsProcessing(false);
          if (response.status === "successful" || response.status === "completed") {
            setPaymentSuccess(true);
            setPaymentReference(response.tx_ref);
            // Reset form
            setDonorEmail("");
            setDonorName("");
            setDonorPhone("");
            setSelectedAmount(10000);
            setCustomAmount("");
          }
        },
        onclose: () => {
          setIsProcessing(false);
        },
      });
    };
    script.onerror = () => {
      setIsProcessing(false);
      alert("Failed to load payment gateway. Please try again.");
    };
    document.body.appendChild(script);
  };

  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Your generosity transforms lives."
        description="Every gift advances gospel proclamation, medical outreach, food relief, and ministerial training across Nigeria and beyond."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#give-now"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100"
            >
              Give Now
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white"
            >
              Need a custom pledge?
            </Link>
          </div>
        }
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80"
        align="left"
      />

      {/* Impact Stats Bar */}
      <section className="bg-brand-600">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold sm:text-3xl">{stat.number}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section id="give-now" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Choose Your Giving Method</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Give Securely Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Select your preferred payment method below. All options are secure, fast, and your gift is immediately acknowledged.
          </p>
        </div>

        {/* Payment Method Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 p-1.5 sm:rounded-full">
            {PAYSTACK_ENABLED && (
              <button
                onClick={() => setActiveMethod("paystack")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeMethod === "paystack"
                    ? "bg-[#00C3F7] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                💳 Paystack
              </button>
            )}
            <button
              onClick={() => setActiveMethod("flutterwave")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeMethod === "flutterwave"
                  ? "bg-[#F5A623] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🦋 Flutterwave
            </button>
            <button
              onClick={() => setActiveMethod("transfer")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeMethod === "transfer"
                  ? "bg-brand-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🏦 Bank Transfer
            </button>
          </div>
        </div>

        {/* Payment Cards Container */}
        <div className="mt-8">
          {/* Paystack Payment */}
          {PAYSTACK_ENABLED && activeMethod === "paystack" && (
            <div className="mx-auto max-w-xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                {/* Paystack Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💳</span>
                      <h3 className="text-xl font-bold text-slate-900">Pay Online</h3>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Fast, secure payment via Paystack</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-medium text-green-700">Secure</span>
                  </div>
                </div>

                {/* Payment Options Icons */}
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Accepted Methods</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-blue-600"/>
                        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" className="text-blue-600"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Card</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="6" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-purple-600"/>
                        <path d="M7 15h4M13 15h4" stroke="currentColor" strokeWidth="1.5" className="text-purple-600"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Bank</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-orange-600"/>
                        <circle cx="12" cy="18" r="1" fill="currentColor" className="text-orange-600"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">USSD</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" className="text-green-600"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Transfer</span>
                    </div>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mt-6">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Select Amount (₦)</label>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
                          selectedAmount === amount && !customAmount
                            ? "border-brand-600 bg-brand-50 text-brand-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        ₦{formatCurrency(amount)}
                      </button>
                    ))}
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">₦</span>
                      <input
                        type="text"
                        placeholder="Other"
                        value={customAmount ? formatCurrency(parseInt(customAmount)) : ""}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className={`w-full rounded-xl border-2 py-3 pl-8 pr-3 text-sm font-semibold transition placeholder:font-normal ${
                          customAmount
                            ? "border-brand-600 bg-brand-50 text-brand-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Info */}
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Your Email *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Your Name <span className="text-slate-400">(optional)</span></label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <button
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-700 hover:to-brand-600 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handlePaystackPayment}
                  disabled={getPaymentAmount() < 100 || !donorEmail || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Donate ₦{formatCurrency(getPaymentAmount())}</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Payment Success Message */}
                {paymentSuccess && (
                  <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-green-900">Thank You for Your Generosity!</h4>
                    <p className="mt-2 text-sm text-green-700">Your donation was successful. A receipt has been sent to your email.</p>
                    <p className="mt-3 text-xs text-green-600">Reference: <span className="font-mono font-semibold">{paymentReference}</span></p>
                    <button
                      onClick={() => setPaymentSuccess(false)}
                      className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-800"
                    >
                      Make Another Donation
                    </button>
                  </div>
                )}

                {/* Trust Footer */}
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs">256-bit SSL</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs">PCI Compliant</span>
                  </div>
                </div>

                {/* Powered by Paystack */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    Powered by <span className="font-semibold text-[#00C3F7]">Paystack</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Flutterwave Payment */}
          {activeMethod === "flutterwave" && (
            <div className="mx-auto max-w-xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                {/* Flutterwave Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🦋</span>
                      <h3 className="text-xl font-bold text-slate-900">Flutterwave</h3>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Multiple payment options available</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                    <span className="text-xs font-medium text-orange-700">Secure</span>
                  </div>
                </div>

                {/* Payment Options Icons */}
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Accepted Methods</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="5" width="20" height="14" rx="2"/>
                        <path d="M2 10h20"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Card</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <circle cx="12" cy="18" r="1" fill="currentColor"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Mobile Money</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="6" width="18" height="12" rx="1"/>
                        <path d="M7 15h4M13 15h4"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">Bank</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      <svg className="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <path d="M9 6h6M9 10h6M9 14h6"/>
                      </svg>
                      <span className="text-xs font-medium text-slate-700">USSD</span>
                    </div>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mt-6">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Select Amount (₦)</label>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
                          selectedAmount === amount && !customAmount
                            ? "border-orange-500 bg-orange-50 text-orange-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        ₦{formatCurrency(amount)}
                      </button>
                    ))}
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">₦</span>
                      <input
                        type="text"
                        placeholder="Other"
                        value={customAmount ? formatCurrency(parseInt(customAmount)) : ""}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className={`w-full rounded-xl border-2 py-3 pl-8 pr-3 text-sm font-semibold transition placeholder:font-normal ${
                          customAmount
                            ? "border-orange-500 bg-orange-50 text-orange-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Info */}
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Your Email *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Your Name <span className="text-slate-400">(optional)</span></label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Phone <span className="text-slate-400">(optional)</span></label>
                      <input
                        type="tel"
                        placeholder="0801 234 5678"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <button
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#F5A623] to-[#FF6B00] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-[#E6951A] hover:to-[#E65C00] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleFlutterwavePayment}
                  disabled={getPaymentAmount() < 100 || !donorEmail || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Donate ₦{formatCurrency(getPaymentAmount())}</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Payment Success Message */}
                {paymentSuccess && (
                  <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-green-900">Thank You for Your Generosity!</h4>
                    <p className="mt-2 text-sm text-green-700">Your donation was successful. Thank you for supporting Hope4DLiving!</p>
                    <p className="mt-3 text-xs text-green-600">Reference: <span className="font-mono font-semibold">{paymentReference}</span></p>
                    <button
                      onClick={() => setPaymentSuccess(false)}
                      className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-800"
                    >
                      Make Another Donation
                    </button>
                  </div>
                )}

                {/* Trust Footer */}
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs">256-bit SSL</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs">PCI Compliant</span>
                  </div>
                </div>

                {/* Powered by Flutterwave */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    Powered by <span className="font-semibold text-[#F5A623]">Flutterwave</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bank Transfer Option */}
          {activeMethod === "transfer" && (
            <div className="mx-auto max-w-xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏦</span>
                      <h3 className="text-xl font-bold text-slate-900">Bank Transfer</h3>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">Direct transfer to our account</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span className="text-xs font-medium text-blue-700">Verified</span>
                  </div>
                </div>

                {/* Bank Details Card */}
                <div className="mt-6 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">First Bank of Nigeria</p>
                    <svg className="h-8 w-8 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 10V7a1 1 0 011-1h14a1 1 0 011 1v3M4 10v7a1 1 0 001 1h14a1 1 0 001-1v-7M4 10h16M8 14h.01M12 14h4" />
                    </svg>
                  </div>
                  
                  {/* Account Number */}
                  <div className="mt-4">
                    <p className="text-xs text-slate-400">Account Number</p>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="font-mono text-2xl font-bold tracking-wider">2007944960</p>
                      <button
                        onClick={copyAccountNumber}
                        className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium transition hover:bg-white/20"
                      >
                        {copied ? (
                          <>
                            <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="mt-4">
                    <p className="text-xs text-slate-400">Account Name</p>
                    <p className="mt-1 text-sm font-semibold">Hope4Dliving Global Outreach</p>
                  </div>

                  {/* Bank Name */}
                  <div className="mt-4">
                    <p className="text-xs text-slate-400">Bank</p>
                    <p className="mt-1 text-sm font-semibold">First Bank of Nigeria</p>
                  </div>
                </div>

                {/* Simple Instructions */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">
                    Transfer any amount to the account above. Your donation is received instantly.
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    For receipts or inquiries, email <a href="mailto:donations@hope4dliving.org" className="font-medium text-brand-600 hover:text-brand-700">donations@hope4dliving.org</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* More Payment Options Coming */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            <span className="font-medium">More options coming soon:</span> International Wire, Crypto
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Your Impact</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">What your generosity makes possible</h2>
              <p className="mt-4 text-base text-slate-600">
                Every donation directly funds crusade logistics, medical supplies, food baskets, and pastoral training 
                scholarships. We document every deployment so you can celebrate testimonies with us.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg">
                    📢
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Gospel Proclamation</p>
                    <p className="text-sm text-slate-600">City-wide crusades reaching thousands</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg">
                    🏥
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Medical Missions</p>
                    <p className="text-sm text-slate-600">Free healthcare for underserved communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg">
                    🍞
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Food Relief</p>
                    <p className="text-sm text-slate-600">Feeding families in crisis</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
                alt="Volunteers packaging relief supplies"
                className="h-80 w-full object-cover lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-medium text-white/90">Volunteers preparing relief packages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Promises */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Our Promise to You</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Stewardship & Accountability</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
              We treat every gift as sacred. Here&apos;s how we ensure your donation creates maximum impact.
            </p>
          </div>
          
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stewardshipPromises.map((promise) => (
              <div key={promise.text} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <span className="text-3xl">{promise.icon}</span>
                <p className="mt-4 text-sm text-white/90">{promise.text}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-xs text-white/60">
            {organizationProfile.registrationNote}
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-linear-to-br from-brand-50 to-white p-8 sm:p-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900">Need donation receipts or MOUs?</h2>
              <p className="mt-3 text-sm text-slate-600">
                We prepare acknowledgement letters, grant agreements, and impact reports for individual and institutional partners.
              </p>
            </div>
            <div className="mt-6 sm:ml-8 sm:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
              >
                <span>Contact Stewardship Desk</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
