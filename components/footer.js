class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #f5f1e9;
          color: #8b5a2b;
          padding: 2rem 0;
          border-top: 1px solid #e8e0d1;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #6b4521;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          color: #8b5a2b;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #d4af37;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        .copyright {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e8e0d1;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-content">
            <div>
              <h3>Location</h3>
              <p>123 Coffee Lane<br>Beanville, BV 12345</p>
            </div>
            <div>
              <h3>Hours</h3>
              <ul>
                <li>Mon-Fri: 7am - 7pm</li>
                <li>Sat-Sun: 8am - 6pm</li>
              </ul>
            </div>
            <div>
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3>Connect</h3>
              <div class="social-icons">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
              </div>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Caffè Necto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
