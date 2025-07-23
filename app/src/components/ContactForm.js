import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <form className="kf-contact-form" method="POST" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div className="col-xs-12 col-sm-4">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="col-xs-12 col-sm-4">
          <input type="tel" name="phone" placeholder="Phone Number" />
        </div>
        <div className="col-xs-12">
          <textarea
            name="message"
            placeholder="Your message here"
            rows="6"
          ></textarea>
        </div>
        <div className="col-xs-12 align-center">
          <button type="submit" className="kf-btn">
            <span>Send Message</span>
          </button>
          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
