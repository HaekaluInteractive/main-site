# 🚀 CMS & FORM FUNCTIONALITY GUIDE

**For:** Haeka Interactive Next.js Site
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS

---

## 📋 TABLE OF CONTENTS

1. [CMS Solutions](#cms-solutions)
2. [Form Handling Solutions](#form-handling-solutions)
3. [Recommended Stack](#recommended-stack)
4. [Implementation Examples](#implementation-examples)
5. [Cost Breakdown](#cost-breakdown)

---

## 🗂️ CMS SOLUTIONS

### **Option 1: Sanity CMS** ⭐ **RECOMMENDED**

**Best for:** Content-rich sites with flexible content modeling

**Pros:**
- ✅ **Excellent TypeScript support** - Generate types from schema
- ✅ **Real-time collaboration** - Multiple editors at once
- ✅ **Structured content** - Perfect for projects, artists, case studies
- ✅ **Portable Text** - Rich text editor with custom components
- ✅ **Asset management** - Built-in image CDN with transformations
- ✅ **Free tier:** 3 users, unlimited API requests, 10GB bandwidth
- ✅ **Great Next.js integration** - Official SDK
- ✅ **Studio customization** - Tailor the CMS to your brand

**Cons:**
- ⚠️ Learning curve for schema setup
- ⚠️ Requires separate studio deployment (or local)

**Pricing:**
- Free: 3 users, 10GB bandwidth
- Growth: $99/mo - 10 users, 200GB bandwidth
- Enterprise: Custom pricing

**Setup Complexity:** Medium

**Use Cases:**
- Projects (Cyberstreet, Desert Echoes, etc.)
- Artists (Lil Spike, bios, music links)
- Blog posts
- Press mentions
- Case studies

---

### **Option 2: Contentful**

**Best for:** Enterprise-grade content management

**Pros:**
- ✅ Industry standard, robust
- ✅ GraphQL API
- ✅ Content preview
- ✅ Workflow management
- ✅ Multi-language support

**Cons:**
- ⚠️ Free tier very limited (25K records, 50 assets)
- ⚠️ Can get expensive quickly
- ⚠️ Steeper learning curve

**Pricing:**
- Free: 1 user, 25K records
- Basic: $300/mo
- Premium: $879/mo

**Setup Complexity:** Medium-High

---

### **Option 3: Payload CMS** ⭐ **OPEN SOURCE ALTERNATIVE**

**Best for:** Full control, self-hosted, code-first approach

**Pros:**
- ✅ **Completely free and open source**
- ✅ Built with Next.js in mind
- ✅ TypeScript-first
- ✅ Self-hosted (full control)
- ✅ Admin panel included
- ✅ Built-in authentication
- ✅ Can deploy alongside your Next.js app

**Cons:**
- ⚠️ You manage hosting and maintenance
- ⚠️ Requires database (MongoDB or Postgres)
- ⚠️ Smaller community than Sanity

**Pricing:**
- Free (self-hosted)
- Cloud (coming soon)

**Setup Complexity:** Medium

---

### **Option 4: Strapi**

**Best for:** Open-source, customizable headless CMS

**Pros:**
- ✅ Free and open source
- ✅ REST & GraphQL APIs
- ✅ Admin panel included
- ✅ Role-based access control
- ✅ Self-hosted option

**Cons:**
- ⚠️ Not TypeScript-first
- ⚠️ Requires separate server
- ⚠️ Database required

**Pricing:**
- Free (self-hosted)
- Cloud starts at $99/mo

**Setup Complexity:** Medium

---

### **Option 5: Notion API** 💡 **QUICK START**

**Best for:** Simple content, fast setup, non-technical editors

**Pros:**
- ✅ **Easiest for editors** - Everyone knows Notion
- ✅ Free tier generous
- ✅ Fast setup (no schema required)
- ✅ Built-in collaboration
- ✅ No hosting costs

**Cons:**
- ⚠️ Not designed as a CMS
- ⚠️ Limited querying capabilities
- ⚠️ Rate limits (3 requests/second)
- ⚠️ No image CDN

**Pricing:**
- Free: Personal use
- Plus: $8/user/month

**Setup Complexity:** Low

---

### **Option 6: Markdown + Git (MDX)**

**Best for:** Developer-first workflow, simple content

**Pros:**
- ✅ Completely free
- ✅ Version controlled (Git)
- ✅ No external dependencies
- ✅ Fast builds
- ✅ Great for blog posts

**Cons:**
- ⚠️ Not user-friendly for non-technical editors
- ⚠️ No admin panel
- ⚠️ Manual image management

**Pricing:**
- Free

**Setup Complexity:** Low

---

## 📧 FORM HANDLING SOLUTIONS

### **Option 1: Resend** ⭐ **RECOMMENDED FOR EMAIL**

**Best for:** Transactional emails, developer-friendly

**Pros:**
- ✅ **Built for developers** - Great DX
- ✅ React Email support (design emails with React)
- ✅ Simple API
- ✅ Email deliverability monitoring
- ✅ Free tier: 100 emails/day, 1 domain
- ✅ TypeScript SDK

**Cons:**
- ⚠️ Email only (not a form backend)

**Pricing:**
- Free: 100 emails/day, 1 domain
- Pro: $20/mo - 50K emails/month

**Use Cases:**
- Contact form submissions → email notifications
- Game submission notifications
- Auto-reply confirmations

**Setup Complexity:** Low

---

### **Option 2: Formspree**

**Best for:** Simple form handling without backend code

**Pros:**
- ✅ No backend code needed
- ✅ Spam protection
- ✅ File uploads
- ✅ Email notifications
- ✅ Webhooks for custom handling
- ✅ Free tier: 50 submissions/month

**Cons:**
- ⚠️ Limited free tier
- ⚠️ Form endpoint URL visible in code

**Pricing:**
- Free: 50 submissions/month
- Gold: $10/mo - 1000 submissions/month

**Setup Complexity:** Very Low

---

### **Option 3: SendGrid**

**Best for:** High-volume email sending

**Pros:**
- ✅ Industry standard
- ✅ Free tier: 100 emails/day forever
- ✅ Templates
- ✅ Analytics
- ✅ High deliverability

**Cons:**
- ⚠️ More complex API
- ⚠️ Requires API routes

**Pricing:**
- Free: 100 emails/day
- Essentials: $19.95/mo - 50K emails/month

**Setup Complexity:** Medium

---

### **Option 4: Web3Forms**

**Best for:** Simple contact forms, no backend

**Pros:**
- ✅ Completely free (unlimited)
- ✅ No backend required
- ✅ Spam protection
- ✅ Custom redirects
- ✅ Email notifications

**Cons:**
- ⚠️ Limited customization
- ⚠️ No file uploads on free tier

**Pricing:**
- Free: Unlimited forms
- Pro: $5/mo - More features

**Setup Complexity:** Very Low

---

### **Option 5: Custom API Route + Database**

**Best for:** Full control, custom workflows

**Pros:**
- ✅ Complete control
- ✅ Store submissions in your database
- ✅ Custom validation
- ✅ Integration with your CMS

**Cons:**
- ⚠️ Requires database setup
- ⚠️ More code to maintain
- ⚠️ Email delivery setup needed

**Tech Stack:**
- Next.js API routes
- Database: Postgres (Vercel Postgres, Supabase, Neon)
- Email: Resend or SendGrid

**Pricing:**
- Depends on chosen services

**Setup Complexity:** Medium-High

---

### **Option 6: Airtable + Webhooks**

**Best for:** Quick MVP, data organization

**Pros:**
- ✅ Visual database
- ✅ Easy to view submissions
- ✅ API included
- ✅ Webhooks for automation
- ✅ Free tier generous

**Cons:**
- ⚠️ Not designed for high volume
- ⚠️ Rate limits

**Pricing:**
- Free: 1,000 records/base
- Plus: $10/user/month

**Setup Complexity:** Low

---

## 🏆 RECOMMENDED STACK

### **For Most Projects (Balanced):**

```
CMS: Sanity
Forms: Resend + Vercel Postgres (optional)
Hosting: Vercel
```

**Why:**
- Great developer experience
- Generous free tiers
- Excellent TypeScript support
- Scales with your needs
- Easy for content editors

**Monthly Cost (Starting):**
- Sanity Free: $0
- Resend Free: $0
- Vercel Hobby: $0
- **Total: $0/month** (scales as needed)

---

### **For Budget-Conscious / MVP:**

```
CMS: Notion API
Forms: Web3Forms or Formspree
Hosting: Vercel
```

**Why:**
- Completely free to start
- Non-technical friendly (Notion)
- Zero backend code needed
- Quick setup

**Monthly Cost:**
- Notion Free: $0
- Web3Forms Free: $0
- Vercel Hobby: $0
- **Total: $0/month**

---

### **For Full Control / Open Source:**

```
CMS: Payload CMS
Forms: Custom API Routes + Resend
Database: Supabase (Postgres)
Hosting: Vercel
```

**Why:**
- Completely open source
- Full control over everything
- Self-hosted CMS
- Own your data

**Monthly Cost:**
- Payload: $0 (self-hosted)
- Supabase Free: $0 (500MB database)
- Resend Free: $0 (100 emails/day)
- Vercel Hobby: $0
- **Total: $0/month**

---

## 💻 IMPLEMENTATION EXAMPLES

### **Example 1: Sanity CMS Setup**

**1. Install Sanity:**
```bash
npm install sanity @sanity/client next-sanity
npx sanity init
```

**2. Define Schema (sanity/schemas/project.ts):**
```typescript
import { defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
```

**3. Fetch Data in Next.js:**
```typescript
// lib/sanity.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-05-03',
  useCdn: false,
})

// app/projects/page.tsx
import { client } from '@/lib/sanity'

async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      excerpt,
      tags,
      "coverImage": coverImage.asset->url
    }
  `)
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  )
}
```

---

### **Example 2: Resend Email Setup**

**1. Install Resend:**
```bash
npm install resend
```

**2. Create API Route (app/api/contact/route.ts):**
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, inquiry } = body

    // Send email to your team
    const { data, error } = await resend.emails.send({
      from: 'contact@haekalu.com',
      to: ['hello@haekalu.com'],
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 })
    }

    // Optional: Send confirmation to user
    await resend.emails.send({
      from: 'hello@haekalu.com',
      to: [email],
      subject: 'Thanks for reaching out!',
      html: `
        <h2>We received your message</h2>
        <p>Hi ${name},</p>
        <p>Thanks for contacting Haekalu Interactive. We'll get back to you within 24-48 hours.</p>
        <p>Best regards,<br>The Haekalu Team</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
```

**3. Environment Variables (.env.local):**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

### **Example 3: Web3Forms Setup (Zero Backend)**

**1. Get API Key:**
- Visit https://web3forms.com
- Sign up for free
- Get your access key

**2. Update Form Component:**
```typescript
// components/studios/SubmissionForm.tsx
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setStatus('loading')

  const formData = new FormData(e.currentTarget)

  // Add Web3Forms access key
  formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY!)

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const json = await res.json()

    if (json.success) {
      setStatus('success')
      setMessage('Thanks for submitting! We\'ll get back to you within 2 weeks.')
      (e.target as HTMLFormElement).reset()
    } else {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  } catch (error) {
    setStatus('error')
    setMessage('Connection error. Please try again.')
  }
}
```

**3. Environment Variables:**
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
```

