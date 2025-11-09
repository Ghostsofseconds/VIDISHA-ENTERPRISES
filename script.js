// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form submit
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const status = document.getElementById('formStatus');

  status.textContent = "Preparing message...";

  // mailto fallback
  const subject = encodeURIComponent("Contact Form Message from " + name);
  const body = encodeURIComponent(Name: ${name}\nEmail: ${email}\nMessage: ${message});
  window.location.href = mailto:contact@vidishaenterprises.com?subject=${subject}&body=${body};

  setTimeout(() => {
    status.textContent = "Message ready in your email client. Or contact via WhatsApp.";
  }, 500);
}
