# Influencer Masterclass Hosting Platform - Data Flow Diagrams

This document provides detailed data flow diagrams for the Influencer Masterclass Hosting Platform, illustrating how information moves between different modules of the system.

## System Overview Data Flow

```mermaid
flowchart TD
    User([User])
    
    subgraph LandingPageModule[Landing Page Module]
        LP[Landing Page]
        RF[Registration Form]
    end
    
    subgraph StreamingModule[Streaming Module]
        VS[Video Stream]
        CH[Chat]
        NT[Notifications]
        TR[Transcript]
    end
    
    subgraph PaymentModule[Invoicing & Payment Module]
        IG[Invoice Generator]
        PP[Payment Processor]
        PC[Payment Confirmation]
    end
    
    subgraph SchedulingModule[Sales Call Scheduling Module]
        CA[Calendar]
        TS[Time Slots]
        SR[Sales Rep Assignment]
    end
    
    subgraph SalesModule[Sales Pipeline Tracking Module]
        LT[Lead Tracker]
        PV[Pipeline Visualizer]
        SM[Sales Metrics]
    end
    
    subgraph AnalyticsModule[Conversation & Analytics Module]
        TA[Transcript Analysis]
        CA[Chat Analysis]
        VM[Viewer Metrics]
        IG[Insight Generator]
    end
    
    %% User interactions
    User -->|Visits| LP
    User -->|Registers| RF
    User -->|Watches| VS
    User -->|Participates| CH
    User -->|Pays Invoice| PP
    User -->|Books Call| CA
    
    %% Landing Page Module flows
    RF -->|Lead Data| LT
    
    %% Payment Module flows
    LT -->|Lead Info| IG
    IG -->|Invoice| User
    PP -->|Payment Status| LT
    PP -->|Confirmation| PC
    PC -->|Receipt| User
    
    %% Streaming Module flows
    VS -->|Stream Data| TA
    VS -->|Viewer Count| VM
    CH -->|Chat Data| CA
    NT -->|Notification Triggers| VS
    VS -->|Audio| TR
    
    %% Scheduling Module flows
    LT -->|Lead Info| SR
    SR -->|Available Reps| TS
    TS -->|Available Slots| CA
    CA -->|Booking Confirmation| User
    CA -->|Appointment| LT
    
    %% Analytics Module flows
    TA -->|Transcript Insights| IG
    CA -->|Chat Insights| IG
    VM -->|Engagement Insights| IG
    IG -->|Content Optimization| VS
    IG -->|Sales Strategy| LT
    
    %% Sales Module flows
    LT -->|Lead Status| PV
    PV -->|Pipeline Visualization| SM
    SM -->|Performance Metrics| IG
```

## Detailed Module-Specific Data Flows

### 1. Landing Page to Sales Pipeline Flow

```mermaid
sequenceDiagram
    actor User
    participant LP as Landing Page
    participant RF as Registration Form
    participant LT as Lead Tracker
    participant IG as Invoice Generator
    
    User->>LP: Visits landing page
    LP->>User: Displays value proposition
    User->>RF: Submits registration form
    RF->>LT: Creates new lead
    LT->>IG: Triggers invoice generation
    IG->>User: Sends invoice email
    Note over User,IG: Lead capture complete
```

### 2. Payment Processing Flow

```mermaid
sequenceDiagram
    actor User
    participant IG as Invoice Generator
    participant PP as Payment Processor
    participant PC as Payment Confirmation
    participant LT as Lead Tracker
    
    IG->>User: Sends invoice
    User->>PP: Submits payment
    PP->>PC: Processes payment
    PP->>LT: Updates lead status
    PC->>User: Sends receipt
    Note over User,LT: Payment complete
```

### 3. Masterclass Streaming Flow

```mermaid
sequenceDiagram
    actor User
    participant VS as Video Stream
    participant CH as Chat
    participant NT as Notifications
    participant TR as Transcript
    participant VM as Viewer Metrics
    participant CA as Chat Analysis
    participant TA as Transcript Analysis
    
    User->>VS: Joins masterclass
    VS->>VM: Records viewer join
    VS->>TR: Generates transcript
    User->>CH: Sends chat message
    CH->>CA: Records message
    NT->>VS: Triggers notification
    VS->>User: Displays notification
    TR->>TA: Processes transcript
    Note over User,TA: Streaming session data captured
```

### 4. Sales Call Scheduling Flow

```mermaid
sequenceDiagram
    actor User
    participant LT as Lead Tracker
    participant SR as Sales Rep Assignment
    participant TS as Time Slots
    participant CA as Calendar
    
    User->>CA: Requests to book call
    CA->>LT: Retrieves lead info
    LT->>SR: Determines appropriate sales rep
    SR->>TS: Gets available time slots
    TS->>CA: Displays available slots
    User->>CA: Selects time slot
    CA->>User: Confirms booking
    CA->>LT: Updates lead status
    Note over User,LT: Call scheduled
```

