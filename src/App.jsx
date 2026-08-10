import './App.css'
import { useState } from 'react'
import { supabase } from './supabase'
const BASE = import.meta.env.BASE_URL;
function App() {
  const [submitted, setSubmitted] = useState(false);
const handleSubmit = async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  const lead = {
    property_address: formData.get('address'),
    client_name: formData.get('name'),
   
  
    mobile_number: formData.get('mobile'),
    preferred_contact: formData.get('contactMethod'),
selling_timeframe: formData.get('sellingTimeframe'),
    status: 'New Lead',
    source: 'Property Value V2'
  }

  const { error } = await supabase
    .from('leads')
    .insert([lead])

  if (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
    return
  }

 setSubmitted(true)
form.reset()

setTimeout(() => {
  document
    .getElementById('success-message')
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
}, 100)
} 
  const scrollToForm = () => {
    document
      .getElementById('valuation-form')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
<main id="top"><header className="floating-header">
  <div className="floating-header-inner">
    <div className="floating-brand">
      <div className="floating-logo">
 <img src={`${BASE}remax-logo.png`} alt="RE/MAX logo" />
</div>
      
      <div className="floating-brand-text">
        <strong>RE/MAX First Bloemfontein</strong>
        <span>Werner Bosch & Liesl Badenhorst</span>
      </div>
    </div>

    <nav className="floating-nav">
      <a href="#top">Home</a>
      <a href="#team">About</a>
      <a href="#valuation-form">Contact</a>

      <button
        type="button"
        className="floating-cta"
        onClick={scrollToForm}
      >
        Request Report
      </button>
    </nav>
  </div>
</header>
<section className="hero-section">
  <div className="hero-overlay" />

  <div className="hero-layout">
    <div className="hero-copy">
      <p className="hero-eyebrow">Bloemfontein homeowners</p>

      <h1>
        What&apos;s Your Bloemfontein Property Really Worth?
      </h1>

      <p className="hero-subtitle">
        Receive a professional, market-based Property Value Report prepared
        personally for your Bloemfontein home.
      </p>

      <button
        className="primary-button"
        type="button"
        onClick={scrollToForm}
      >
        GET MY FREE PROPERTY VALUE REPORT
      </button>
      <div className="hero-contact-buttons">
  <a
    href="tel:+27823971778"
    className="hero-call-button"
  >
    ☎ Call Now
  </a>

  <a
    href="https://wa.me/27823971778?text=Hi%20Werner%2C%20I%20would%20like%20to%20speak%20to%20you%20about%20my%20property."
    target="_blank"
    rel="noreferrer"
    className="hero-whatsapp-button"
  >
    WhatsApp Now
  </a>
</div>

      <div className="hero-trust">
        <span>✓ No obligation</span>
        <span>✓ Market-based valuation</span>
        <span>✓ Prepared personally</span>
      </div>

      <div className="hero-credibility">
        <div className="hero-stars">★★★★★</div>

        <div>
          <strong>1000+ Professional Property Valuations</strong>
          <span>Completed for Bloemfontein homeowners</span>
        </div>
      </div>
    </div>

    <div className="hero-advisors">
      <div className="hero-person hero-person-werner">
       <img src={`${BASE}werner-cutout.png`} alt="Werner Bosch" />
      </div>

      <div className="hero-person hero-person-liesl">
       <img src={`${BASE}liesl-cutout.png`} alt="Liesl Badenhorst" />
      </div>

      <div className="hero-advisor-caption">
        <strong>Werner Bosch &amp; Liesl Badenhorst</strong>
        <span>Professional Property Practitioners</span>
      </div>
    </div>
  </div>
</section>
     <section className="benefits-section">
  <div className="section-heading">
    <p className="section-eyebrow">Make an informed decision</p>

    <h2>Know where you stand before you sell</h2>

    <p>
      Your personalised Property Value Report gives you the local market
      information needed to plan your next move with confidence.
    </p>
  </div>

  <div className="benefits-grid">
    <article className="benefit-card">
      <div className="benefit-icon">🏡</div>
      <h3>Know your market value</h3>
      <p>
        Understand what your property could realistically sell for in
        today&apos;s Bloemfontein market.
      </p>
    </article>

    <article className="benefit-card">
      <div className="benefit-icon">📊</div>
      <h3>Compare recent sales</h3>
      <p>
        See how your property compares with relevant homes recently sold in
        your area.
      </p>
    </article>

    <article className="benefit-card">
      <div className="benefit-icon">💰</div>
      <h3>Plan your next move</h3>
      <p>
        Use professional local guidance to decide whether, when and how to
        place your property on the market.
      </p>
    </article>
  </div>
</section>

<section className="report-section">
  <div className="report-layout">
    <div className="report-copy">
      <p className="section-eyebrow">Your personalised report</p>

      <h2>Understand your property&apos;s true market position</h2>

      <p className="report-intro">
        Your Property Value Report is prepared personally using recent sales,
        current market activity and professional local knowledge.
      </p>

      <div className="report-points">
        <span>✓ Estimated market value</span>
        <span>✓ Recent comparable sales</span>
        <span>✓ Current local market conditions</span>
        <span>✓ Recommended selling price</span>
        <span>✓ Professional advice from Werner and Liesl</span>
      </div>

      <button
        className="primary-button"
        type="button"
        onClick={scrollToForm}
      >
        Get my property value report
      </button>
    </div>

    <div className="report-preview">
      <img
       src={`${BASE}report-cover.png`}
        alt="Strategic Property and Market Report"
        className="real-report-cover"
      />
    </div>
  </div>
</section>

<section id="team" className="team-section">
 <div className="team-layout">
    <div className="team-copy">
      <p className="section-eyebrow">Your local property advisors</p>

      <h2>Professional advice. Personal service.</h2>

      <p className="team-intro">
  Helping Bloemfontein homeowners make confident property decisions
  through honest advice, local expertise and professional market analysis.
</p>

    

      <div className="team-points">
        <span>✓ Personal attention</span>
        <span>✓ Local market expertise</span>
        <span>✓ Professional property advice</span>
      </div>
    </div>

    <div className="team-visual">
  <div className="advisor-grid">
    <article className="advisor-card">
      <img
       src={`${BASE}werner.jpg`}
        alt="Werner Bosch"
      />

      <div className="advisor-card-content">
        <strong>Werner Bosch</strong>
        <span>Professional Property Practitioner</span>
      </div>
    </article>

    <article className="advisor-card">
      <img
      src={`${BASE}liesl.jpg`}
        alt="Liesl Badenhorst"
      />

      <div className="advisor-card-content">
          <strong>Liesl Badenhorst</strong>
<span>Professional Property Practitioner & Attorney</span>
      </div>
    </article>

</div>
</div>
</div>
</section>

<section className="form-section">
  <div className="form-layout">
    <div className="form-copy">
    <img
  src={`${BASE}remax-logo.png`}
  alt="RE/MAX"
  className="form-remax-logo"
/>
      <p className="section-eyebrow">Request your report</p>

      <h2>Start with a professional property opinion</h2>

      <p>
        Complete the short form and Werner or Liesl will contact you personally
        to prepare your Property Value Report.
      </p>

      <div className="form-reassurance">
        <span>✓ No obligation</span>
        <span>✓ Your information remains confidential</span>
        <span>✓ Personal follow-up from Werner or Liesl</span>
      </div>
      <div className="hero-contact-buttons">
  <a
    href="tel:+27823971778"
    className="hero-call-button"
  >
    ☎ Call Now
  </a>

  <a
    href="https://wa.me/27823971778?text=Hi%20Werner%2C%20I%20would%20like%20to%20speak%20to%20you%20about%20my%20property."
    target="_blank"
    rel="noreferrer"
    className="hero-whatsapp-button"
  >
    WhatsApp Now
  </a>
</div>
    </div>
{submitted ? (

  <div id="success-message" className="success-message">
    <div className="success-check">✓</div>

    <h2>Thank you!</h2>

    <p>Your Property Value Report request has been received.</p>
    <p>Werner or Liesl will contact you personally.</p>

    <a
      className="success-whatsapp"
      href="https://wa.me/27823971778?text=Hi%20Werner%2C%20I%20have%20just%20requested%20a%20Property%20Value%20Report%20and%20would%20like%20to%20chat%20about%20my%20property."
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp us now
    </a>

    <button
      type="button"
      className="success-another"
      onClick={() => {
        setSubmitted(false)

        setTimeout(() => {
          document
            .getElementById('valuation-form')
            ?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })
        }, 100)
      }}
    >
      Request another report
    </button>
  </div>
) : (
  <form
    id="valuation-form"
    className="valuation-form"
    onSubmit={handleSubmit}
  >
    <div className="quick-request-box">
  <span className="quick-request-dot"></span>
  <strong>
    Complete your FREE Property Value Report request in about 1 minute.
  </strong>
</div>
<div className="form-field"> 
        <label htmlFor="address">Property address</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="e.g. 14 Kenneth Kaunda Road, Bloemfontein"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="name">Your full name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name and surname"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="mobile">Mobile number</label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          placeholder="082 123 4567"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-method">How should we contact you?</label>
        <select id="contact-method" name="contactMethod">
          <option value="WhatsApp">WhatsApp</option>
          <option value="Phone">Phone call</option>
          <option value="Email">Email</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="selling-timeframe">When are you considering selling?</label>
        <select id="selling-timeframe" name="sellingTimeframe">
          <option value="Within 3 months">Within 3 months</option>
          <option value="Within 6 months">Within 6 months</option>
          <option value="Within 12 months">Within 12 months</option>
          <option value="Planning ahead">Planning ahead</option>
          <option value="Curious about value">Just curious about the value</option>
        </select>
      </div>

      <button className="form-submit-button" type="submit">
        Get my property value report
      </button>

      <p className="form-disclaimer">
        By submitting this form, you agree that Werner or Liesl may contact you
        regarding your property valuation request.
      </p>
    </form>
    )}
  </div>
