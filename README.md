# Mirai Compliance

Code-managed Next.js App Router rebuild for `miraicompliance.com`, including the legacy routes and dedicated Google Ads landing pages.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Set a verified Resend sender and API key before testing successful lead delivery. `LEAD_TO_EMAIL` accepts a comma-separated list of recipients. Personally identifiable form values are not written to application logs.

## Production checks

1. Add the five variables in `.env.example` to the Vercel project.
2. Deploy and test the `.vercel.app` preview and production URLs.
3. Confirm every legacy, campaign and thank-you route returns the expected page over HTTPS.
4. Test lead delivery, service-specific thank-you redirects and GTM events in Tag Assistant.
5. Add the apex and `www` domains in Vercel, then use Vercel's project-specific domain inspection values for DNS.
6. In Hostinger, preserve nameservers and all mail/verification records. Change only the conflicting website A/AAAA/ALIAS and `www` records after recording their old values.
7. Keep the WordPress installation intact for fallback. If application code fails, use Vercel rollback first.
8. Update Google Ads final URLs only after both nested campaign URLs pass destination testing. Legacy ad routes intentionally remain HTTP 200 and do not redirect.

Do not hardcode generic Vercel DNS values; use the exact A and CNAME records shown for this project.
