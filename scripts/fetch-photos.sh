#!/usr/bin/env bash
# Downloads the Pexels photos used on the page into public/assets/img as WebP.
# Usage: bash scripts/fetch-photos.sh   (needs curl + ImageMagick `convert`)
set -euo pipefail
OUT="$(dirname "$0")/../public/assets/img"
mkdir -p "$OUT"
# name:pexels-id:width
while IFS=: read -r name id w; do
  [ -z "$name" ] && continue
  [ -f "$OUT/$name.webp" ] && continue
  tmp="$(mktemp --suffix=.jpg)"
  curl -sSf -m 60 -o "$tmp" "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=$w"
  convert "$tmp" -strip -quality 78 "$OUT/$name.webp"
  convert "$tmp" -resize 400x -strip -quality 72 "$OUT/$name-400.webp"
  convert "$tmp" -resize 800x -strip -quality 74 "$OUT/$name-800.webp"
  rm -f "$tmp"
  echo "ok $name ($id)"
done <<'LIST'
hero-facial:5069612:1600
tx-glow:7216285:1200
tx-hydra:5069494:1200
tx-pico:10822254:1200
tx-booster:6629368:1200
tx-rf:4586713:1200
tx-botox:7582568:1200
cn-wajah:3373716:1000
cn-tubuh:3757952:1000
cn-laser:16032298:1000
cn-injectable:7581588:1000
cn-skincare:8101673:1000
cn-pria:7433337:1000
tech-device:4586741:1400
step-konsultasi:7446660:1000
step-treatment:4586739:1000
step-kontrol:15866050:1000
dr-anisa:8376309:900
dr-kevin:19438563:900
dr-linda:4227059:900
dr-raka:14438788:900
tour-lobby:7031704:1200
tour-room:11774389:1200
tour-treatment:35884499:1200
tour-lounge:208504:1200
tour-reception:8459996:1200
tour-bath:374148:1200
plan-bridal:26832149:900
plan-member:374071:900
plan-vip:4612159:900
booking-consult:7578806:1200
LIST
