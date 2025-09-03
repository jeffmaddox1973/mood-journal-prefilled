# CI: GitHub Actions + EAS

Add these **Actions Secrets** in your repo:

- EAS_TOKEN — from `eas token:create`
- APP_STORE_CONNECT_KEY_ID — `38VJ6ZDFX5`
- APP_STORE_CONNECT_ISSUER_ID — `638e3e76-2737-449e-a421-cd084df9acd4`
- APP_STORE_CONNECT_PRIVATE_KEY — base64 of your `.p8`
- APPLE_TEAM_ID — `PTPB28C4MX`
- ASC_APP_ID — `6751868033`

Run workflow: **Actions → Build & Submit (EAS)** → platform: ios → profile: production.
