'use client';
import React from 'react';
import Footer from '../../commonComponents/footer';
import Navbar from '../../commonComponents/navbar';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px 5%' }}>
        <h1 className="mt-10 mb-10">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how Linkwave ("we", "us", or "our") collects, uses, and discloses information
          about you when you access or use our website and services, including any mobile applications offered by us
          (collectively, the "Services").
        </p>

        <h2 className="mt-10 mb-10">Information We Collect</h2>
        <p>
          1. <strong>Information You Provide to Us</strong>:<br />- <strong>Account Information</strong>: When you sign
          up for an account, we collect your name, email address, and password. If you choose to sign up using your
          Google, Facebook, or Apple social ID, we will collect your profile picture, name, and email from these social
          platforms.
          <br />- <strong>Content Information</strong>: You may choose to provide additional information such as text
          and images to customize your public page.
        </p>
        <p>
          2. <strong>Automatically Collected Information</strong>:<br />- <strong>Usage Information</strong>: We
          automatically collect certain information about how you interact with our Services, such as your IP address,
          browser type, operating system, device identifiers, pages visited, and referring website.
          <br />- <strong>Log Data</strong>: Our servers automatically record information ("Log Data") created by your
          use of the Services. Log Data may include information such as your IP address, browser type, operating system,
          the referring web page, pages visited, location, your mobile carrier, device and application IDs, search
          terms, and cookie information. We receive Log Data when you interact with our Services, for example, when you
          visit our website or sign into our Services.
        </p>

        <h2 className="mt-10 mb-10">How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our Services.</li>
          <li>Customize and personalize your experience on our platform.</li>
          <li>Communicate with you, including responding to your inquiries and providing customer support.</li>
          <li>
            Analyze trends, administer the website, track users' movements around the website, and gather demographic
            information.
          </li>
          <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
          <li>Enforce our terms, conditions, and policies.</li>
        </ul>

        <h2 className="mt-10 mb-10">Sharing of Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>With your consent or at your direction.</li>
          <li>With third-party service providers who help us with various aspects of our business operations.</li>
          <li>
            In response to a request for information if we believe disclosure is in accordance with, or required by, any
            applicable law, regulation, legal process, or governmental request.
          </li>
          <li>
            If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights,
            property, and safety of us or others.
          </li>
        </ul>

        <h2 className="mt-10 mb-10">Your Choices</h2>
        <p>
          - You can access and update certain information you provide to us by logging into your account and updating
          your profile settings.
        </p>
        <p>- You may also unsubscribe from promotional emails by following the instructions in those emails.</p>

        <h2 className="mt-10 mb-10">Security</h2>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized
          access, disclosure, alteration, and destruction.
        </p>

        <h2 className="mt-10 mb-10">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
          posting the updated policy on our website.
        </p>

        <h2 className="mt-10 mb-10">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@linkwave.io</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
