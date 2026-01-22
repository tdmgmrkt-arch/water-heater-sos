"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "definitions", title: "Definitions" },
  { id: "information-collection", title: "Information Collection and Use" },
  { id: "personal-data", title: "Personal Data" },
  { id: "usage-data", title: "Usage Data" },
  { id: "tracking-cookies", title: "Tracking & Cookies Data" },
  { id: "use-of-data", title: "Use of Data" },
  { id: "legal-basis", title: "Legal Basis for Processing (GDPR)" },
  { id: "retention", title: "Retention of Data" },
  { id: "transfer", title: "Transfer of Data" },
  { id: "disclosure", title: "Disclosure of Data" },
  { id: "security", title: "Security of Data" },
  { id: "dnt", title: '"Do Not Track" Signals' },
  { id: "gdpr-rights", title: "Your Data Protection Rights (GDPR)" },
  { id: "service-providers", title: "Service Providers" },
  { id: "links", title: "Links to Other Sites" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact Us" },
];

export function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState("definitions");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#EA5D19]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-[#EA5D19]" />
              <span className="text-sm font-semibold text-white">Your Privacy Matters</span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Privacy Policy
            </h1>

            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Calendar className="h-4 w-4" />
              <p className="text-lg">Effective Date: August 3, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h2 className="text-lg font-bold text-[#11110E] mb-4">Table of Contents</h2>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                          activeSection === section.id
                            ? "bg-[#EA5D19] text-white font-semibold"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#EA5D19]"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Introduction */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Water Heater SOS ("us", "we", or "our") operates the WaterHeaterSOS.com website (the "Service").
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from{" "}
                    <a href="https://www.waterheatersos.com/" className="text-[#EA5D19] hover:underline">
                      our website
                    </a>
                    .
                  </p>
                </div>

                {/* Definitions */}
                <div id="definitions" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Definitions
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Service</h3>
                      <p className="text-gray-700">Service is the https://www.waterheatersos.com website operated by Water Heater SOS.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Personal Data</h3>
                      <p className="text-gray-700">Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Usage Data</h3>
                      <p className="text-gray-700">Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Cookies</h3>
                      <p className="text-gray-700">Cookies are small pieces of data stored on your device (computer or mobile device).</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Data Controller</h3>
                      <p className="text-gray-700">Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Data Processors (or Service Providers)</h3>
                      <p className="text-gray-700">Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-2">Data Subject (or User)</h3>
                      <p className="text-gray-700">Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
                    </div>
                  </div>
                </div>

                {/* Information Collection and Use */}
                <div id="information-collection" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Information Collection and Use
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      We collect several different types of information for various purposes to provide and improve our Service to you.
                    </p>
                  </div>
                </div>

                {/* Personal Data */}
                <div id="personal-data" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Personal Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                  </div>
                </div>

                {/* Usage Data */}
                <div id="usage-data" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Usage Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                  </div>
                </div>

                {/* Tracking & Cookies Data */}
                <div id="tracking-cookies" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Tracking &amp; Cookies Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 font-semibold">Examples of Cookies we use:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
                      <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                      <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
                    </ul>
                  </div>
                </div>

                {/* Use of Data */}
                <div id="use-of-data" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Use of Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>To provide and maintain our Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information so that we can improve our Service</li>
                      <li>To monitor the usage of our Service</li>
                      <li>To detect, prevent and address technical issues</li>
                    </ul>
                  </div>
                </div>

                {/* Legal Basis for Processing */}
                <div id="legal-basis" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Legal Basis for Processing Personal Data Under GDPR
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you are from the European Economic Area (EEA), Water Heater SOS legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS may process your Personal Data because:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>We need to perform a contract with you</li>
                      <li>You have given us permission to do so</li>
                      <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
                      <li>For payment processing purposes</li>
                      <li>To comply with the law</li>
                    </ul>
                  </div>
                </div>

                {/* Retention of Data */}
                <div id="retention" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Retention of Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Water Heater SOS will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
                    </p>
                  </div>
                </div>

                {/* Transfer of Data */}
                <div id="transfer" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Transfer of Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Water Heater SOS will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                    </p>
                  </div>
                </div>

                {/* Disclosure of Data */}
                <div id="disclosure" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Disclosure of Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-3 text-xl">Business Transaction</h3>
                      <p className="text-gray-700 leading-relaxed">
                        If Water Heater SOS is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-3 text-xl">Disclosure for Law Enforcement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Under certain circumstances, Water Heater SOS may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110E] mb-3 text-xl">Legal Requirements</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Water Heater SOS may disclose your Personal Data in the good faith belief that such action is necessary to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of Water Heater SOS</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Security of Data */}
                <div id="security" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Security of Data
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>

                {/* Do Not Track */}
                <div id="dnt" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    &quot;Do Not Track&quot; Signals
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
                    </p>
                  </div>
                </div>

                {/* GDPR Rights */}
                <div id="gdpr-rights" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Your Data Protection Rights Under GDPR
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Water Heater SOS aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you wish to be informed of what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In certain circumstances, you have the following data protection rights:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>The right to access, update or to delete</strong> the information we have on you.</li>
                      <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
                      <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
                      <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
                      <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
                      <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Water Heater SOS relied on your consent to process your personal information.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Please note that we may ask you to verify your identity before responding to such requests.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).
                    </p>
                  </div>
                </div>

                {/* Service Providers */}
                <div id="service-providers" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Service Providers
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>

                    <div>
                      <h3 className="font-bold text-[#11110E] mb-3 text-xl">Analytics</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        We may use third-party Service Providers to monitor and analyze the use of our Service.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                          <strong>Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. For more information on the privacy practices of Google, please visit the{" "}
                          <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#EA5D19] hover:underline">
                            Google Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#11110E] mb-3 text-xl">Payments</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        The payment processors we work with are:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            <strong>Housecall Pro:</strong>{" "}
                            <a href="https://www.housecallpro.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#EA5D19] hover:underline">
                              Housecall Pro Privacy Policy
                            </a>
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            <strong>PayPal or Braintree:</strong>{" "}
                            <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-[#EA5D19] hover:underline">
                              PayPal Privacy Policy
                            </a>
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            <strong>QuickBooks Online (Intuit Inc.):</strong>{" "}
                            <a href="https://www.intuit.com/privacy/protect-your-privacy/" target="_blank" rel="noopener noreferrer" className="text-[#EA5D19] hover:underline">
                              Intuit Privacy Policy
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Links to Other Sites */}
                <div id="links" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Links to Other Sites
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div id="children" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Children&apos;s Privacy
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our Service does not address anyone under the age of 18 ("Children").
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                  </div>
                </div>

                {/* Changes to This Privacy Policy */}
                <div id="changes" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Changes to This Privacy Policy
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Contact Us
                  </h2>
                  <div className="bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-8 rounded-2xl shadow-lg">
                    <p className="text-white text-lg leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <a
                      href="mailto:help@waterheatersos.com"
                      className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl text-[#EA5D19] font-semibold hover:bg-gray-100 transition-all shadow-lg"
                    >
                      <Mail className="h-5 w-5" />
                      help@waterheatersos.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