---

### **Example 4: Notion API as CMS**

**1. Install Notion SDK:**
```bash
npm install @notionhq/client
```

**2. Setup Client (lib/notion.ts):**
```typescript
import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export const PROJECTS_DATABASE_ID = process.env.NOTION_PROJECTS_DB!

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: PROJECTS_DATABASE_ID,
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
  })

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text,
    excerpt: page.properties.Excerpt.rich_text[0]?.plain_text,
    tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
    slug: page.properties.Slug.rich_text[0]?.plain_text,
  }))
}
```

**3. Use in Page:**
```typescript
// app/projects/page.tsx
import { getProjects } from '@/lib/notion'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}
```

---

## 💰 COST BREAKDOWN

### **Scenario 1: Starting Out (0-1K visitors/month)**

**Sanity + Resend + Vercel:**
- Sanity: $0 (Free tier)
- Resend: $0 (100 emails/day = 3,000/month)
- Vercel: $0 (Hobby tier)
- **Total: $0/month**

---

### **Scenario 2: Growing (10K visitors/month, 200 submissions/month)**

**Sanity + Resend + Vercel:**
- Sanity: $0 (Still within free tier)
- Resend: $20/mo (Pro tier for reliability)
- Vercel: $20/mo (Pro tier for team collaboration)
- **Total: $40/month**

