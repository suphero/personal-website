# Certificates

Drop a certificate file here, named after its award **`key`** (from `lib/awards.ts`).
The Awards page then automatically shows a **"View Certificate"** button on the
matching card — no code change needed.

Accepted formats (in precedence order if a key has more than one): **`.pdf`, `.jpg`,
`.jpeg`, `.png`**.

Detection runs at build time via `scripts/gen-certificates.mjs`, which regenerates
`lib/certificates.ts` on every `npm run dev` and `npm run build`. Commit the new file
together with the regenerated `lib/certificates.ts`.

## Award keys

| `key` | Card |
|-------|------|
| `ieee_member`     | IEEE Senior Member |
| `scrs_fellow`     | SCRS Fellow |
| `raptors_fellow`  | Hackathon Raptors Fellow |
| `ijtaia_reviewer` | IJTAIA Peer Reviewer |

Each file is served statically at `/certificates/<key>.<ext>` (locale-independent)
and opens in a new tab. A file whose name matches no key is ignored; a key with no
file shows no button.
