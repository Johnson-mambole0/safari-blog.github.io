/* shared.js — injects nav, footer, and scroll behaviour into every page */

(function () {
  /* ── active page detection ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';

  /* ── NAV ── */
  const navHTML = `
<nav id="nav" class="${['safari.html','climbing.html','national-parks.html','about.html','contact.html','tour-detail.html'].includes(page) ? 'solid' : ''}">
  <a href="index.html" class="nav-logo">Savanna <span>&</span> Summit</a>
  <ul class="nav-links">
    <li><a href="safari.html" ${page==='safari.html'?'class="active"':''}>Safari</a></li>
    <li><a href="climbing.html" ${page==='climbing.html'?'class="active"':''}>Climbing</a></li>
    <li><a href="national-parks.html" ${page==='national-parks.html'?'class="active"':''}>National Parks</a></li>
    <li><a href="about.html" ${page==='about.html'?'class="active"':''}>About Us</a></li>
    <li><a href="contact.html" class="nav-cta" ${page==='contact.html'?'class="nav-cta active"':''}>Plan My Trip</a></li>
  </ul>
  <div class="hamburger" id="ham"><span></span><span></span><span></span></div>
</nav>
<div class="mobile-nav" id="mob-nav">
  <div class="mobile-nav-close" id="mob-close">✕</div>
  <a href="index.html" onclick="closeMob()">Home</a>
  <a href="safari.html" onclick="closeMob()">Safari</a>
  <a href="climbing.html" onclick="closeMob()">Climbing</a>
  <a href="national-parks.html" onclick="closeMob()">National Parks</a>
  <a href="about.html" onclick="closeMob()">About Us</a>
  <a href="contact.html" onclick="closeMob()">Plan My Trip</a>
</div>`;

  /* ── FOOTER ── */
  const footerHTML = `
<div class="contact-strip">
  <p class="contact-strip-copy"><strong>Ready to talk?</strong> Our team is available 7 days a week.</p>
  <div class="contact-chips">
    <a href="mailto:hello@savannaandsummit.co.tz" class="chip">✉ hello@savannaandsummit.co.tz</a>
    <a href="tel:+255000000000" class="chip">✆ +255 000 000 000</a>
    <a href="https://wa.me/255000000000" class="chip">WhatsApp</a>
  </div>
</div>
<footer>
  <div class="footer-top">
    <div>
      <a href="index.html" class="footer-logo">Savanna <em style="font-style:italic;">&</em> Summit</a>
      <p class="footer-about">Tanzania's trusted operator for national park safaris and mountain expeditions. Based in Arusha, guided by passion, committed to the land we love.</p>
      <div class="footer-socials">
        <a href="#" class="soc">in</a>
        <a href="#" class="soc">fb</a>
        <a href="#" class="soc">ig</a>
        <a href="#" class="soc">yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Safari</h5>
      <ul>
        <li><a href="safari.html">Safari Overview</a></li>
        <li><a href="national-parks.html">National Parks</a></li>
        <li><a href="safari.html#private">Private Safari</a></li>
        <li><a href="safari.html#group">Group Safari</a></li>
        <li><a href="safari.html#migration">Great Migration</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Climbing</h5>
      <ul>
        <li><a href="climbing.html">Climbing Overview</a></li>
        <li><a href="climbing.html#lemosho">Lemosho Route</a></li>
        <li><a href="climbing.html#machame">Machame Route</a></li>
        <li><a href="climbing.html#meru">Mount Meru</a></li>
        <li><a href="climbing.html#faq">Climbing FAQ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#team">Our Guides</a></li>
        <li><a href="about.html#conservation">Conservation</a></li>
        <li><a href="about.html#reviews">Reviews</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Savanna & Summit. All rights reserved. · Arusha, Tanzania</span>
    <div class="footer-certs">
      <span class="cert">Licensed Tour Operator</span>
      <span class="cert">Tanzania Tourism Board</span>
    </div>
  </div>
</footer>`;

  /* ── WHATSAPP FLOAT ── */
  const waHTML = `
<a href="https://wa.me/255000000000" class="wa-float" target="_blank" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
  </svg>
  <span class="wa-float-label">Chat with us</span>
</a>`;

  /* ── INJECT ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.body.insertAdjacentHTML('beforeend', waHTML);

  /* ── SCROLL BEHAVIOUR ── */
  const nav = document.getElementById('nav');
  const isSolid = nav.classList.contains('solid');
  if (!isSolid) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ── HAMBURGER ── */
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-nav');
  const close = document.getElementById('mob-close');
  if (ham) ham.addEventListener('click', () => mob.classList.add('open'));
  if (close) close.addEventListener('click', () => mob.classList.remove('open'));

  window.closeMob = () => mob.classList.remove('open');
})();
