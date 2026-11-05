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

// A phone uses disclosure controls; a wide screen uses the existing tab interface.
const phoneLayout = window.matchMedia('(max-width: 760px)');
const serviceDisclosures: HTMLButtonElement[] = [];
serviceTabs.forEach((tab) => {
  const panel = document.getElementById(tab.getAttribute('aria-controls') || '');
  if (!panel) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'service-disclosure';
  button.id = `${tab.id}-disclosure`;
  button.setAttribute('aria-controls', panel.id);
  button.setAttribute('aria-expanded', 'false');
  button.append(document.createTextNode(tab.textContent || ''));
  const indicator = document.createElement('span');
  indicator.setAttribute('aria-hidden', 'true');
  indicator.textContent = '+';
  button.append(indicator);
  panel.before(button);
  serviceDisclosures.push(button);
  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    serviceDisclosures.forEach((item) => {
      const expanded = item === button && opening;
      item.setAttribute('aria-expanded', String(expanded));
      const content = document.getElementById(item.getAttribute('aria-controls') || '');
      if (content) content.hidden = !expanded;
      const symbol = item.querySelector('span');
      if (symbol) symbol.textContent = expanded ? '−' : '+';
    });
    if (opening && button.getBoundingClientRect().top < 80) {
      button.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  });
});
const processDisclosure = document.querySelector<HTMLDetailsElement>('.process-disclosure');
function setResponsiveInteraction(): void {
  const main = document.querySelector('main');
  const approach = document.getElementById('approccio');
  const reference = document.getElementById(phoneLayout.matches ? 'team' : 'servizi');
  if (main && approach && reference) main.insertBefore(approach, reference);
  if (processDisclosure) processDisclosure.open = !phoneLayout.matches;
  serviceDisclosures.forEach((button, index) => {
    const panel = document.getElementById(button.getAttribute('aria-controls') || '');
    if (!panel) return;
    button.setAttribute('aria-expanded', 'false');
    const symbol = button.querySelector('span');
    if (symbol) symbol.textContent = '+';
    panel.setAttribute('role', phoneLayout.matches ? 'region' : 'tabpanel');
    panel.setAttribute('aria-labelledby', phoneLayout.matches ? button.id : serviceTabs[index].id);
    panel.hidden = phoneLayout.matches || serviceTabs[index].getAttribute('aria-selected') !== 'true';
  });
}
setResponsiveInteraction();
phoneLayout.addEventListener('change', setResponsiveInteraction);

const dockLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.mobile-dock a'));
if ('IntersectionObserver' in window) {
  const dockObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dockLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main > section').forEach((section) => dockObserver.observe(section));
}
