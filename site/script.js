const deck = document.querySelector('[data-deck]');
const previousButton = document.querySelector('[data-deck-prev]');
const nextButton = document.querySelector('[data-deck-next]');
const currentLabel = document.querySelector('[data-deck-current]');
const detailButton = document.querySelector('.detail-toggle');
const detailPanel = document.querySelector('#card-detail-001');
const firstCard = document.querySelector('#article-card-001');

let activeCard = 0;

function renderDeck() {
  if (!deck || !previousButton || !nextButton || !currentLabel) return;
  deck.dataset.active = String(activeCard);
  previousButton.disabled = activeCard === 0;
  nextButton.disabled = activeCard === 1;
  currentLabel.textContent = activeCard === 0 ? '01' : '02';
}

previousButton?.addEventListener('click', () => {
  activeCard = 0;
  renderDeck();
});

nextButton?.addEventListener('click', () => {
  activeCard = 1;
  renderDeck();
});

detailButton?.addEventListener('click', () => {
  if (!firstCard || !detailPanel) return;
  const expanded = detailButton.getAttribute('aria-expanded') === 'true';
  detailButton.setAttribute('aria-expanded', String(!expanded));
  detailButton.querySelector('span').textContent = expanded ? '展开详情' : '收起详情';
  detailPanel.setAttribute('aria-hidden', String(expanded));
  firstCard.classList.toggle('is-expanded', !expanded);
});

const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-18% 0px -68% 0px' },
);

sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

renderDeck();
