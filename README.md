# 🚀 Live Demo

[🌐 Live Application](YOUR_VERCEL_URL)

[📂 GitHub Repository](YOUR_GITHUB_URL)

[🎥 Demo Video](OPTIONAL_LOOM_URL)

---

# Highlights

### AI-Powered Basketball Coaching Platform

Built a production-oriented AI coaching platform that combines:

* Computer vision analysis
* Context-aware AI coaching
* Persistent coaching sessions
* User authentication
* Session history
* Progress tracking foundation

---

# Quick Setup & Run (Under 5 Minutes)

## Prerequisites

* Node.js 18+
* npm or pnpm
* Supabase project
* OpenAI API key

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_URL
cd ghostcoach-ai
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

OPENAI_API_KEY=your_openai_api_key
```

## 4. Run the Development Server

```bash
npm run dev
```

Application will be available at:

```txt
http://localhost:3000
```

## 5. Create an Account

* Sign up using email/password
* Upload a basketball image
* Generate AI analysis
* Start a coaching conversation

Setup should take less than 5 minutes assuming Supabase and OpenAI credentials are available.

---

# Architecture Decisions

## Why Next.js

Chosen for:

* Full-stack React development
* Server-side API routes
* Excellent developer experience
* Fast deployment on Vercel
* Scalable application structure

This allowed frontend and backend logic to live within a single codebase while maintaining clear separation of concerns.

---

## Why Supabase

Chosen because it provides:

* Authentication
* PostgreSQL database
* Storage buckets
* Row Level Security
* Real-time capabilities

This significantly reduced infrastructure complexity while still enabling production-grade security patterns.

---

## Why OpenAI Vision

Initially experimented with Gemini but migrated to OpenAI Vision due to:

* More consistent image analysis
* Better structured outputs
* Improved reliability
* Easier prompt control

The structured response quality was particularly important because coaching feedback needed to be rendered predictably in the UI.

---

## Why Zustand

Chosen over Redux because:

* Minimal boilerplate
* Lightweight footprint
* Simpler developer experience
* Sufficient for current application complexity

This keeps state management maintainable while allowing future expansion.

---

## Why Session-Based Architecture

Rather than treating analyses as isolated events, every analysis belongs to a coaching session.

Benefits:

* Historical tracking
* Context-aware conversations
* Future progress analytics
* Long-term player development

This mirrors how real coaching relationships evolve over time.

---

# Key Engineering Decisions

## Context-Aware Coaching

Unlike traditional chat implementations, conversations retain coaching context.

Implemented:

* Session-aware conversations
* Context persistence
* Follow-up coaching support
* Analysis-aware chat responses

This allows the AI coach to understand previous discussions and provide more meaningful guidance.

---

## Persistent Session Architecture

Every analysis is attached to a coaching session.

Each session contains:

* Uploaded image
* AI analysis
* Feedback history
* Associated conversations
* User ownership

Benefits:

* Historical tracking
* Long-term improvement monitoring
* Future analytics support

---

## Secure Multi-Tenant Data Model

Implemented Row Level Security (RLS) across all user-owned resources.

Users can only:

* View their own sessions
* View their own profile
* Access their own uploaded images
* Access their own coaching history

This prevents cross-user data exposure.

---

## OpenAI Vision Migration

Migrated from Gemini to OpenAI Vision.

Reasons:

* More reliable outputs
* Better structured responses
* Improved image analysis quality
* Fewer quota and availability issues

---

## Structured AI Responses

Instead of free-form AI outputs, the application enforces a structured JSON contract.

Benefits:

* Predictable UI rendering
* Easier validation
* Better error handling
* Strong typing throughout the application

---

# AI Prompt Design

## Goal

The objective was not simply to describe an image, but to emulate a basketball coach providing actionable feedback.

The prompts were designed to:

* Analyze basketball mechanics
* Identify strengths
* Identify weaknesses
* Prioritize improvements
* Generate coaching recommendations
* Return structured JSON

---

## Structured Output Strategy

Instead of allowing unrestricted responses, prompts enforce a schema similar to:

```json
{
  "overallScore": 8.6,
  "strengths": [],
  "improvements": [],
  "priorityFocus": "",
  "confidence": 92
}
```

Benefits:

* Consistent UI rendering
* Easier validation
* Reduced hallucinations
* Better user experience

---

## Context Injection

When users continue a coaching conversation, previous analysis results and session context are included in prompts.

This enables:

* Follow-up coaching
* Personalized recommendations
* Context retention
* More realistic coaching interactions

---

# Supabase Implementation

## Authentication

Implemented:

* Sign Up
* Sign In
* Session Persistence
* Protected Routes
* User Metadata Storage

---

## Database Tables

### profiles

Stores:

* Full name
* Player role
* Experience level
* Training goal

---

### sessions

Stores:

* Analysis image
* AI feedback JSON
* Session ownership
* Creation timestamps

---

### chat_messages (planned architecture)

Supports:

* Session-linked conversations
* Coaching history
* Context retrieval

---

## Storage

Configured:

```txt
session-images
```

bucket for player uploads.

Supports:

* Session image persistence
* Future progress comparison
* Historical review

---

## Row Level Security Policies

Implemented ownership-based access patterns.

Examples:

### Profiles

* User can read own profile
* User can update own profile

### Sessions

* User can create own session
* User can view own sessions
* User can delete own sessions

### Storage

* User can upload images
* User can access owned images

This mirrors production SaaS security practices.

---

# Frontend Architecture

## Feature-Based Organization

```txt
src/

