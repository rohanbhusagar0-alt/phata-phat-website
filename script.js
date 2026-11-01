const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (!button) return;

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach((faqItem) => faqItem.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const data = Object.fromEntries(formData.entries());

    const existing = JSON.parse(localStorage.getItem('scholarnest_leads') || '[]');
    existing.push({ ...data, submittedAt: new Date().toISOString() });
    localStorage.setItem('scholarnest_leads', JSON.stringify(existing));

    if (formStatus) {
      formStatus.textContent = 'Thank you! Your inquiry has been saved successfully.';
    }

    leadForm.reset();
  });
}
