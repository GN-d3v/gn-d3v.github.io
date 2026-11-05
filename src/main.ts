const mobileMenu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
document.querySelectorAll<HTMLAnchorElement>('.mobile-menu nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.open = false;
  });
});

const contactForm = document.querySelector<HTMLFormElement>('#contact-form');

if (contactForm) {
  const form = contactForm;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = form.querySelector<HTMLElement>('.form-status');

  if (button && status) {
    const submitButton = button;
    const formStatus = status;
    form.addEventListener('submit', async (event: SubmitEvent) => {
      event.preventDefault();
      const data = new FormData(form);
      submitButton.disabled = true;
      submitButton.textContent = 'Invio in corso…';
      formStatus.textContent = '';

      try {
        const response = await fetch('https://formsubmit.co/ajax/gnd3vs@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `Nuovo contatto da ${data.get('nome')}`,
            nome: data.get('nome'),
            email: data.get('email'),
            azienda: data.get('azienda') || 'Non specificata',
            budget: data.get('budget') || 'Non specificato',
            messaggio: data.get('messaggio'),
          }),
        });
        if (!response.ok) throw new Error('Invio non riuscito');
        form.innerHTML = '<div class="form-success" role="status"><strong>Messaggio ricevuto.</strong><p>Ti rispondiamo entro 48 ore.</p></div>';
      } catch {
        formStatus.textContent = 'Si è verificato un errore. Riprova più tardi.';
        submitButton.disabled = false;
        submitButton.textContent = 'Invia messaggio ↗';
      }
    });
  }
}
