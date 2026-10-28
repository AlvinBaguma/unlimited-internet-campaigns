# Unlimited Internet Campaign Page

A zero-build, mobile-first campaign page for Unlimited Internet. It is intentionally temporary and config-driven so the same Vercel deployment can be reused for announcements, offers, and customer communications.

## Customize a campaign

Edit [`config.js`](./config.js). The main fields are:

- `headline`: separate lines with `|`, for example `WEEKEND|BUNDLE DEAL`
- `offer`, `intro`, `benefits`, `highlight`, and `detailsText`
- `cta.url` and `secondaryCta.url`
- `theme.navy`, `theme.navyLight`, `theme.accent`, and `theme.accentSoft`

Do not put secrets, private customer data, or payment credentials in this public page.

### Temporary URL variants

For a one-off campaign link, override text without changing the deployed files:

```text
/?headline=STAY%20CONNECTED%7CTHIS%20WEEKEND&offer=20%25%20OFF&campaignLabel=Weekend%20offer
```

Supported URL overrides are the text fields listed in `app.js`. URL values should be URL-encoded. For a permanent campaign, update `config.js` and redeploy.

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Leave **Framework Preset** as `Other`.
3. Leave the build command empty.
4. Set the output directory to `.`.
5. Deploy.

Every push to the connected GitHub branch will redeploy the page automatically.
