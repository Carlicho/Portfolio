
import './Footer.css'
import SimpleForm from './SimpleForm';

const ContactForm = () => {

  return (
    <footer className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contacto</h3>
        <ul>
          <div>

          <li><strong>Email:</strong> carlosjlicho@gmail.com</li>
          <li><strong>telefono:</strong> +54 9 1157993571</li>
          </div>
          <div>

          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/carlos-lichowski/">Carlos Lichowski</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/">Carlos Lichowski</a></li>  
          </div>
        </ul>

       
      </div>
    </div>

    <SimpleForm/>
  </footer>
  );
};

export default ContactForm;


/* 
 <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
*/