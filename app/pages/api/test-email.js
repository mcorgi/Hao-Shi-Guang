import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Create test file path (use any small PDF or create a dummy txt)
    const testFilePath = path.join(process.cwd(), "public", "test.pdf");

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: "Test Email with Attachment",
      text: "This is a test email with an attachment.",
      attachments: [
        {
          filename: "test.pdf",
          path: testFilePath, // attach directly from file path
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Test email sent successfully!" });
  } catch (error) {
    console.error("Error sending test email:", error);
    return res.status(500).json({ message: "Failed to send test email." });
  }
}
