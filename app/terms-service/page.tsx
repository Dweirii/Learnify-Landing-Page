import type { Metadata } from "next"
import LegalPageLayout from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Learnify Technologies, Inc. — learnify-streams.com and related services.",
}

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title={
        <>
          Terms of <span className="text-[#0BA94C]">Service</span>
        </>
      }
      lastUpdated="February 25, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of learnify-streams.com and any related applications, community circles, live-streaming services, and academic skill tracks operated by Learnify Technologies, Inc. (&quot;Learnify Technologies, Inc.,&quot; &quot;Learnify,&quot; &quot;learnify-streams.com,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) (collectively, the &quot;Services&quot;).
      </p>
      <p>
        By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.
      </p>

      <h2>1) Who We Are</h2>
      <p>Learnify Technologies, Inc. operates learnify-streams.com.</p>
      <ul>
        <li>Location: 131 Continental Dr, Suite 305, Newark, Delaware, 19713, United States</li>
        <li>Email: info@bsi.network</li>
        <li>Phone: +962 79 688 6777</li>
      </ul>

      <h2>2) Eligibility and Minor Safety</h2>
      <p>You must be at least 13 years old (or the minimum age of digital consent in your region) to use the Services.</p>
      <p><strong>Minors (Under 18):</strong> If you are between 13 and 18, you may only use Learnify under the supervision of a parent or legal guardian. By allowing a minor to use the account, the parent/guardian agrees to be bound by these Terms and is legally and financially responsible for the minor&apos;s conduct, including any chat interactions or stream broadcasts.</p>
      <p><strong>B2B / Institutional Use:</strong> If you are provided access through a School or Company, that institution represents that it has obtained all necessary parental consents required by law (such as COPPA or FERPA) for its students to participate.</p>

      <h2>3) Accounts and Authentication</h2>
      <ul>
        <li><strong>Account Required:</strong> You must be signed in via our authorized authentication provider (e.g., Clerk) or supported social logins to view streams, or participate in the community.</li>
        <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account, including chat messages and stream participation.</li>
        <li><strong>Accuracy:</strong> You agree to provide and maintain accurate information. Impersonating another person or entity is strictly prohibited.</li>
        <li><strong>Suspension:</strong> We reserve the right to suspend or terminate accounts that violate these Terms, pose a security risk, or disrupt the learning environment.</li>
      </ul>

      <h2>4) Digital Services, Streaming, and Access</h2>
      <ul>
        <li><strong>Service Nature:</strong> learnify-streams.com provides digital access to live video broadcasts, and recorded Video-On-Demand (VOD). We do not ship physical goods.</li>
        <li><strong>Technical Responsibility:</strong> You are responsible for ensuring you have compatible devices, software, and sufficient internet bandwidth to stream video and upload digital products. Learnify is not liable for stream buffering or connection drops caused by your ISP or hardware.</li>
        <li><strong>Content Availability:</strong> We do not guarantee that any specific live stream, track, or VOD will be available indefinitely. We reserve the right to remove or modify content at our discretion.</li>
      </ul>

      <h2>5) Purchases, Payments, and Taxes</h2>
      <ul>
        <li><strong>Payment Processing:</strong> Payments for subscriptions, donations, and premium tracks are processed by third-party payment processors (currently Stripe).</li>
        <li><strong>Subscriptions &amp; Auto-Renewal:</strong> If you enroll in a recurring subscription, you grant Learnify permission to automatically charge the subscription fee to your chosen payment method prior to each renewal period. You must cancel before the renewal date to avoid future charges.</li>
        <li><strong>Taxes:</strong> You are responsible for any applicable taxes, duties, or fees unless otherwise stated at checkout.</li>
      </ul>

      <h2>6) Gamification, Leaderboards, and XP</h2>
      <ul>
        <li><strong>The System:</strong> The Services include a gamified progression system utilizing Experience Points (XP), badges, and public leaderboards.</li>
        <li><strong>No Monetary Value:</strong> XP, ranks, and badges are digital markers of academic and community engagement. They have no cash value, are non-transferable, cannot be exchanged for fiat currency, and may not be sold or traded.</li>
        <li><strong>Revocation:</strong> We reserve the right to reset your XP, remove your badges, or ban you from the leaderboard if we determine you have engaged in &quot;stat-padding,&quot; academic dishonesty, or exploitation of platform mechanics.</li>
      </ul>

      <h2>7) Refunds and Chargebacks</h2>
      <p>Because we provide immediate access to digital content and live streams, all sales and subscription charges are generally final once access is granted.</p>
      <ul>
        <li><strong>Discretionary Refunds:</strong> We may, at our sole discretion, grant refunds in limited cases (e.g., duplicate billing or proven technical failure on our end that prevents access for more than 48 hours). If you believe you qualify, contact info@bsi.network.</li>
        <li><strong>Chargebacks:</strong> If you initiate a chargeback with your bank or Credit Card Company without contacting us first to resolve the issue, we will immediately suspend your account and restrict access to all Services while we investigate.</li>
      </ul>

      <h2>8) License to Use the Services and Creator Content</h2>
      <p>Learnify provides a platform for Creators to share academic content.</p>
      <p><strong>Creator Ownership:</strong> Learnify does not own the academic content, lectures, or materials streamed or uploaded by users (&quot;Creators&quot;). Ownership remains with the respective Creator.</p>
      <p><strong>Limited License to Users:</strong> When you access a stream or academic track, you are granted a limited, non-exclusive, personal license to view that content via the Services. You do not acquire any ownership rights to the Creator&apos;s content.</p>
      <p><strong>Prohibitions:</strong> You may not:</p>
      <ul>
        <li>Record, screen-capture, &quot;rip,&quot; or redistribute a Creator&apos;s live stream or VOD without the Creator&apos;s explicit permission.</li>
        <li>Use a Creator&apos;s teaching methods or materials to build a competing platform or service.</li>
        <li>Use the Services to circumvent a Creator&apos;s paywall or subscription requirements.</li>
      </ul>

      <h2>9) User Content (Broadcasting, Chat, and Submissions)</h2>
      <p>You may submit content to the Services, including text chat, voice notes, project files, and live audio/video if you are invited to broadcast (&quot;User Content&quot;).</p>
      <ul>
        <li><strong>License to Learnify:</strong> By submitting User Content, broadcasting on the Services, or participating in a live stream, you grant Learnify a worldwide, non-exclusive, royalty-free, perpetual license to host, store, reproduce, display, translate, transcribe, and distribute your User Content (including your voice and likeness) to operate, improve, and promote the Services (e.g., making stream recordings available to other students).</li>
        <li><strong>Responsibility:</strong> You are entirely responsible for your User Content and represent that you have all necessary rights to share it without infringing on third-party intellectual property.</li>
      </ul>

      <h2>10) Prohibited Conduct (Community Guidelines)</h2>
      <p>To maintain a safe, academic, and welcoming environment, you agree not to:</p>
      <ul>
        <li><strong>Harass or Threaten:</strong> Engage in hateful conduct, targeted harassment, bullying, doxing, or threats of physical harm.</li>
        <li><strong>Disrupt Streams:</strong> Engage in stream sniping, chat spamming, or deliberately disrupting an instructor&apos;s live broadcast.</li>
        <li><strong>Violate Academic Integrity:</strong> Cheat on skill-track assessments, or share answers.</li>
        <li><strong>Promote Illegal Acts:</strong> Stream or share content involving illegal drugs, violence, self-harm, or pornography.</li>
        <li><strong>Abuse the Tech:</strong> Scrape, reverse engineer, DDoS, or upload malware to the Services.</li>
        <li><strong>Spam:</strong> Use the community circles to sell unauthorized third-party services, post referral links, or engage in unauthorized commercial broadcasting.</li>
      </ul>

      <h2>11) Intellectual Property &amp; Platform Ownership</h2>
      <p><strong>Platform Rights:</strong> The &quot;Learnify&quot; name, the learnify-streams.com website, the software, the stream-player technology, the gamification algorithms (XP/Leaderboards), and the site&apos;s &quot;look and feel&quot; are the exclusive property of Learnify Technologies, Inc.</p>
      <p><strong>Creator Rights:</strong> Learnify respects the intellectual property of its Creators. Creators are responsible for ensuring they have the rights to the academic materials they stream.</p>
      <p><strong>Stream Overlays:</strong> Any specific Learnify-branded stream overlays or interactive tools provided by the platform remain the property of Learnify Technologies, Inc., even when used within a Creator&apos;s broadcast.</p>

      <h2>12) DMCA / Copyright Complaints</h2>
      <p>We respect intellectual property rights. If you believe content on the Services (including user broadcasts or uploaded projects) infringes your copyright, email info@bsi.network with:</p>
      <ul>
        <li>Your contact information.</li>
        <li>Identification of the copyrighted work.</li>
        <li>Identification of the allegedly infringing material (with URL/timestamp).</li>
        <li>A statement of good-faith belief that the use is unauthorized.</li>
        <li>A statement under penalty of perjury that your notice is accurate and you are the rights holder (or authorized agent).</li>
      </ul>

      <h2>13) Termination</h2>
      <p>We may suspend or terminate your access to the Services, delete your account, and revoke your XP at any time, without notice or liability, if:</p>
      <ul>
        <li>You violate these Terms or our Prohibited Conduct rules.</li>
        <li>Your use poses a security, legal, or community risk.</li>
        <li>We are required to do so by law.</li>
      </ul>
      <p>Upon termination, your license to access streams is immediately revoked.</p>

      <h2>14) Disclaimers (Neutral Service Provider)</h2>
      <p>LEARNIFY IS A NEUTRAL PLATFORM. We do not produce, edit, or pre-screen the academic content provided by Creators.</p>
      <p><strong>No Warranty of Content:</strong> We make no guarantees regarding the accuracy, safety, or quality of the lessons provided by Creators. Use of any information obtained through the Services is at your own risk.</p>
      <p><strong>Third-Party Conduct:</strong> Learnify is not responsible for the conduct of any user, whether online or offline.</p>
      <p><strong>&quot;As-Is&quot; Service:</strong> The platform is provided &quot;As-Is.&quot; We do not guarantee the Services will be uninterrupted or that streams will not buffer due to external internet conditions. We do not warrant that the Services will be uninterrupted, error-free, completely secure, or that educational outcomes, job placement, or skill improvements will be achieved through your use of the platform.</p>

      <h2>15) Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEARNIFY TECHNOLOGIES, INC. WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES, LIVE STREAMS, OR DIGITAL CONTENT.</p>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICES WILL NOT EXCEED THE AMOUNT YOU PAID TO LEARNIFY TECHNOLOGIES, INC. FOR THE SERVICES IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.</p>

      <h2>16) Indemnification</h2>
      <p>You agree to indemnify and hold harmless Learnify Technologies, Inc. and its affiliates, officers, instructors, employees, and agents from any claims, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of or related to:</p>
      <ul>
        <li>Your use of the Services or participation in live streams.</li>
        <li>Your User Content.</li>
        <li>Your violation of these Terms or any third-party rights.</li>
      </ul>

      <h2>17) Disputes, Governing Law, and Venue</h2>
      <ul>
        <li><strong>Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.</li>
        <li><strong>Informal Resolution:</strong> If a dispute arises, you agree to first contact us at info@bsi.network to attempt an informal resolution.</li>
        <li><strong>Venue:</strong> Unless prohibited by law, any legal action must be brought in the state or federal courts located in Delaware, and you consent to personal jurisdiction and venue in those courts.</li>
      </ul>

      <h2>18) Changes to These Terms</h2>
      <p>We may update these Terms from time to time to reflect changes in our streaming features, community rules, or legal requirements. We will update the Last Updated date above. If changes are material, we may provide notice through the Services or via email. Your continued use of the Services after changes become effective constitutes your binding acceptance of the updated Terms.</p>

      <h2>19) Apple App Store Specific Terms</h2>
      <p>
        The following supplemental terms apply only to your use of the Services
        through an Apple-branded application downloaded from the Apple App Store
        (the &quot;Licensed Application&quot;). These terms are required by Apple Inc.
        (&quot;Apple&quot;) and apply in addition to all other terms above. In the event
        of any conflict between this section and the rest of these Terms with
        respect to the Licensed Application, this section controls.
      </p>
      <h3>A) Acknowledgment</h3>
      <p>
        You acknowledge that these Terms are concluded between you and Learnify
        Technologies, Inc. only, and not with Apple. Learnify, not Apple, is
        solely responsible for the Licensed Application and its content.
      </p>
      <h3>B) Scope of License</h3>
      <p>
        Learnify grants you a non-transferable license to use the Licensed
        Application on any Apple-branded products that you own or control, and
        as permitted by the Usage Rules set forth in the Apple Media Services
        Terms and Conditions, except that the Licensed Application may be
        accessed and used by other accounts associated with you via Family
        Sharing or volume purchasing.
      </p>
      <h3>C) Maintenance and Support</h3>
      <p>
        Learnify is solely responsible for providing any maintenance and
        support services with respect to the Licensed Application, as specified
        in these Terms or as required under applicable law. You acknowledge
        that Apple has no obligation whatsoever to furnish any maintenance and
        support services with respect to the Licensed Application.
      </p>
      <h3>D) Warranty</h3>
      <p>
        Learnify is solely responsible for any product warranties, whether
        express or implied by law, to the extent not effectively disclaimed. In
        the event of any failure of the Licensed Application to conform to any
        applicable warranty, you may notify Apple, and Apple will refund the
        purchase price for the Licensed Application to you. To the maximum
        extent permitted by applicable law, Apple will have no other warranty
        obligation whatsoever with respect to the Licensed Application, and any
        other claims, losses, liabilities, damages, costs, or expenses
        attributable to any failure to conform to any warranty will be Learnify&apos;s
        sole responsibility.
      </p>
      <h3>E) Product Claims</h3>
      <p>
        You and Learnify acknowledge that Learnify, not Apple, is responsible
        for addressing any claims by you or any third party relating to the
        Licensed Application or your possession and/or use of it, including but
        not limited to: (i) product liability claims; (ii) any claim that the
        Licensed Application fails to conform to any applicable legal or
        regulatory requirement; and (iii) claims arising under consumer
        protection, privacy, or similar legislation.
      </p>
      <h3>F) Intellectual Property Rights</h3>
      <p>
        You and Learnify acknowledge that, in the event of any third-party
        claim that the Licensed Application or your possession and use of it
        infringes that third party&apos;s intellectual property rights, Learnify,
        not Apple, will be solely responsible for the investigation, defense,
        settlement, and discharge of any such intellectual property infringement
        claim.
      </p>
      <h3>G) Legal Compliance</h3>
      <p>
        You represent and warrant that (i) you are not located in a country
        that is subject to a U.S. Government embargo, or that has been
        designated by the U.S. Government as a &quot;terrorist supporting&quot; country;
        and (ii) you are not listed on any U.S. Government list of prohibited
        or restricted parties.
      </p>
      <h3>H) Developer Contact Information</h3>
      <p>
        Direct any questions, complaints, or claims regarding the Licensed
        Application to:
      </p>
      <p>
        Learnify Technologies, Inc.<br />
        131 Continental Dr, Suite 305<br />
        Newark, Delaware, 19713, United States<br />
        Email: <a href="mailto:zaid@learnifyjo.com">zaid@learnifyjo.com</a>
      </p>
      <h3>I) Third-Party Terms of Agreement</h3>
      <p>
        You must comply with applicable third-party terms of agreement when
        using the Licensed Application.
      </p>
      <h3>J) Third-Party Beneficiary</h3>
      <p>
        You and Learnify acknowledge and agree that Apple, and Apple&apos;s
        subsidiaries, are third-party beneficiaries of these Terms with respect
        to the Licensed Application, and that, upon your acceptance of these
        Terms, Apple will have the right (and will be deemed to have accepted
        the right) to enforce these Terms against you as a third-party
        beneficiary thereof with respect to the Licensed Application.
      </p>

      <h2>20) Contact</h2>
      <p>Questions about these Terms? Contact us at:</p>
      <p>
        Learnify Technologies, Inc.<br />
        131 Continental Dr, Suite 305<br />
        Newark, Delaware, 19713, United States<br />
        Email: <a href="mailto:zaid@learnifyjo.com">zaid@learnifyjo.com</a>
      </p>
    </LegalPageLayout>
  )
}
