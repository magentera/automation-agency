# Influencer Masterclass Hosting Platform - Directory Structure

This document outlines the proposed directory structure for implementing the Influencer Masterclass Hosting Platform based on the system architecture.

## Root Directory Structure

```
nexus-ai-automation/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   ├── (auth)/               # Authentication routes
│   ├── dashboard/            # Dashboard pages
│   ├── landing/              # Landing page
│   ├── masterclass/          # Masterclass streaming pages
│   ├── payment/              # Payment pages
│   ├── scheduling/           # Scheduling pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (redirects to landing)
│
├── components/               # Reusable UI components
│   ├── analytics/            # Analytics components
│   ├── auth/                 # Authentication components
│   ├── dashboard/            # Dashboard components
│   ├── landing/              # Landing page components
│   ├── layout/               # Layout components
│   ├── masterclass/          # Masterclass components
│   ├── payment/              # Payment components
│   ├── scheduling/           # Scheduling components
│   ├── sales/                # Sales components
│   └── ui/                   # UI components (buttons, forms, etc.)
│
├── lib/                      # Utility functions and shared code
│   ├── analytics/            # Analytics utilities
│   ├── api/                  # API utilities
│   ├── auth/                 # Authentication utilities
│   ├── db/                   # Database utilities
│   ├── payment/              # Payment utilities
│   ├── sales/                # Sales utilities
│   ├── streaming/            # Streaming utilities
│   └── utils/                # General utilities
│
├── public/                   # Static assets
│   ├── images/               # Images
│   ├── videos/               # Videos
│   └── fonts/                # Fonts
│
├── styles/                   # Global styles
│
├── types/                    # TypeScript type definitions
│
├── prisma/                   # Prisma ORM
│   └── schema.prisma         # Database schema
│
├── middleware.ts             # Next.js middleware
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
└── README.md                 # Project documentation
```

## Module-Specific Structures

### 1. Landing Page Module

```
app/landing/
├── page.tsx                  # Landing page
└── layout.tsx                # Landing page layout

components/landing/
├── Hero.tsx                  # Hero section
├── AboutHost.tsx             # About the host section
├── MasterclassDetails.tsx    # Masterclass details section
├── Testimonials.tsx          # Testimonials section
├── LeadCaptureForm.tsx       # Lead capture form
└── Footer.tsx                # Footer

lib/api/
└── lead-capture.ts           # API for lead capture
```

### 2. Streaming Module

```
app/masterclass/
├── page.tsx                  # Masterclass page
├── layout.tsx                # Masterclass layout
└── [id]/                     # Dynamic route for specific masterclass
    └── page.tsx              # Specific masterclass page

components/masterclass/
├── VideoPlayer.tsx           # Video player component
├── ChatInterface.tsx         # Chat interface
├── NotificationSystem.tsx    # On-screen notification system
├── TranscriptDisplay.tsx     # Real-time transcript display
└── EngagementMetrics.tsx     # Viewer engagement metrics

lib/streaming/
├── video-stream.ts           # Video streaming utilities
├── chat-service.ts           # Chat service utilities
├── notification-service.ts   # Notification service
└── analytics-capture.ts      # Analytics capture for streaming
```

### 3. Invoicing & Payment Module

```
app/payment/
├── page.tsx                  # Payment page
├── invoice/[id]/             # Invoice page
│   └── page.tsx              # Specific invoice page
└── confirmation/             # Payment confirmation
    └── page.tsx              # Confirmation page

components/payment/
├── InvoiceGenerator.tsx      # Invoice generator
├── PaymentForm.tsx           # Payment form
├── PaymentConfirmation.tsx   # Payment confirmation
└── InvoiceDisplay.tsx        # Invoice display

lib/payment/
├── stripe-service.ts         # Stripe integration
├── invoice-generator.ts      # Invoice generation logic
└── payment-processor.ts      # Payment processing logic
```

### 4. Sales Call Scheduling Module

```
app/scheduling/
├── page.tsx                  # Scheduling page
└── confirmation/             # Scheduling confirmation
    └── page.tsx              # Confirmation page

components/scheduling/
├── CalendarInterface.tsx     # Calendar interface
├── TimeSlotSelector.tsx      # Time slot selector
├── SalesRepSelector.tsx      # Sales rep selector
└── ConfirmationDisplay.tsx   # Confirmation display

lib/scheduling/
├── calendar-service.ts       # Calendar service integration
├── availability-checker.ts   # Availability checking logic
└── notification-service.ts   # Notification service for scheduling
```

### 5. Sales Pipeline Tracking Module

```
app/dashboard/sales/
├── page.tsx                  # Sales dashboard
├── leads/                    # Leads management
│   └── page.tsx              # Leads page
├── pipeline/                 # Pipeline visualization
│   └── page.tsx              # Pipeline page
└── reports/                  # Sales reports
    └── page.tsx              # Reports page

components/sales/
├── LeadTable.tsx             # Lead table
├── PipelineVisualizer.tsx    # Pipeline visualizer
├── SalesMetrics.tsx          # Sales metrics display
└── LeadDetails.tsx           # Lead details

lib/sales/
├── pipeline-service.ts       # Pipeline management logic
├── lead-tracker.ts           # Lead tracking logic
└── reporting-service.ts      # Reporting service
```

### 6. Conversation & Analytics Module

