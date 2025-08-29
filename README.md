## Architectural Overview

### 1. Overview

AspireHire.com is designed as a **cloud-native, Azure-first platform** built with **ASP.NET Core 9** and orchestrated using **.NET Aspire**. The system leverages **microservices decomposition**, **Cosmos DB for scalability**, and **Azure Kubernetes Service (AKS)** for resilient deployments. The architecture emphasizes modularity, observability, and developer-focused extensibility—enabling rapid feature delivery and reliable operations.

---

### 2. Core Technology Stack

* **ASP.NET Core 9**

  * Used for building all microservices and APIs.
  * Provides modern, high-performance web frameworks for user onboarding, recruiter workflows, and job board interactions.
  * Implements Clean Architecture principles for maintainable domain-driven services.

* **.NET Aspire**

  * Acts as the application orchestrator, handling service discovery, telemetry, and resilience across all microservices.
  * Provides built-in monitoring/logging, tracing, and configuration standardization across the system.
  * Ensures consistent integration with Azure services, reducing infrastructure drift.

* **Azure Cloud Services**

  * **Azure Kubernetes Service (AKS):** Runs all microservices with auto-scaling, managed upgrades, and rolling deployments.
  * **Azure Service Bus:** Provides reliable messaging between services (e.g., job postings, notifications, transactions).
  * **Azure API Management:** Central gateway for secure, rate-limited API exposure to clients and third-party integrations.
  * **Azure Monitor & Application Insights:** Unified monitoring and observability powered by .NET Aspire defaults.

* **Cosmos DB**

  * Serves as the primary database for user profiles, recruiter data, contracts, and job postings.
  * Offers global distribution, elastic scalability, and low-latency queries.
  * Used alongside **Azure SQL Database** for structured transactional workloads (e.g., payments, contracts).

---

### 3. Microservices Decomposition

The system is broken down into independent, domain-aligned services:

* **UserService**: Handles authentication, identity, and onboarding.
* **ProfileService**: Manages rich persona-based profiles for developers and recruiters.
* **JobService**: Manages job postings, proposals, and application workflows.
* **MatchingService**: Intelligent matching engine for connecting talent with recruiters.
* **PaymentService**: Processes contracts, escrow, and payouts (backed by Azure SQL DB for strong consistency).
* **NotificationService**: Sends real-time updates via SignalR and integrates with Azure Communication Services.
* **AdminService**: Provides moderation, reporting, and compliance dashboards.

Each microservice communicates via **Azure Service Bus topics/queues** and exposes REST APIs via **ASP.NET Core APIs**, secured with JWT.

---

### 4. Data Strategy

* **Cosmos DB (Core)**: Scalable document store for user profiles, job posts, and activity feeds.
* **Azure SQL Database (Transactional)**: Relational data for contracts, payments, and reporting.
* **Blob Storage**: File storage for resumes, portfolios, and supporting documents.
* **Outbox Pattern**: Implemented with EF Core and Aspire to guarantee reliable event publishing and avoid dual-write inconsistencies.

---

### 5. CI/CD and Deployment

* **Azure DevOps Pipelines**

  * YAML-based CI/CD pipelines build, test, and containerize each microservice.
  * Automatic deployment into AKS with Helm or Bicep templates.
  * Canary and blue-green strategies supported.
* **Infrastructure-as-Code**

  * Terraform manages AKS clusters, Service Bus, Cosmos DB, and SQL DB provisioning.
* **Observability**

  * .NET Aspire + Application Insights provide distributed tracing, metrics, and logs across services.
  * OpenTelemetry pipelines ensure full system observability.

---
