(function () {
  const base = window.CAMPAIGN || {};
  const params = new URLSearchParams(window.location.search);
  const campaign = {
    ...base,
    ...Object.fromEntries(["brandName", "brandBy", "campaignLabel", "eyebrow", "headline", "offer", "intro", "highlight", "highlightCaption", "floatTag", "detailsTitle", "detailsText", "footerNote", "footerSlogan"]
      .filter((key) => params.has(key))
      .map((key) => [key, params.get(key)]))
  };

  const root = document.documentElement;
  Object.entries(campaign.theme || {}).forEach(([name, value]) => root.style.setProperty(`--${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value));

  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = campaign[element.dataset.content];
    if (value !== undefined) element.innerHTML = value;
  });

  const headline = document.querySelector("[data-content='headline']");
  if (headline) headline.innerHTML = headline.innerHTML.split("|").map((line) => `<span>${line}</span>`).join("");

  const benefits = document.querySelector("[data-benefits]");
  (campaign.benefits || []).forEach((benefit) => {
    const item = document.createElement("div");
    item.className = "benefit";
    item.innerHTML = `<span class="benefit-icon" aria-hidden="true">✓</span><span>${benefit}</span>`;
    benefits.appendChild(item);
  });

  const cta = document.querySelector("[data-cta]");
  cta.textContent = campaign.cta.label;
  cta.href = campaign.cta.url;
  const secondary = document.querySelector("[data-secondary-cta]");
  secondary.textContent = campaign.secondaryCta.label;
  secondary.href = campaign.secondaryCta.url;

  document.title = `${campaign.headline.replace("|", " ")} | ${campaign.brandName}`;
  document.querySelector("#meta-description").content = campaign.intro;
  document.querySelector("#theme-color").content = campaign.theme.navy;
})();
