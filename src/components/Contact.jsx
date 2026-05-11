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

        <img src="/contact.png" />
      </div>
    </section>
  );
}

export default Contact;









// function Contact() {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>

//       <div className="profile">
//         <div className="backdrop">
//           <img
//             src="https://img.freepik.com/premium-vector/caucasian-woman-with-laptop-headphones-customer-support_285336-2121.jpg"
//             alt="contact"
//           />
//         </div>

//         <form className="form-page">
//           <div className="flex flex-col">
//             <label>Name</label>
//             <input type="text" placeholder="Enter your name" />
//           </div>

//           <div className="flex flex-col">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" />
//           </div>

//           <div className="flex flex-col">
//             <label>Message</label>
//             <textarea rows="5" placeholder="Your message"></textarea>
//           </div>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;