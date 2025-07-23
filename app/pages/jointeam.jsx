import { useState } from "react";
import Layouts from "@/src/layouts/Layouts";

const JoinTeam = () => {
  const [status, setStatus] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    // Debug: log all formData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await fetch("/api/send-application", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Application sent successfully!");
        e.target.reset();
        setFileName("");
      } else {
        setStatus("Failed to send application.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("Error submitting application.");
    }
  };

  return (
    <Layouts>
      <section className="section kf-started-inner">
        <div className="container">
          <h1>Join Our Team (Test Form)</h1>
        </div>
      </section>

      <section className="section kf-contacts-form">
        <div className="container">
          <form
            className="kf-contact-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {/* Name */}
            <div>
              <label>Name:</label>
              <input type="text" name="name" placeholder="Full Name" required />
            </div>

            {/* Resume Upload */}
            <div>
              <label>Upload Resume:</label>
              <input
                type="file"
                name="resumeUpload"
                onChange={handleFileChange}
                required
              />
              {fileName && <p>Selected: {fileName}</p>}
            </div>

            {/* Submit */}
            <div>
              <button type="submit" className="kf-btn">
                Submit Application
              </button>
            </div>
          </form>

          {status && <p>{status}</p>}
        </div>
      </section>
    </Layouts>
  );
};

export default JoinTeam;
