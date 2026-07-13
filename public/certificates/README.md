# Certificates

Drop a certificate PDF here, named after its award **`key`** (from `lib/awards.ts`).
The Awards page then automatically shows a **"View Certificate"** button on the
matching card — no code change needed.

Detection runs at build time via `scripts/gen-certificates.mjs`, which regenerates
`lib/certificates.ts` on every `npm run dev` and `npm run build`. Commit the new PDF
together with the regenerated `lib/certificates.ts`.

## Valid file names

| File | Card |
|------|------|
| `ieee_member.pdf`     | IEEE Senior Member |
| `scrs_fellow.pdf`     | SCRS Fellow |
| `raptors_fellow.pdf`  | Hackathon Raptors Fellow |
| `ijtaia_reviewer.pdf` | IJTAIA Peer Reviewer |

Each is served as a static file at `/certificates/<key>.pdf` (locale-independent)
and opens in a new tab. A PDF with no matching key is simply ignored; a key with no
PDF shows no button.
