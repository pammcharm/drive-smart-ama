

# 🚦 TFLaw – Smart Traffic Law Learning Platform (MVP v1.0)

## Overview
A multilingual, AI-powered learning platform helping users in Rwanda learn traffic laws (Amategeko y'Umuhanda) and prepare for driving exams. Professional design with deep blue branding, traffic light logo, and full responsiveness.

---

## Phase 1: Foundation & Design System

### Branding & Theme
- **Logo**: Custom traffic light icon (🔴🟡🟢) styled with the app name "TFLaw"
- **Color palette**: Deep Blue primary, Green for success, Red for warnings, Purple accent for AI section
- **Typography**: Clean, professional font (Inter) with large readable text
- **Dark mode toggle** with smooth transitions
- **Mobile-first responsive design** throughout

### Layout Shell
- Responsive navigation bar with logo, main links (Learn, Quiz, AI Assistant), language selector, and auth buttons
- Mobile: hamburger menu with slide-out drawer
- Footer with minimal info

---

## Phase 2: Backend Setup (Lovable Cloud)

### Authentication
- Email/password registration and login
- Google OAuth sign-in
- User profiles table storing: display name, preferred language, quiz history stats

### Database
- **profiles** table: user preferences, language, stats
- **quiz_results** table: score, topic, date, answers
- **progress** table: completed lessons per user

### AI Integration (Lovable AI)
- Edge function for AI chat (traffic law assistant)
- Edge function for AI-generated quizzes
- Responses in user's selected language

---

## Phase 3: Multi-Language System

- Three languages: **Kinyarwanda** (default), **English**, **French**
- Language selector accessible from navbar (persistent across sessions)
- All UI labels, buttons, and navigation translated
- Lesson content available in all 3 languages
- AI responds in the user's selected language
- Auto-detect language preference on first visit

---

## Phase 4: Home Page

- Hero section with traffic light illustration, headline "Learn Amategeko y'Umuhanda the Smart Way", and description
- Three prominent CTA cards: **Start Learning**, **Take a Quiz**, **Ask AI**
- Feature highlights section (structured lessons, smart quizzes, AI assistant)
- Desktop: split/grid layout; Mobile: vertically stacked
- Language selector prominent on first visit

---

## Phase 5: Learning Section (Structured Lessons)

### Chapter Organization
6 chapters with sample content:
1. Introduction to Road Law
2. Road Signs (Ibyapa)
3. Speed Regulations
4. Safety Rules
5. Alcohol & Drug Regulations
6. Fines & Penalties

### Lesson Page Features
- Chapter sidebar navigation (collapsible on mobile)
- Clear explanations with highlighted key rules and warnings
- Placeholder road sign images
- "Practice Quiz for this Topic" button at end of each lesson
- "Ask AI about this Lesson" button for contextual help
- Progress indicator showing completed lessons
- Content displayed in user's selected language

---

## Phase 6: Quiz System

### A) Topic-Based Quiz
- Topic selection screen (Road Signs, Speed Rules, Safety Rules, General Knowledge)
- 10-20 multiple choice questions per topic
- Instant feedback after each answer with explanation
- Score summary at end with review of incorrect answers

### B) Mock Driving Exam
- Simulates real exam format: 20 questions with countdown timer
- Pass mark clearly displayed
- Results page with score, incorrect answers, and AI explanations for wrong answers

### C) AI-Generated Quiz (Limited)
- User selects topic, difficulty (Easy/Medium/Hard), and number of questions (5-15)
- AI dynamically generates questions
- Usage indicator showing remaining AI quiz attempts

---

## Phase 7: AI Assistant (Chat)

- Clean, distraction-free chat interface with purple accent theme
- Users can ask about traffic rules, request explanations, examples, translations, and penalty info
- AI responds in the user's selected language
- Streaming responses for real-time feel
- Suggested starter questions for new users
- Context-aware: can reference specific lessons

---

## Phase 8: User Dashboard

- Overview stats: total quizzes taken, average score, lessons completed
- Progress indicator across all chapters
- Weak topics highlighted with suggested lessons
- Quiz history with scores and dates
- Quick action buttons: continue learning, retake weak quizzes

