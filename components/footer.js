class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: black;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .footer-section h3:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 1px;
          background-color: white;
        }
        .footer-section p, .footer-section a {
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          display: block;
        }
        .footer-section a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .social-links svg {
          width: 20px;
          height: 20px;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #666;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Location</h3>
            <p>12 Bruton Street</p>
            <p>Mayfair, London W1J 6PY</p>
            <p>United Kingdom</p>
            <a href="https://maps.google.com/maps?q=Caffè+Necto+London" target="_blank">View on Map</a>
          </div>
          <div class="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 10am - 5pm</p>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <a href="tel:+442045678901">+44 20 4567 8901</a>
            <a href="mailto:hello@caffenecto.com">hello@caffenecto.com</a>
            <div class="social-links">
              <a href="https://instagram.com/caffenecto" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/caffenecto" target="_blank" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://wa.me/442045678901" target="_blank" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.64 11.64 0 0 0 12 0a11.64 11.64 0 0 0-8.48 3.52A11.61 11.61 0 0 0 0 12c0 2 .52 3.92 1.52 5.6L0 24l6.52-1.68A11.62 11.62 0 0 0 12 24a11.64 11.64 0 0 0 8.52-3.52A11.61 11.61 0 0 0 24 12a11.64 11.64 0 0 0-3.48-8.52zM12 22a9.64 9.64 0 0 1-4.96-1.36l-.36-.2-3.88 1 1.04-3.76-.24-.36A9.6 9.6 0 0 1 2 12a9.64 9.64 0 0 1 2.84-6.8A9.64 9.64 0 0 1 12 2a9.64 9.64 0 0 1 6.8 2.84A9.64 9.64 0 0 1 22 12a9.64 9.64 0 0 1-2.84 6.8A9.64 9.64 0 0 1 12 22z"></path>
                  <path d="M17 15.5c-.3-.15-1.8-.9-2.07-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2-.36.22-.66.08a7.88 7.88 0 0 1-2.3-1.42 8.74 8.74 0 0 1-1.6-1.98c-.16-.27 0-.42.12-.57.13-.13.3-.33.45-.5.15-.17.2-.28.3-.46.1-.18.05-.34 0-.5-.05-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.52H6.9c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8a11.4 11.4 0 0 0 4.32 4.3c.6.26 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.7-1.18.2-.58.2-1.08.14-1.18z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Caffè Necto. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