---

### **Scenario 3: Established (100K visitors/month, 1K submissions/month)**

**Sanity + Resend + Vercel:**
- Sanity: $99/mo (Growth tier)
- Resend: $20/mo (Pro tier)
- Vercel: $20/mo (Pro tier)
- **Total: $139/month**

---

## 🎯 MY RECOMMENDATION

### **For Haeka Interactive, I recommend:**

```
CMS: Sanity
Forms: Resend
Database (optional): Vercel Postgres
Hosting: Vercel
```

**Reasoning:**

1. **Sanity** is perfect for your content structure:
   - Projects (Cyberstreet, Desert Echoes, etc.)
   - Artists (Lil Spike, etc.)
   - Press mentions
   - Case studies
   - Blog posts

2. **Resend** for forms because:
   - Simple API
   - Great deliverability
   - React Email support (design beautiful emails)
   - Generous free tier
   - TypeScript SDK

3. **Vercel** hosting because:
   - Built for Next.js
   - Zero config deployment
   - Great DX
   - Free SSL
   - Edge functions

**Implementation Timeline:**
- Day 1-2: Sanity setup + schema design
- Day 3: Content migration
- Day 4: Form API routes with Resend
- Day 5: Testing and deployment

**Starting Cost:** $0/month
**Scaling Cost:** ~$40-140/month when you grow

