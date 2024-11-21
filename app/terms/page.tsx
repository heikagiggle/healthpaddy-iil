import React from "react";
import terms from "../data/terms.json"; // Adjust the path based on where you store the JSON file

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-6 py-8 text-sm">
      <h1 className="text-2xl font-bold mb-6">{terms.title}</h1>
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="py-3">{terms.introduction.content}</p>
          <p className="py-3">{terms.introduction.details}</p>
          <p className="py-3">{terms.introduction.note}</p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Eligibility</h2>
          <p>{terms.eligibility.content}</p>
        </section>

        {/* Consent */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Consent</h2>
          <p>{terms.consent.content}</p>
          <p className="py-2">{terms.consent.minor_clause}</p>
        </section>

        {/* User Conduct */}
        <section>
          <h2 className="text-xl font-semibold uppercase">User&apos;s Conduct</h2>
          <p className="py-2">{terms.user_conduct.requirements}</p>
          <ul className="list-disc ml-8">
            {terms.user_conduct.violations.map((item, index) => (
              <li key={index} className="py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Intellectual Property</h2>
          <p>{terms.intellectual_property.ownership}</p>
          <p className="py-2">{terms.intellectual_property.responsibilities}</p>
          <p className="py-1">{terms.intellectual_property.note}</p>
        </section>

        {/* change of terms */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Changes to terms</h2>
          <p>{terms.terms.content}</p>
        </section>


        {/* Termination */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Termination</h2>
          <p className="py-2">{terms.termination.policy}</p>
          <p className="py-2">{terms.termination.policytwo}</p>
        </section>

        {/* MEMBER ACCOUNT, PASSWORD, AND SECURITY */}
        <section>
          <h2 className="text-xl font-semibold">
            MEMBER ACCOUNT, PASSWORD, AND SECURITY
          </h2>
          <p className="py-2">{terms.member_account.one}</p>
          <p className="py-2">{terms.member_account.two}</p>
          <p>{terms.member_account.three}</p>
        </section>

        {/* Warranty Disclaimer */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Warranty Disclaimer</h2>
          <p className="py-2">{terms.warranty_disclaimer.content}</p>
          <ul className="list-disc ml-8 py-2">
            {terms.warranty_disclaimer.disclaimer.map((item, index) => (
              <li key={index} className="py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Miscellaneous */}
        <section>
          <h2 className="text-xl font-semibold uppercase">Miscellaneous</h2>
          <ul className="list-disc ml-8 space-y-2">
            <li>
              <strong>Force Majeure:</strong>{" "}
              {terms.miscellaneous.force_majeure}
            </li>
            <li>
              <strong>Third-Party Links:</strong>{" "}
              {terms.miscellaneous.third_party_links}
            </li>
            <li>
              <strong>Applicable Law:</strong>{" "}
              {terms.miscellaneous.governing_law}
            </li>
            <li>
              <strong>Indemnification:</strong>{" "}
              {terms.miscellaneous.indemnification}
            </li>
            <li>
              <strong>Entire Agreement:</strong>{" "}
              {terms.miscellaneous.entire_agreement}
            </li>
            <li>
              <strong>Waiver:</strong> {terms.miscellaneous.waiver}
            </li>
            <li>
              <strong>Severability:</strong> {terms.miscellaneous.severability}
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section >
          <h2 className="text-xl font-semibold uppercase">Contact</h2>
          <p>
            If You have any questions about this Terms and Conditions, please
            contact Us at{" "}
            <a href="/" className="text-[#0E5A61] font-medium">
              (www.healthpaddy.com)
            </a>{" "}
          </p>
        </section>
      </div>
    </div>
  );
}
