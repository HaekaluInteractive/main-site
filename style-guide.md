🎨 HAEKA INTERACTIVE — STYLE GUIDE
1. COLOR SYSTEM
1.1 Primary Palette

These colors define Haeka’s core identity: deep, futuristic, elegant, African-inspired.

Token	Hex	Usage
--color-primary	#0A0F1F	Main background (deep midnight blue/black)
--color-primary-light	#182033	Panels, cards, subtle contrast
--color-accent	#E4B63E	Gold accent for calls to action and highlights
--color-accent-secondary	#6A00FF	Neon violet used sparingly for futuristic elements

Meaning:

The dark base gives a cinematic aesthetic.

Gold invokes prestige (press features, achievements).

Neon violet hints at futurism + music + gaming culture.

1.2 Neutral Palette
Token	Hex	Usage
--color-white	#FFFFFF	Body text on dark
--color-gray-100	#E6E6E6	Light text
--color-gray-300	#B3B3B3	Muted text
--color-gray-600	#4A4A4A	Subtle dividers
--color-gray-900	#1A1A1A	Dark backgrounds
1.3 Status Colors
Token	Hex	Usage
--color-success	#21C16B	Success
--color-warning	#FFC83D	Warnings
--color-error	#FF4D4F	Form errors
2. TYPOGRAPHY SYSTEM

The mix of expressive display fonts + highly legible sans serif.

2.1 Font Families
Use	Font
Display Headings	"Space Grotesk", sans-serif
Body text	"Inter", sans-serif
UI / labels	Inter
Optional brand personality	"Neue Montreal" or "General Sans"
2.2 Font Sizes (Responsive Scale)
Token	Mobile	Desktop	Usage
text-xs	12px	12px	Labels
text-sm	14px	14px	Small UI text
text-base	16px	16px	Body
text-lg	18px	18px	Intro paragraphs
text-xl	20px	20px	Section headings
text-2xl	24px	28px	Subheaders
text-3xl	30px	36px	Page headers
text-4xl	36px	48px	Hero small headings
text-5xl	48px	60px	Hero large
text-6xl	60px	72px	Cinematic hero display
2.3 Line Height

Body: 1.6

Headings: 1.2

Hero: 1.1

3. SPACING SYSTEM

Use a standardized 4px scale.

Token	Value	Usage
space-1	4px	micro spacing
space-2	8px	compact
space-3	12px	
space-4	16px	
space-6	24px	section padding
space-8	32px	
space-10	40px	
space-12	48px	
space-16	64px	major sections
space-24	96px	hero sections
space-32	128px	cinematic spacing
4. BORDER RADIUS & SHAPES
Token	Value	Usage
rounded-sm	4px	small UI elements
rounded-md	8px	cards
rounded-lg	12px	sections
rounded-xl	16px	pill buttons
rounded-2xl	24px	hero components
rounded-full	999px	circular

The brand prefers soft, rounded futuristic UI.

5. ELEVATION / SHADOW SYSTEM

Haeka Interactive is cinematic; shadows must be subtle and atmospheric.

Token	Shadow
shadow-sm	0 2px 4px rgba(0,0,0,0.15)
shadow-md	0 4px 12px rgba(0,0,0,0.2)
shadow-lg	0 8px 24px rgba(0,0,0,0.35)
shadow-glow	0 0 40px rgba(106,0,255,0.4) (neon violet glow)

Use shadow-glow sparingly for hover effects on hero CTAs.

6. UI TOKENS
6.1 Buttons
Primary Button

BG: --color-accent (gold)

Text: black

Radius: rounded-xl

Hover: slightly darker gold #CFA530

Shadow: shadow-md

Secondary Button

BG: transparent

Border: 1px solid #E4B63E

Text: gold

Hover: BG rgba(228,182,62,0.15)

Radius: rounded-xl

Tertiary Button

Text-link style

Underline on hover

Used in subtle UI patterns

6.2 Cards
Element	Token
Background	--color-primary-light
Radius	rounded-lg (12px)
Padding	space-6 (24px)
Shadow	shadow-sm

Artists, projects, articles use cards.

6.3 Inputs & Forms

BG: #182033

Border: 1px solid #4A4A4A

Focus: 1px solid #E4B63E

Text: white

Placeholder: #B3B3B3

Radius: rounded-md
Padding: space-3 (12px)

7. GRID SYSTEM
Page Layout

Max width: 1200px

Gutters: 24px

Sections: 80px top/bottom

Grid

12-column responsive grid

Cards use 3-column layout on desktop, 1-column mobile

8. MOTION & ANIMATION GUIDELINES
Timing

Ease-in-out: 250ms for UI

Cinematic reveals: 450–600ms

Effects

Fade-up

Soft opacity changes

Subtle parallax on hero

Avoid “bouncy” animations to maintain premium aesthetic.

9. AFROFUTURIST VISUAL GUIDELINES
Recommended elements

Subtle geometric patterns

Gold tribal-line accents

Neon purple grid or HUD effects

Noise texture overlays

Gradients blending gold ↦ violet (rarely, for highlights)

Not recommended

Overwhelming tribal motifs

Bright primary colors

Flat corporate minimalism

The brand is cinematic, stylish, and sensory, not cartoonish.