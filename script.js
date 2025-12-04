// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if(navToggle){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('show'));
  });
}

// contact form simple feedback (you can integrate backend later)
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // small success animation
    const submitBtn = this.querySelector('button');
    submitBtn.textContent = 'Sending...';
    setTimeout(()=>{
      submitBtn.textContent = 'Send Message';
      alert('Thanks! Your message was recorded (demo).');
      this.reset();
    }, 800);
  });
}
