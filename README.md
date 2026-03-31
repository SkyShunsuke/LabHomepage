# Laboratory Homepage (Next.js + Railway)

This project is a modern laboratory homepage designed for Railway hosting.

## Implemented in this step

- Responsive public pages:
  - Home (`About`, `Latest News`, `Latest Project`, `Contact`)
  - Research
  - Blogs
  - Publications
  - Members
  - Join Us
  - Business
  - Contact
- Multilingual public site support with language banner:
  - English
  - Japanese
  - Chinese Simplified
  - Language preference persisted by cookie
- Adaptive color design with automatic dark mode via `prefers-color-scheme`.
- Admin GUI (`/admin`) for dynamic content updates:
  - News
  - Projects
  - Members
  - Publications
  - Blogs
- Blog posts support Markdown input and `.md` file upload; rendered automatically on public pages.
- Simple admin authentication using environment variables and signed cookies.
- PostgreSQL-ready Prisma schema and seed script.

## Stack

- Next.js (App Router, TypeScript)
- Prisma + PostgreSQL
- Server Actions for admin CRUD
- `remark` + `remark-html` for Markdown rendering

## Local setup

1. Copy environment template:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
# Ensure Node.js version matches .tool-versions first.
asdf local nodejs 22.22.1
npm install
```

3. Start local PostgreSQL (optional, if you do not already have one):

```bash
docker compose up -d
```

4. Create database schema:

```bash
npm run db:push
```

5. Seed sample data:

```bash
npm run db:seed
```

6. Start development server:

```bash
npm run dev
```

## Faster interactive preview workflow

If your priority is checking layout/style changes quickly (without waiting for production build or DB setup), use:

```bash
npm run dev:design
```

- Runs Next.js in dev mode with Turbopack for faster rebuilds.
- Runs Next.js in stable dev mode (without production build).
- Uses built-in preview content (news, project, members, publications, blogs) instead of DB queries.
- Best for UI/design iteration.

If you still want real data but faster rebuilds, use:

```bash
npm run dev:fast
```

For a faster production build that skips lint/type checks:

```bash
npm run build:fast
```

## Admin login

- URL: `/admin/login`
- Credentials are from `.env`:
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`

## Railway deployment notes

This repository includes a Railway config file at `railway.toml`:

- Build command: `npm run build`
- Start command: `npm run start`
- Health check path: `/`

### Deploy steps

1. Push this repository to GitHub.
2. In Railway, click `New Project` -> `Deploy from GitHub repo`.
3. Select this repository and create the service.
4. Add a `PostgreSQL` service in the same Railway project.
5. Attach the database to your web service (so `DATABASE_URL` is injected automatically).
6. In your web service `Variables`, set:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `ADMIN_SECRET`
   - `NEXT_PUBLIC_LAB_EMAIL`
   - `NEXT_PUBLIC_LAB_ADDRESS`
   - Optional remote data variables:
     - `PUBLICATIONS_CSV_URL`
     - `MEMBERS_SPREADSHEET_URL`
     - `NEWS_SPREADSHEET_URL`

### First-time database setup

After first deploy, run these one-time commands from Railway service shell:

```bash
npm run db:push
npm run db:seed
```

If you are using only remote spreadsheet/CSV sources and do not need DB-managed content, `db:seed` is optional.

## GitHub Pages deployment (static public site)

This repository now includes a GitHub Actions workflow for GitHub Pages:

- Workflow file: `.github/workflows/deploy-pages.yml`
- Static build command: `npm run build:github-pages`

The static export is intended for the public-facing pages only.

### Important limitations on GitHub Pages

- Admin editing UI is shown as disabled.
- API routes and middleware are not functional (GitHub Pages is static hosting).
- Language cookie switching endpoint is disabled; the static build uses default locale rendering.

### Setup steps

1. Push this repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` (or run the workflow manually from `Actions`).

Your site will be published at:

- `https://<username>.github.io/<repository>/` (project repository), or
- `https://<username>.github.io/` (if repository name ends with `.github.io`)