### 5. Analytics and Feedback Loop Flow

```mermaid
sequenceDiagram
    participant VS as Video Stream
    participant CH as Chat
    participant VM as Viewer Metrics
    participant TA as Transcript Analysis
    participant CA as Chat Analysis
    participant IG as Insight Generator
    participant LT as Lead Tracker
    
    VS->>TA: Sends transcript data
    CH->>CA: Sends chat data
    VS->>VM: Sends viewer count
    TA->>IG: Provides transcript insights
    CA->>IG: Provides engagement insights
    VM->>IG: Provides viewership insights
    IG->>VS: Sends content optimization
    IG->>LT: Sends sales strategy insights
    Note over VS,LT: Feedback loop complete
```

### 6. Complete User Journey Flow

```mermaid
sequenceDiagram
    actor User
    participant LP as Landing Page
    participant LT as Lead Tracker
    participant IG as Invoice Generator
    participant PP as Payment Processor
    participant VS as Video Stream
    participant CA as Calendar
    participant SM as Sales Metrics
    
    User->>LP: Visits landing page
    LP->>User: Displays value proposition
    User->>LP: Submits registration
    LP->>LT: Creates new lead
    LT->>IG: Triggers invoice
    IG->>User: Sends invoice
    User->>PP: Makes payment
    PP->>LT: Updates lead status (PAID)
    User->>VS: Attends masterclass
    VS->>User: Delivers content
    User->>CA: Books sales call
    CA->>LT: Updates lead status (SCHEDULED)
    LT->>SM: Updates sales pipeline
    SM->>LT: Provides conversion insights
    Note over User,SM: Complete user journey
```

## Data Entity Relationships

```mermaid
erDiagram
    USER {
        string id PK
        string name
        string email
        string phone
        string company
        enum role
        datetime createdAt
        datetime updatedAt
    }
    
    MASTERCLASS {
        string id PK
        string title
        string description
        string hostId FK
        datetime startTime
        datetime endTime
        decimal price
        int maxAttendees
        datetime createdAt
        datetime updatedAt
    }
    
    LEAD {
        string id PK
        string userId FK
        enum status
        string assignedToId FK
        string source
        string notes
        datetime createdAt
        datetime updatedAt
    }
    
    PAYMENT {
        string id PK
        string userId FK
        string leadId FK
        decimal amount
        enum status
        string invoiceNumber
        string invoiceUrl
        string receiptUrl
        datetime createdAt
        datetime updatedAt
    }
    
    APPOINTMENT {
        string id PK
        string userId FK
        string leadId FK
        string salesRepId FK
        datetime startTime
        datetime endTime
        enum status
        string notes
        datetime createdAt
        datetime updatedAt
    }
    
    ATTENDANCE {
        string id PK
        string userId FK
        string masterclassId FK
        datetime joinTime
        datetime leaveTime
        datetime createdAt
        datetime updatedAt
    }
    
    CHAT_MESSAGE {
        string id PK
        string attendanceId FK
        string message
        datetime timestamp
        datetime createdAt
        datetime updatedAt
    }
    
    NOTIFICATION {
        string id PK
        string masterclassId FK
        string message
        datetime triggerTime
        boolean displayed
        datetime createdAt
        datetime updatedAt
    }
    
    TRANSCRIPT {
        string id PK
        string masterclassId FK
        string content
        datetime startTime
        datetime endTime
        string speakerId
        datetime createdAt
        datetime updatedAt
    }
    
    ANALYTICS_INSIGHT {
        string id PK
        string masterclassId FK
        enum insightType
        string content
        int priority
        datetime createdAt
        datetime updatedAt
    }
    
    USER ||--o{ LEAD : "has"
    USER ||--o{ PAYMENT : "makes"
    USER ||--o{ APPOINTMENT : "books"
    USER ||--o{ ATTENDANCE : "attends"
    MASTERCLASS ||--o{ ATTENDANCE : "has"
    MASTERCLASS ||--o{ NOTIFICATION : "triggers"
    MASTERCLASS ||--o{ TRANSCRIPT : "generates"
    MASTERCLASS ||--o{ ANALYTICS_INSIGHT : "produces"
    LEAD ||--o{ PAYMENT : "generates"
    LEAD ||--o{ APPOINTMENT : "schedules"
    ATTENDANCE ||--o{ CHAT_MESSAGE : "sends"
```

These diagrams illustrate the comprehensive data flow within the Influencer Masterclass Hosting Platform, showing how information moves between different modules and how users interact with the system throughout their journey. 