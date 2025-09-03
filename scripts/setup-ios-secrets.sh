#!/usr/bin/env bash
# Usage: ./scripts/setup-ios-secrets.sh <BASE64_P8> <EAS_TOKEN>
set -euo pipefail
if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/"; exit 1
fi
if [ $# -lt 2 ]; then
  echo "Provide base64 of the .p8 and your EAS token."; exit 1
fi
BASE64_P8="$1"
EAS_TOKEN="$2"
gh secret set APP_STORE_CONNECT_KEY_ID -b "38VJ6ZDFX5"
gh secret set APP_STORE_CONNECT_ISSUER_ID -b "638e3e76-2737-449e-a421-cd084df9acd4"
gh secret set APP_STORE_CONNECT_PRIVATE_KEY -b "$BASE64_P8"
gh secret set APPLE_TEAM_ID -b "PTPB28C4MX"
gh secret set ASC_APP_ID -b "6751868033"
gh secret set EAS_TOKEN -b "$EAS_TOKEN"
echo "✅ Secrets set."
