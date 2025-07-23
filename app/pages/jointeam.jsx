import { useState } from "react";
import Layouts from "@/src/layouts/Layouts";

const JoinTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const res = await fetch("/api/send-application", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
        });
      } else {
        setStatus("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/menu_reservation_inner_bg.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Join Our Team
          </h1>
        </div>
      </section>

      {/* Section Job Position Description */}
      <section className="section kf-job-description">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle">We're currently hiring for:</div>
            <h3 className="kf-title">[Insert Position Title Here]</h3>
          </div>
          <p className="kf-text align-center">
            Here’s a short description of what you’re looking for — this is your chance to give candidates an idea of the role, what you value, and what makes working with you special.
          </p>
        </div>
      </section>

      {/* Section Join Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form kf-form-box element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Apply Now</div>
              <h3 className="kf-title">Send Us Your Application</h3>
            </div>

            <form className="kf-contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col-xs-12 col-sm-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="col-xs-12 col-sm-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group kf-resume-upload" style={{ marginTop: "20px", marginBottom: "20px"}}>
                  <input
                    type="file"
                    id="resumeUpload"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden-file-input"
                  />
                  <label htmlFor="resumeUpload" className="kf-btn">
                    <i className="fas fa-paperclip"></i> Attach Your Resume
                  </label>
                  {formData.resume && (
                    <p style={{ marginTop: "8px" }}>
                      Selected file: {formData.resume.name}
                    </p>
                  )}
                </div>
                <div className="col-xs-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cover letter or message here"
                    rows="6"
                  ></textarea>
                </div>
                <div className="col-xs-12 align-center">
                  <button type="submit" className="kf-btn">
                    <span>Submit Application</span>
                  </button>
                </div>
              </div>
            </form>

            {status && <p style={{ marginTop: "15px", textAlign: "center" }}>{status}</p>}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default JoinTeam;
