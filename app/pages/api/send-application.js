import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = formidable({
    multiples: false,
    keepExtensions: true,
    uploadDir: "/tmp", // Safe upload folder
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ message: "Form parsing failed." });
    }

    console.log("FILES RECEIVED:", files.resumeUpload); // Debug
    console.log("FIELDS RECEIVED:", fields);            // Debug

    const { name, email, phone, message } = fields;
    const resume = files.resumeUpload;

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Job Application" <${process.env.EMAIL_USER}>`,
        to: process.env.TO_EMAIL || process.env.EMAIL_USER,
        subject: `New Job Application from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <h3>New Job Application</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
        attachments: [],
      };

      if (resume && resume.filepath) {
        const fileData = fs.readFileSync(resume.filepath);
        mailOptions.attachments.push({
          filename: resume.originalFilename || "resume.pdf",
          content: fileData,
        });
      }

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Application sent successfully!" });
    } catch (error) {
      console.error("Email sending failed:", error);
      return res.status(500).json({ message: "Something went wrong." });
    }
  });
}
