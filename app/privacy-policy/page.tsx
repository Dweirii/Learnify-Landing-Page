import type { Metadata } from "next"
import LegalPageLayout from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Learnify Technologies, Inc. — how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title={
        <>
          Privacy <span className="text-[#0BA94C]">Policy</span>
        </>
      }
      lastUpdated="February 24, 2026"
    >
      <p>
        This Privacy Policy describes how Learnify Technologies, Inc. (&quot;Learnify,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects personal information when you use the Learnify platform, including our live-streaming services, community features, voice messaging, and academic skill tracks (collectively, the &quot;Services&quot;).
      </p>
      <p>
        By using the Services, you agree to this Privacy Policy. If you do not agree, do not use the Services.
      </p>

      <h2>1) Who We Are</h2>
      <ul>
        <li>Legal Entity: Learnify Technologies, Inc.</li>
        <li>Location: 131 Continental Dr, Suite 305, Newark, Delaware, 19713, USA</li>
        <li>Contact Email: info@bsi.network</li>
      </ul>

      <h2>2) Key Points</h2>
      <ul>
        <li><strong>Gamified Experience:</strong> Your Username and Experience Points (XP) are public by default to power the leaderboard and community rankings.</li>
        <li><strong>Streaming:</strong> We record live academic sessions to facilitate learning and accessibility.</li>
        <li><strong>Subscription Model:</strong> We are funded by user and corporate subscriptions, not by selling your data.</li>
        <li><strong>Social Connectivity:</strong> We offer logins via Google, GitHub, LinkedIn, Facebook, and X (Twitter).</li>
      </ul>

      <h2>3) Information We Collect</h2>
      <p>We collect information through the following methods:</p>

      <h3>A) Identity &amp; Authentication (Clerk)</h3>
      <p>We use Clerk for identity management. This includes your email, name, phone number, and password (handled securely by Clerk).</p>

      <h3>B) Social Profile Data</h3>
      <p>If you use social logins, we receive your public profile data (e.g., avatar, name, and social ID) as permitted by those platforms.</p>

      <h3>C) Academic &amp; Community Content</h3>
      <ul>
        <li><strong>Streams:</strong> Audio and video from live sessions (recorded).</li>
      </ul>

      <h3>D) Gamification Data</h3>
      <p>We track your learning progress, XP, badges, and leaderboard status.</p>

      <h3>E) Billing Information (Stripe)</h3>
      <p>For one-time and recurring payments, Stripe collects billing addresses and payment card details.</p>

      <h3>F) Automatically Collected Data</h3>
      <p>Technical data including IP addresses, device metadata, and browser types are collected via Vercel and PostHog.</p>

      <h3>G) Search Queries (Typesense)</h3>
      <p>When you use search, we process search query strings using Typesense to return results.</p>

      <h2>4) How We Use Information</h2>
      <p>We use personal information to:</p>
      <h3>Provide and Operate the Services</h3>
      <ul>
        <li>Create and manage accounts</li>
        <li>Process purchases and confirm transactions</li>
        <li>Maintain your academic progress and XP rankings.</li>
        <li>Deliver live and recorded streaming content.</li>
        <li>Manage billing and prevent fraudulent transactions.</li>
      </ul>
      <h3>Maintain Security and Improve the Services</h3>
      <ul>
        <li>Monitor performance and debug issues</li>
        <li>Detect and prevent fraud, abuse, and unauthorized access</li>
        <li>Protect the integrity of our Services and enforce our policies</li>
      </ul>
      <h3>Communicate Administrative Updates</h3>
      <p>Send admin-facing operational notifications and reports (via Resend). Note: Customer-facing transactional emails (like receipts or download links) may be added in the future; if so, we will use your email to send those messages.</p>
      <h3>Comply With Law and Business Requirements</h3>
      <ul>
        <li>Maintain records required for accounting/tax purposes</li>
        <li>Respond to lawful requests and enforce legal rights</li>
      </ul>

      <h2>5) Legal Bases for Processing</h2>
      <p>We rely on the following legal bases:</p>
      <ul>
        <li><strong>Legitimate Interests:</strong> For community moderation and gamification features.</li>
        <li><strong>Legal Obligation:</strong> For tax and regulatory compliance.</li>
      </ul>

      <h2>6) Cookies and Similar Technologies</h2>
      <p>We use cookies and similar technologies (such as pixels and local storage) to operate and understand the Services.</p>
      <h3>A) Essential Cookies</h3>
      <p>Essential cookies are required for core functions such as authentication, session management, and security. For example, Clerk uses session/authentication cookies to keep you signed in.</p>
      <h3>B) Analytics Cookies (Consent-Based)</h3>
      <p>We use: Vercel Analytics (performance/usage insights) and Google Analytics 4 (GA4) (web analytics; configured with IP anonymization). GA4 is configured to default to deny and only run after you consent through our banner/preferences.</p>
      <h3>C) Advertising/Conversion Measurement (Consent-Based)</h3>
      <p>We use Google Ads conversion tracking to measure conversion events related to downloads. This tracking is gated behind cookie consent.</p>
      <h3>D) Your Choices</h3>
      <p>We use a custom consent system that appears on first visit and supports: Accept All, Reject All, Manage Preferences. Non-essential cookies and tracking are blocked until you provide permission. We also implement Google Consent Mode v2, and Google signals default to deny before anything loads. Your choice is stored in your browser. You can also control cookies through your browser settings. If you disable certain cookies, some features may not work properly.</p>

      <h2>7) How We Share Information</h2>
      <p>We share personal information only as needed to operate the Services.</p>
      <h3>A) Service Providers</h3>
      <p>We share information with third-party providers that help us run the Services, including: Clerk (authentication and identity management), Stripe (payment processing), Vercel (hosting, edge network, and analytics), BunnyCDN, Neon (PostgreSQL) (hosted database infrastructure), Sentry (error monitoring and diagnostics), Typesense (search processing), Resend (admin notification emails), Inngest (background job scheduling), Streaming/AI: [PROVIDER TBD] for video, Analytics: PostHog, Vercel, and Google Analytics. These providers process information under their own terms and privacy practices, and where applicable, under agreements with us.</p>
      <h3>B) Analytics and Conversion Measurement (With Consent Where Required)</h3>
      <p>If you consent, we share limited information with Google Analytics and Google Ads for analytics and conversion measurement.</p>
      <h3>C) Legal, Safety, and Rights Protection</h3>
      <p>We may disclose information if required to comply with law or legal process, or to protect the rights, safety, and security of Learnify Technologies, Inc, our users, or others.</p>
      <h3>D) Business Transfers</h3>
      <p>If Learnify Technologies, Inc is involved in a merger, acquisition, financing, reorganization, or information may be transferred as part of that transaction.</p>
      <p><strong>No Sale of Personal Information:</strong> We do not sell personal information. We do not use retargeting as a business practice. We do use conversion measurement (Google Ads) which is gated behind consent.</p>

      <h2>8) Nature of Services &amp; Subscriptions</h2>
      <p>Learnify is a digital learning platform. Subscriptions provide access to tracks and streaming content. We do not ship physical goods. All access is granted via your digital account.</p>

      <h2>9) Data Retention</h2>
      <ul>
        <li><strong>Academic Records:</strong> We retain XP and badge history indefinitely to ensure your portfolio remains accessible.</li>
      </ul>

      <h2>10) Security Measures</h2>
      <p>We use TLS/SSL encryption for data in transit and at rest. We implement managerial and physical safeguards designed to prevent unauthorized access. However, no internet-based service is 100% secure.</p>

      <h2>11) Your Rights and Choices</h2>
      <h3>A) Cookie Choices</h3>
      <p>You can manage cookie preferences using our consent banner and preference controls, and through your browser settings.</p>
      <h3>B) Access, Correction, Deletion, and Other Rights</h3>
      <p>Depending on your location, you may have the right to: Request access to personal information we hold about you; Request correction of inaccurate information; Request deletion of certain personal information (subject to legal exceptions); Object to or restrict certain processing; Request a copy of your information (data portability). To exercise your rights, email info@bsi.network with the subject line &quot;Privacy Request.&quot; We may verify your identity before completing your request.</p>
      <h3>C) US State Privacy Rights (Where Applicable)</h3>
      <p>Residents of certain US states may have additional rights, which may include the right to opt out of certain data sharing for advertising purposes (where applicable) and the right to appeal certain decisions. If we provide a &quot;Do Not Sell or Share My Personal Information&quot; link, you may use it to manage applicable preferences.</p>
      <h3>D) EEA/UK Complaints</h3>
      <p>If you are in the EEA/UK, you may have the right to lodge a complaint with your local data protection authority.</p>

      <h2>12) International Data Transfers</h2>
      <p>Learnify is based in the USA. By using our Services, you understand your data will be processed in the United States. We utilize Standard Contractual Clauses (SCCs) to ensure data protection for our global users.</p>

      <h2>13) Children&apos;s Privacy (COPPA/GDPR-K)</h2>
      <p>Learnify is for users aged 13+ (or 15+ in specific regions). We do not knowingly collect data from children under 13. Verification is performed via login metadata and birthdate entry. Accounts found to belong to children under 13 will be terminated and data purged.</p>

      <h2>14) Third-Party Links &amp; Integrations</h2>
      <p>Our platform links to third-party services (GitHub, LinkedIn, etc.). We are not responsible for their privacy practices. Please review their policies before linking accounts.</p>

      <h2>15) Changes to This Privacy Policy</h2>
      <p>We may update this policy periodically to reflect new features (like automated moderation tools). Material changes will be notified via email or a prominent notice within the app.</p>

      <h2>16) Contact Us</h2>
      <p>For privacy-related inquiries or to exercise your rights:</p>
      <p>
        Learnify Technologies, Inc.<br />
        131 Continental Dr, Suite 305<br />
        Newark, DE, 19713<br />
        Email: <a href="mailto:zaid@learnifyjo.com">zaid@learnifyjo.com</a><br />
        Phone: +962 79 688 6777
      </p>
    </LegalPageLayout>
  )
}
