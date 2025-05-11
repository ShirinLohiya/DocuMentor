
import React from 'react';

const TermsDocument: React.FC = () => {
  return (
    <div className="max-w-4xl center-element mx-auto  border-bolt-brightPurple/30 shadow-[0_0_15px_rgba(139,92,246,0.2)] animate-fade-in transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] dark:text-white rounded-lg shadow p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Terms and Conditions</h1>

      <section>
        <h2 className="font-semibold">1. User Registration</h2>
        <p>Users must sign up using a valid email ID and password to access platform features.</p>
      </section>

      <section>
        <h2 className="font-semibold">2. Account Responsibility</h2>
        <p>Users are responsible for maintaining the confidentiality of their login credentials.</p>
      </section>

      <section>
        <h2 className="font-semibold">3. Educational Use Only</h2>
        <p>The platform should be used solely for learning and educational purposes.</p>
      </section>

      <section>
        <h2 className="font-semibold">4. Content Upload</h2>
        <p>Users can upload courses and quizzes, which must be original, appropriate, and not violate any copyrights.</p>
      </section>

      <section>
        <h2 className="font-semibold">5. Respectful Behavior</h2>
        <p>Users must interact respectfully and avoid uploading or sharing harmful or offensive material.</p>
      </section>

      <section>
        <h2 className="font-semibold">6. Privacy Assurance</h2>
        <p>Personal data will be handled securely and in accordance with the platform's Privacy Policy.</p>
      </section>

      <section>
        <h2 className="font-semibold">7. Intellectual Property</h2>
        <p>All platform content (excluding user uploads) is owned by the platform and cannot be reused without permission.</p>
      </section>

      <section>
        <h2 className="font-semibold">8. Quiz and Course Use</h2>
        <p>Quizzes and courses are provided for educational guidance and may be updated or modified as needed.</p>
      </section>

      <section>
        <h2 className="font-semibold">9. Service Availability</h2>
        <p>The platform may be temporarily unavailable due to updates or technical issues.</p>
      </section>

      <section>
        <h2 className="font-semibold">10. Terms Update</h2>
        <p>These terms may be revised periodically. Continued use indicates acceptance of changes.</p>
      </section>
    </div>
  );
};

export default TermsDocument;