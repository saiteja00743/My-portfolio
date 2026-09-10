# Cinematic portfolio adaptation

Visual reference: https://github.com/gireeshkumarreddy/cinematic-portofilo

The reference informed the black/red opening, condensed typography, ruled navigation, spatial technology panels, warm career clock, and curved project gallery. These are new React components integrated with this portfolio's data. No reference JavaScript, personal videos, or project artwork is shipped. The inspected repository did not contain a license file.

The centerpiece uses an edited version of Sai Teja's photograph with a near-black background, soft edge blending, and scroll movement. The original photo is preserved. The inaccurate polygon silhouette was removed; contain sizing preserves the image's proportions on every viewport. It is not the reference's animated walking-person video. All project screens use this portfolio's screenshots, including the user-supplied Sai Agency preview. The journey uses existing education and internship information, not the reference's example year history.

Portrait asset: `public/profile-hero.png`, edited with the built-in image-generation tool. Prompt: remove the room background, preserve Sai Teja's identity, pose, clothing and chair; replace the background with solid #020202, including gaps around the chair and limbs, with natural edges and no new objects or text. The intermediate transparency attempt returned a checkerboard and was not used.

Fonts are requested from Google Fonts (Anton, Oswald, DM Sans) with local system fallbacks. No WebGL runtime or continuous video decoding is needed. On mobile, the spatial skill panels become a readable grid. Reduced-motion preferences disable parallax and transition effects.

Verification: `npm run build` and `node scripts/verify-portfolio.mjs`. The latter checks actual server-rendered navigation, project data, local image/download paths, and basic accessible controls. It does not substitute for browser interaction or visual testing.

The local `.reference-cinematic` inspection checkout is ignored by Git and is not included in the production build.