---

## 📚 NEXT STEPS

### **Phase 1: CMS Setup (Week 1)**
1. Choose CMS (recommend Sanity)
2. Design content schemas
3. Set up Studio
4. Migrate sample content
5. Update components to fetch from CMS

### **Phase 2: Forms (Week 1)**
1. Choose form solution (recommend Resend)
2. Create API routes
3. Test email delivery
4. Add error handling
5. Create email templates

### **Phase 3: Testing (Week 2)**
1. Test all forms
2. Test content updates
3. Verify email delivery
4. Load testing
5. Security audit

### **Phase 4: Launch (Week 2)**
1. Deploy to production
2. Monitor forms
3. Train content editors
4. Document workflows

---

## 🔗 RESOURCES

### **Sanity:**
- Docs: https://www.sanity.io/docs
- Next.js Guide: https://www.sanity.io/guides/sanity-nextjs-guide
- Schema Docs: https://www.sanity.io/docs/schema-types

### **Resend:**
- Docs: https://resend.com/docs
- React Email: https://react.email/docs
- Next.js Example: https://resend.com/docs/send-with-nextjs

### **Payload CMS:**
- Docs: https://payloadcms.com/docs
- Next.js: https://payloadcms.com/docs/getting-started/installation

### **Vercel:**
- Next.js Hosting: https://vercel.com/docs
- Postgres: https://vercel.com/docs/storage/vercel-postgres

---

## ❓ FAQ

**Q: Can I start free and upgrade later?**
A: Yes! All recommended solutions have free tiers that scale gracefully.

**Q: What if I get 10,000 form submissions in a month?**
A: With Resend Pro ($20/mo), you get 50K emails. Store submissions in Postgres for records.

**Q: Is Sanity overkill for my needs?**
A: If you only need a blog, consider MDX. For projects/artists/dynamic content, Sanity is perfect.

**Q: Can non-technical team members use Sanity?**
A: Yes! Sanity Studio is user-friendly. Train them in 30 minutes.

**Q: How do I prevent spam?**
A: Add rate limiting, reCAPTCHA, or honeypot fields. Resend has spam filtering.

**Q: What about GDPR compliance?**
A: All recommended services are GDPR compliant. Add privacy policy and consent checkboxes.

---

**Need help implementing? Let me know which stack you'd like to go with and I can provide detailed implementation!** 🚀