## Manage publications with Excel + Google Drive (auto sync)

You can keep publications in a CSV managed by Excel and hosted on Google Drive.  
When `PUBLICATIONS_CSV_URL` is set, `/publications` reads that remote CSV instead of DB publications.

1. Open `data/publications.csv` in Excel and edit it.
2. Upload the CSV to Google Drive (or use Google Sheets CSV export).
3. Make the file shared as "Anyone with the link can view".
4. Set in `.env`:

```bash
PUBLICATIONS_CSV_URL="https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing"
PUBLICATIONS_CSV_REVALIDATE_SECONDS="300"
```

Supported URL styles:
- Google Drive file share URL (`drive.google.com/file/d/...`)
- Google Sheets URL (`docs.google.com/spreadsheets/d/...`)
- Direct CSV URL

The site re-fetches this file every `PUBLICATIONS_CSV_REVALIDATE_SECONDS` seconds (default: 300).

CSV columns:
- `title` (required)
- `authors` (required)
- `venue` (required)
- `year` (required, integer)
- `url` (optional; paper link)
- `projectUrl` (optional; project page icon)
- `codeUrl` (optional; code page icon)
- `teaserImageUrl` (optional)
- `abstract` (optional)
- `highlight` (optional; if set, the publication card is highlighted and this text is shown at top-right)

Optional local DB sync commands are still available:

```bash
npm run pubs:import
npm run pubs:import -- --mode=append
npm run pubs:export
```

## Manage members with Google Spreadsheet (auto sync)

You can keep member profiles in a Google Spreadsheet (or CSV) hosted on Google Drive.  
When `MEMBERS_SPREADSHEET_URL` is set, `/members` reads that spreadsheet instead of DB members.

1. Prepare spreadsheet columns:
   - `name` (required)
   - `role` (required)
   - `email` (optional)
   - `homepage` (optional)
   - `researchArea` (optional)
   - `comment` (optional)
   - `imageUrl` (optional)
   - `graduateYear` (optional; shown as "Graduated in {Year}" when present)
2. Share the sheet/file as "Anyone with the link can view".
3. Set in `.env`:

```bash
MEMBERS_SPREADSHEET_URL="https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit#gid=0"
MEMBERS_SPREADSHEET_REVALIDATE_SECONDS="300"
```

Supported URL styles:
- Google Drive file share URL (`drive.google.com/file/d/...`)
- Google Sheets URL (`docs.google.com/spreadsheets/d/...`)
- Direct CSV URL

Member photos use center-cropped circular rendering on the public members page.

## Manage news with Google Spreadsheet (auto sync)

You can manage lab activity news in a Google Spreadsheet (or CSV) hosted on Google Drive.  
When `NEWS_SPREADSHEET_URL` is set, `/news` and homepage latest news read this spreadsheet instead of DB news.

1. Prepare spreadsheet columns:
   - `date` (required; parseable date)
   - `title` (required)
   - `content` (required)
   - `type` (optional; used for color mapping badges)
   - `highlight` (optional; short emphasis text shown in card)
   - `imageUrl` (optional; rendered when provided)
   - `externalUrl` (optional; shows external page button on cards)
2. Share the sheet/file as "Anyone with the link can view".
3. Set in `.env`:

```bash
NEWS_SPREADSHEET_URL="https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit#gid=0"
NEWS_SPREADSHEET_REVALIDATE_SECONDS="300"
```

Supported URL styles:
- Google Drive file share URL (`drive.google.com/file/d/...`)
- Google Sheets URL (`docs.google.com/spreadsheets/d/...`)
- Direct CSV URL

Homepage shows the latest 3 news items from this source.

## Next step suggestions

- Add image upload storage (e.g., S3 or Cloudinary) for member photos and blog cover images.
- Add role-based admin users instead of single shared credentials.
- Add WYSIWYG Markdown preview for blog editing.
- Add multilingual content fields (EN/JA/ZH) for database-driven posts/pages.
