import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_username.value.trim();
    const email = form.current.user_email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;

    const newErrors = {
      name: !name || name.length < 3,
      email: !email || !emailRegex.test(email),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setError(true);
      setSuccess(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setErrors({ name: false, email: false });
          form.current.reset();

          setTimeout(() => setSuccess(false), 5000); // hide after 5s
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);

          setTimeout(() => setError(false), 5000); // hide after 5s
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Try out this hassle-free contact form
          </motion.h1>

          <motion.div variants={listVariant} className="formItem">
            <label>Name*</label>
            <input
              type="text"
              name="user_username"
              placeholder="Jane Doe"
              className={errors.name ? "errorInput" : ""}
              required
            />
            {errors.name && (
              <p className="errorText">Please enter your name.</p>
            )}
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Email*</label>
            <input
              type="email"
              name="user_email"
              placeholder="janedoe@gmail.com"
              className={errors.email ? "errorInput" : ""}
              required
            />
            {errors.email && (
              <p className="errorText">Enter a valid email address.</p>
            )}
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={8}
              name="user_message"
              placeholder="Feel free to send me a message..."
            ></textarea>
          </motion.div>

          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>

          {success && (
            <span>Congrats 👏, Your message has been sent!</span>
          )}
          {error && (
            <span>
              Oops, Something went wrong! Try sending a message on LinkedIn 😊
            </span>
          )}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;