```
app/dashboard/analytics/
├── page.tsx                  # Analytics dashboard
├── conversations/            # Conversation analytics
│   └── page.tsx              # Conversations page
├── engagement/               # Engagement analytics
│   └── page.tsx              # Engagement page
└── insights/                 # Insights dashboard
    └── page.tsx              # Insights page

components/analytics/
├── TranscriptAnalyzer.tsx    # Transcript analyzer
├── ChatAnalytics.tsx         # Chat analytics
├── ViewerMetrics.tsx         # Viewer metrics
└── InsightGenerator.tsx      # Insight generator

lib/analytics/
├── transcript-processor.ts   # Transcript processing logic
├── chat-analyzer.ts          # Chat analysis logic
├── metrics-processor.ts      # Metrics processing
└── insight-generator.ts      # Insight generation logic
```

## Database Schema (Prisma)

```prisma
// prisma/schema.prisma

model User {
  id              String    @id @default(cuid())
  name            String
  email           String    @unique
  phone           String?
  company         String?
  role            UserRole  @default(ATTENDEE)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  leads           Lead[]
  payments        Payment[]
  appointments    Appointment[]
  attendances     Attendance[]
}

enum UserRole {
  ADMIN
  SALES_REP
  HOST
  ATTENDEE
}

model Masterclass {
  id              String    @id @default(cuid())
  title           String
  description     String
  hostId          String
  host            User      @relation(fields: [hostId], references: [id])
  startTime       DateTime
  endTime         DateTime
  price           Decimal
  maxAttendees    Int
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  attendances     Attendance[]
  notifications   Notification[]
}

model Lead {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  status          LeadStatus
  assignedToId    String?
  assignedTo      User?     @relation(fields: [assignedToId], references: [id])
  source          String
  notes           String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  payments        Payment[]
  appointments    Appointment[]
}

enum LeadStatus {
  NEW
  CONTACTED
  QUALIFIED
  PROPOSAL
  NEGOTIATION
  CLOSED_WON
  CLOSED_LOST
}

model Payment {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  leadId          String
  lead            Lead      @relation(fields: [leadId], references: [id])
  amount          Decimal
  status          PaymentStatus
  invoiceNumber   String    @unique
  invoiceUrl      String?
  receiptUrl      String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}

model Appointment {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  leadId          String
  lead            Lead      @relation(fields: [leadId], references: [id])
  salesRepId      String
  salesRep        User      @relation(fields: [salesRepId], references: [id])
  startTime       DateTime
  endTime         DateTime
  status          AppointmentStatus
  notes           String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

enum AppointmentStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
  NO_SHOW
}

model Attendance {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  masterclassId   String
  masterclass     Masterclass @relation(fields: [masterclassId], references: [id])
  joinTime        DateTime
  leaveTime       DateTime?
  chatMessages    ChatMessage[]
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model ChatMessage {
  id              String    @id @default(cuid())
  attendanceId    String
  attendance      Attendance @relation(fields: [attendanceId], references: [id])
  message         String
  timestamp       DateTime  @default(now())
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Notification {
  id              String    @id @default(cuid())
  masterclassId   String
  masterclass     Masterclass @relation(fields: [masterclassId], references: [id])
  message         String
  triggerTime     DateTime
  displayed       Boolean   @default(false)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model Transcript {
  id              String    @id @default(cuid())
  masterclassId   String
  masterclass     Masterclass @relation(fields: [masterclassId], references: [id])
  content         String
  startTime       DateTime
  endTime         DateTime
  speakerId       String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

model AnalyticsInsight {
  id              String    @id @default(cuid())
  masterclassId   String
  masterclass     Masterclass @relation(fields: [masterclassId], references: [id])
  insightType     InsightType
  content         String
  priority        Int
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

enum InsightType {
  CONTENT_OPTIMIZATION
  SALES_STRATEGY
  ENGAGEMENT
  CONVERSION
}
```

## API Routes Structure

```
app/api/
├── auth/                     # Authentication endpoints
│   ├── [...nextauth]/        # NextAuth.js routes
│   └── route.ts              # Custom auth routes
│
├── leads/                    # Lead management endpoints
│   ├── route.ts              # Lead CRUD operations
│   └── [id]/                 # Specific lead operations
│       └── route.ts          # Lead by ID
│
├── masterclass/              # Masterclass endpoints
│   ├── route.ts              # Masterclass CRUD operations
│   └── [id]/                 # Specific masterclass operations
│       ├── route.ts          # Masterclass by ID
│       ├── chat/             # Chat endpoints
│       │   └── route.ts      # Chat operations
│       ├── notifications/    # Notification endpoints
│       │   └── route.ts      # Notification operations
│       └── transcript/       # Transcript endpoints
│           └── route.ts      # Transcript operations
│
├── payment/                  # Payment endpoints
│   ├── route.ts              # Payment operations
│   ├── invoice/              # Invoice endpoints
│   │   └── route.ts          # Invoice operations
│   └── webhook/              # Payment webhooks
│       └── route.ts          # Webhook handler
│
├── scheduling/               # Scheduling endpoints
│   ├── route.ts              # Scheduling operations
│   └── availability/         # Availability endpoints
│       └── route.ts          # Availability operations
│
├── sales/                    # Sales endpoints
│   ├── pipeline/             # Pipeline endpoints
│   │   └── route.ts          # Pipeline operations
│   └── reports/              # Reports endpoints
│       └── route.ts          # Reports operations
│
└── analytics/                # Analytics endpoints
    ├── route.ts              # Analytics operations
    ├── insights/             # Insights endpoints
    │   └── route.ts          # Insights operations
    └── metrics/              # Metrics endpoints
        └── route.ts          # Metrics operations
```

This directory structure provides a comprehensive framework for implementing the Influencer Masterclass Hosting Platform according to the system architecture. It follows Next.js best practices and organizes code by feature modules for better maintainability and scalability. 