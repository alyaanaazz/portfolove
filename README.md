# Nisrina Alya Nabilah — Portfolio

A premium personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `MEDIUM_USERNAME` | Your Medium username (without `@`). Used for the RSS blog integration. |
| `NEXT_PUBLIC_SITE_URL` | The public URL of your deployed site. Used for SEO metadata and sitemap. |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

### Deployment (Vercel)

1. Push your repository to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Set the environment variables in the Vercel dashboard.
4. Deploy. No Docker, no separate backend required.

---

## How to Customize Content

### Add a Project

Edit `src/data/projects.ts` and add a new object to the array:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "A short description.",
  year: "2026",
  role: "Designer & Developer",
  category: "Web App",
  image: "/images/projects/my-project.jpg",
  technologies: ["Next.js", "TypeScript"],
  featured: true,
  problem: "What problem it solves.",
  process: "How you approached it.",
  solution: "What you built.",
  result: "The outcome.",
  gallery: ["/images/projects/my-project-1.jpg"],
  links: { live: "https://...", github: "https://..." },
}
```

Place project images in `public/images/projects/`.

### Add an Experience

Edit `src/data/experience.ts` and add a new object **at the top** of the array (newest first). The homepage automatically displays the 3 most recent entries.

### Add a Certification

Edit `src/data/certifications.ts` and add a new object to the array:

```ts
{
  id: "cert-unique-id",
  type: "certification",
  name: "Certification Name",
  issuer: "Issuing Organization",
  issueDate: "2026",
  credentialId: "XXXX-XXXX",
  credentialUrl: "https://...",
  logo: "/images/certifications/logo.png",
  category: "Design",
  skills: ["Skill 1", "Skill 2"],
  featured: false,
}
```

### Add a Technology

Edit `src/data/tech-stack.ts` and add a new object:

```ts
{ name: "Svelte", category: "Frontend", icon: "Layers" }
```

Available icon names are mapped in `src/components/sections/tech-stack-section.tsx`.

### Replace Profile Image

Replace `public/images/profile.jpg` with your new image.

### Replace CV

Replace `public/cv/nisrina-alya-nabilah-cv.pdf` with your updated CV.

### Update Social Links

Edit the `socials` and `socialLinks` fields in `src/data/profile.ts`.

### Configure Medium Username

Set `MEDIUM_USERNAME` in your `.env` file (or update `mediumUsername` in `src/data/profile.ts`).

---

## Architecture

```
src/
  app/           # Next.js App Router pages
  components/    # UI components (sections, ui, navigation, etc.)
  data/          # All portfolio content (TypeScript data files)
  lib/           # Utilities (Medium RSS parser)
  types/         # TypeScript type definitions
public/
  images/        # Static images (profile, projects, certifications)
  cv/            # CV PDF
```

- **Server Components** by default, **Client Components** only where needed (3D card, theme toggle, mobile nav).
- Medium RSS is fetched server-side with 1-hour revalidation.
- No database, no CMS, no auth — just static data files and server-side RSS.

## License

Private. All rights reserved.
