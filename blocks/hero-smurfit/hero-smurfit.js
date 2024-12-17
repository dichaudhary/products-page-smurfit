document.addEventListener('DOMContentLoaded', () => {
  const heroWrapper = document.querySelector('.hero-smurfit-wrapper');
  const heroImage = heroWrapper.querySelector('picture');
  const heroText = heroWrapper.querySelector('[data-aue-prop="text"]');
  const heroSubheading = heroWrapper.querySelector('[data-aue-prop="subheading"]');

  heroWrapper.classList.add('hero');
  heroImage.classList.add('hero-image');
  heroText.classList.add('hero-text');
  heroSubheading.classList.add('hero-subheading');
});
