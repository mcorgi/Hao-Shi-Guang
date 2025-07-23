import { Formik } from 'formik';
import { useState } from 'react';

const hoursMap = {
  Monday: ["11:30", "21:00"],
  Tuesday: ["11:30", "21:00"],
  Wednesday: ["11:30", "21:00"],
  Thursday: ["11:30", "21:00"],
  Friday: ["11:30", "22:00"],
  Saturday: ["11:30", "22:00"],
  Sunday: ["11:30", "22:00"],
};

function generateTimeSlots(start, end, intervalMinutes = 30) {
  const slots = [];
  let [startH, startM] = start.split(":").map(Number);
  let [endH, endM] = end.split(":").map(Number);

  let current = new Date(1970, 0, 1, startH, startM);
  const endTime = new Date(1970, 0, 1, endH, endM);

  while (current <= endTime) {
    let hours = current.getHours();
    let minutes = current.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formatted = `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    slots.push(formatted);

    current = new Date(current.getTime() + intervalMinutes * 60000);
  }

  return slots;
}



const ReservationForm = () => {
  const [timeOptions, setTimeOptions] = useState([]);

  const updateTimesForDate = (dateStr) => {
    if (!dateStr) {
      setTimeOptions([]);
      return;
    }

    const date = new Date(dateStr + "T00:00:00");
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

    const hours = hoursMap[weekday];
    if (!hours) {
      setTimeOptions([]);
      return;
    }

    const [open, close] = hours;
    const slots = generateTimeSlots(open, close);
    setTimeOptions(slots);
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', partySize: '1', date: '', time: '', phone: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          if (!values.date) {
            errors.date = 'Required';
          }
          if (!values.time) {
            errors.time = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const status = document.getElementById("contactFormStatus");

          try {
            const response = await fetch('/api/reserve', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              resetForm();
              status.innerHTML = "✅ Reservation submitted successfully!";
            } else {
              const data = await response.json();
              status.innerHTML = `❌ Error: ${data.error || 'Something went wrong.'}`;
            }
          } catch (error) {
            status.innerHTML = "❌ Network error.";
          }

          status.style.display = 'block';

          setTimeout(() => {
            status.style.display = 'none';
          }, 4000);

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} id="contactForm">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <i className="far fa-user" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <i className="fas fa-mobile-alt" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <select
                    name="partySize"
                    value={values.partySize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                      style={{
                      backgroundColor: '#000', // black dropdown background
                      color: '#fff' // white text
  }}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="6">More</option>
                  </select>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="date"
                    name="date"
                    required
                    onChange={e => {
                      handleChange(e);
                      updateTimesForDate(e.target.value); // ✅ Call generator
                    }}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  <i className="far fa-calendar-alt" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
  <div className="kf-field">
    <select
      name="time"
      required="required"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.time}
    style={{
    backgroundColor: '#000', 
    color: '#fff'
  }}
    >
  <option value="">
      {timeOptions.length > 0 ? "Select a time" : "Closed / No slots"}
    </option>
    {timeOptions.map((slot) => (
      <option key={slot} value={slot}>{slot}</option>
    ))}
      {/* Add or adjust slots as needed! */}
    </select>
    <i className="far fa-clock" />
  </div>
</div>


              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-bts">
                  <button
                    type="submit"
                    className="kf-btn"
                    disabled={isSubmitting}
                  >
                    <span>Booking Table</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>

      <div
        className="alert-success"
        style={{ display: "none", textAlign: "center" }}
        id="contactFormStatus"
      >
        <p>Thanks, your reservation has been submitted!</p>
      </div>
    </>
  );
};

export default ReservationForm;
