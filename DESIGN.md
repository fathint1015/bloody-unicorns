# Design Brief

**Purpose**: Premium sports brand cinematic landing page evoking intimidation, power, dominance, and high energy.

**Tone**: Brutalist sport aesthetics — maximalist motion, minimal surface ornamentation, dark aggression, cinematic lighting.

**Visual Identity**: Deep black canvas (#0a0a0a / OKLCH `0.055 0 0`) with dual-red accent system. Deep red (#8b0000) for primary hierarchy; bright red (#ff1a1a) for energy/interaction. Silver-grey text (#c0c0c0 / OKLCH `0.79 0.02 70`) for maximum contrast and legibility.

**Differentiation**: Motion-first choreography. Every interactive surface breathes, scales, or glows on interaction. Hero section pulses. Hover states trigger aggressive red glow (box-shadow layering). Text uses gradient animation. Scroll triggers staggered card animations.

## Color Palette

| Token                | OKLCH Value         | Usage                           |
|----------------------|---------------------|---------------------------------|
| background           | 0.055 0 0           | Page background (ultra-black)   |
| foreground           | 0.79 0.02 70        | Body text, high contrast        |
| card                 | 0.15 0 0            | UI surface lift (subtly lighter)|
| primary (deep red)   | 0.35 0.21 22        | Primary buttons, hierarchy      |
| secondary (bright)   | 0.54 0.28 22        | Interactive hover, accent glow  |
| accent               | 0.54 0.28 22        | Highlights, micro-interactions  |
| muted                | 0.25 0 0            | Disabled, secondary text        |
| border               | 0.22 0 0            | Subtle dividers (rounded-none)  |
| ring                 | 0.54 0.28 22        | Focus state (red)               |

## Typography

| Tier      | Font                | Weight | Usage                      |
|-----------|---------------------|--------|----------------------------|
| display   | Bricolage Grotesque | 700    | Hero titles, section heads |
| body      | DM Sans             | 400–700| Paragraphs, content        |
| mono      | Geist Mono          | 400    | Code, technical labels     |

Type scale: 12–64px. Single line-height (1.6) for readable body text; tighter (1.3) for display.

## Structural Zones

| Zone       | Surface Treatment                                        | Rationale                              |
|------------|----------------------------------------------------------|----------------------------------------|
| hero       | Full-bleed gradient (dark to semi-transparent red glow) | Cinematic entrance, visual dominance  |
| sections   | Alternate `bg-background` and `bg-card` with `rounded-none` | Rhythmic layering, premium clarity   |
| cards      | `bg-card` with `border-0`, hover glow red drop-shadow   | Minimal, elevated on interaction      |
| footer     | `bg-background` with top border (`border-border`)        | Ground the page, minimal hierarchy    |

## Motion & Micro-interactions

- **Hero pulse**: Continuous breathing glow (2s cycle) on logo/background
- **Scroll animations**: Cards fade-in / slide-up on viewport entry (staggered 100ms delays)
- **Hover effects**: All interactive elements scale 1.05–1.1 + red glow-accent shadow
- **Button states**: Primary accent glow intensifies on hover; text gradients shimmer
- **Transition default**: All interactions use smooth cubic-bezier (0.4, 0, 0.2, 1) over 0.3s

## Spacing & Rhythm

- Grid: 4px base unit; multiples of 4 for consistent rhythm
- Sections: 6–8rem vertical padding (premium air)
- Cards: 1rem internal padding (compact, focused)
- Gap between grid items: 1.5–2rem

## Component Patterns

- **Buttons**: Primary (red accent bg), secondary (red outline), CTA (glow on hover)
- **Cards**: Shadow-free by default; glow-accent + scale on hover
- **Text**: Body text uses foreground; headlines use text-gradient-accent for accent highlight
- **Input**: Subtle border on focus (ring-accent, no outline)

## Constraints

- No gradient backgrounds except hero and text highlights
- No rounded corners (radius: 0) — pure angular forms
- No default shadows — glow effects only via box-shadow on interaction
- No decorative illustrations beyond hero hero gradient
- Max palette: 2 reds, 1 grey, 1 black (4 colors total)
- All fonts bundled locally; system fallbacks only for safety

## Signature Detail

Aggressive red glow on interaction. When user hovers a card or button, bright red (`#ff1a1a`) box-shadow creates a cinematic "halo" effect, reinforcing the "intimidating, powerful" mood. Glow layered in two sizes (20px + 40px) for atmospheric depth.
