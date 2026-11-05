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
            messaggio: data.get('messaggio'),
          }),
        });
        const result: { success?: string | boolean } = await response.json();
        if (!response.ok || result.success === false || result.success === 'false') throw new Error('Invio non riuscito');
        form.innerHTML = '<div class="form-success" role="status"><strong>Messaggio ricevuto.</strong><p>Ti rispondiamo entro 48 ore.</p></div>';
      } catch {
        formStatus.textContent = 'Si è verificato un errore. Riprova più tardi.';
        submitButton.disabled = false;
        submitButton.textContent = 'Invia messaggio ↗';
      }
    });
  }
}

const serviceTabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.service-tabs [role="tab"]'));
function selectServiceTab(tab: HTMLButtonElement, focus = false): void {
  for (const item of serviceTabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panelId = item.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (panel) panel.hidden = !selected;
  }
  if (focus) tab.focus();
}
serviceTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectServiceTab(tab));
  tab.addEventListener('keydown', (event: KeyboardEvent) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % serviceTabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + serviceTabs.length) % serviceTabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = serviceTabs.length - 1;
    else return;
    event.preventDefault();
    selectServiceTab(serviceTabs[next], true);
  });
});


if (mobileMenu) {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector<HTMLElement>('summary')?.focus();
    }
  });
  document.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof Node && !mobileMenu.contains(event.target)) mobileMenu.open = false;
  });
}