├── app/
├── components/
├── features/
├── stores/
├── hooks/
├── providers/
├── lib/
├── validations/
└── types/
```

Benefits:

* Clear ownership boundaries
* Reusable logic
* Easier scaling
* Better maintainability

---

## Modular UI System

Built reusable design primitives:

* GradientButton
* GlassCard
* DashboardShell
* UploadShell
* AnalysisLoader
* Form Components

This avoids page-specific implementations.

---

## Design System

Implemented centralized design tokens.

Includes:

* Colors
* Typography
* Radius scale
* Shadows
* Gradients
* Utility classes

Ensures visual consistency across the application.

---

# State Management

Using Zustand for:

* Lightweight global state
* Session data
* Future chat persistence
* Dashboard state

Chosen over Redux due to lower complexity and better DX for project size.

---

# UX Features

Implemented:

* Loading states
* Analysis progress indicators
* Error handling
* Success feedback
* Animated page transitions
* Contextual empty states

---

# Known Limitations

## Single Image Analysis

Current analysis is based on a single uploaded image.

Future improvements:

* Video analysis
* Multi-frame pose estimation
* Motion tracking

---

## Limited Coaching Memory

Context persistence currently focuses on session-level interactions.

Future improvements:

* Long-term player memory
* Cross-session coaching insights
* Personalized training plans

---

## Basic Progress Tracking

The foundation exists, but advanced analytics are not yet implemented.

Future improvements:

* Performance trends
* Skill progression charts
* Comparative analysis over time

---

## AI Confidence Constraints

Image quality directly impacts analysis quality.

Future improvements:

* Image quality validation
* Confidence thresholds
* User guidance before submission

---

# What I Would Build Next

If this were developed into a real product, the next priorities would be:

## Video-Based Analysis

Allow players to upload shooting videos instead of static images.

Potential features:

* Shot mechanics analysis
* Release timing detection
* Follow-through evaluation
* Movement tracking

---

## Personalized Training Plans

Generate adaptive training programs based on:

* Skill level
* Historical performance
* Coaching history
* Improvement goals

---

## Progress Analytics Dashboard

Provide:

* Improvement trends
* Session comparisons
* Skill breakdowns
* Goal tracking

---

## Real-Time AI Coach

Enable conversational coaching during practice sessions.

Potential features:

* Voice interaction
* Live feedback
* Drill recommendations
* Practice guidance

---

## Team & Coach Features

Expand beyond individual athletes.

Potential features:

* Team dashboards
* Coach accounts
* Shared feedback
* Player management

---

# Why This Project Stands Out

Most AI image-analysis demos stop at:

```txt
Upload → Analyze → Display Result
```

GhostCoach introduces:

```txt
Authentication
→ Session Creation
→ Image Analysis
→ Persistent History
→ Context-Aware AI Chat
→ Progress Tracking Foundation
```

This transforms the project from a demo into the foundation of a real coaching platform.