</section>
<section className="process-section">
  <div className="section-heading">
    <p className="section-eyebrow">Simple and personal</p>

    <h2>What happens after you request your report?</h2>

    <p>
      We keep the process straightforward, professional and personal from the
      first enquiry.
    </p>
  </div>

  <div className="process-grid">
   <article className="process-card">
  <span className="process-number">01</span>
<div className="process-icon">📋</div>
<h3>Request your report</h3>
  <p>
    Complete the short form with your property details and preferred
    contact method.
  </p>
</article>

<article className="process-card">
  <span className="process-number">02</span>
<div className="process-icon">📞</div>
<h3>We contact you personally</h3>
  <p>
    Werner or Liesl contacts you to confirm the property details and
    understand your plans.
  </p>
</article>

<article className="process-card">
  <span className="process-number">03</span>
<div className="process-icon">🔎</div>
<h3>We research your property</h3>
  <p>
    We review recent comparable sales, current market activity and your
    property’s position in the area.
  </p>
</article>

<article className="process-card">
  <span className="process-number">04</span>
<div className="process-icon">📄</div>
<h3>Your report is prepared</h3>
  <p>
    We prepare your personalised Property Value Report using current
    local market evidence and professional insight.
  </p>
</article>
  </div>
</section>
<section className="testimonial-section">

  <div className="section-heading">

    <p className="section-eyebrow">
      Client Experience
    </p>

    <h2>
      Trusted by Bloemfontein homeowners
    </h2>

  </div>

  <div className="testimonial-card">

    <div className="stars">
      ★★★★★
    </div>

    <p className="testimonial-text">

      "Werner guided us through the valuation process with professionalism and honesty.
      We knew exactly what our home was worth before putting it on the market.
      The advice we received made the selling process so much easier."

    </p>

    <h3>
      — Happy Bloemfontein Homeowner
    </h3>

  </div>

