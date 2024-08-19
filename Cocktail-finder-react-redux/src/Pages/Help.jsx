import React from 'react';
import '../App.css'; 
const Help = () => {
  return (
    <section id="help" className="section-help">
      <h2>Help & Support</h2>
      <p>
        Need assistance? Here are some common questions and answers to help you out:
      </p>
      <ul>
        <li><strong>How do I find a recipe?</strong> Use the search bar to find recipes by ingredients or name.</li>
        <li><strong>Can I submit my own recipes?</strong> Yes, use the submission form under the "Submit" section.</li>
        <li><strong>What if I have a problem with the website?</strong> Contact our support team via the contact form.</li>
      </ul>
    </section>
  );
};

export default Help;
