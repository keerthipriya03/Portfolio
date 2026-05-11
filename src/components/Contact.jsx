import profileImage from "../images/contact.avif";
import "./page.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>

        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Contact;