</section>
<section className="final-cta-section">
  <div className="final-cta-content">
    <p className="final-cta-eyebrow">Planning to sell?</p>

    <h2>Know your property’s value before making your next move.</h2>

    <p>
      Receive a professional Property Value Report prepared personally by
      Werner Bosch and Liesl Badenhorst.
    </p>

    <button
      className="final-cta-button"
      type="button"
      onClick={scrollToForm}
    >
      Get my property value report
    </button>

    <div className="final-cta-trust">
      <span>✓ No obligation</span>
      <span>✓ Confidential</span>
      <span>✓ Personal local advice</span>
    </div>
  </div>
</section>

<footer className="site-footer">
  <div className="footer-layout">
    <div className="footer-brand">
      <strong>RE/MAX First Bloemfontein</strong>
      <span>Werner Bosch & Liesl Badenhorst</span>
      <span>Residential Property Practitioners</span>
    </div>

   <div className="footer-actions">
  <a className="footer-action call-button" href="tel:+27823971778">
    ☎ Call Now
  </a>

  <a
  className="footer-action whatsapp-button"
  href="https://wa.me/27823971778?text=Hi%20Werner%2C%20I%20would%20like%20to%20know%20more%20about%20my%20property%27s%20value."
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp Now
</a>

  <a
    className="footer-action email-button"
    href="mailto:werner@remaxfirst.co.za"
  >
    ✉ Email Now
  </a>
</div>
  </div>

  <div className="footer-bottom">
    <span>Professional advice. Better property decisions.</span>
    <span>© 2026 RE/MAX First Bloemfontein</span>
  </div>
</footer>
    </main>
  )
}

export default App/* Hero credibility badge *//* Hero credibility badge */

