
  # TASL Canteen App

  This is a code bundle for User Registration and Location Sharing. taslcanteenapp.vercel.app

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

 # A Vibe-Coded project by a MechE grad with 2+ years of core experience in the defense industry, on GPT-3 era models across 11 conversations spanning ~1.1B tokens:

 ## Frontend Journey

 ### The Journey: Design → Generate → Debug → Deploy


1. Design first, using no-code tools: 
    § Started the frontend by designing screens and UI on Figma, used no-code tools (Thunkable, Bravo Studio, Adalo) to create those screens before touching code. 
    § Also exported the Figma designs to Bravo Vision to inspect the app state and user flow before committing to implementation.

2. Figma-to-code pipeline: 
    § Using a GitHub repo with Figma plugins to fetch design data as JSON, then AI-generated code produced JSON/JSX, parsed and cleaned into actual JSX screens, eventually assembling the final app state as app.tsx with navigation logic. 
    § Dumped the Figma frontend design into JSON files → JSX screens → app.tsx. 
    § Tested that generated code on CodeSandbox to confirm it would generate the UI, render components, and handle icons correctly before going local.

3. Debugging through iteration.
    § Fixated on the approach of designing on Figma and using plugins to fetch code in JSON, then rendering it. 
    § Made a critical mistake: I designed one entire codebase containing all screens and rendered them together. 
    § Debugging all of them together made it impossible. 
    § Realized isolating each screen was the way to go — separate JSON files per screen, render and test each one in isolation, then integrate.
    § Faced package install issues causing some UI screens not to render, requiring environment/package troubleshooting.

4. Pivot from native mobile to PWA.
    § Realized building a frontend Android app via Flutter/FlutterFlow/Kotlin was impractical, paywalled, and complex. 
    § So decided on a Vite + React + Tailwind CSS PWA approach, with provisions for manifest.json and service-worker files for Android PWA support later.

5. Final build and deploy.
    § Built the four-screen prototype (register → login → dashboard → create-bill), implemented cart state management, bill creation callback, drawer navigation (Radix UI Sheet), localStorage auth prototype, and mobile-first responsive design (9:16 phone aspect ratio). 
    § Used Vite dev server + Chrome device toolbar for mobile preview, vite-plugin-pwa for installability, deployed on Vercel, tested publicly via Cloudflare Tunnel.


 ### Key Decisions, Approaches, Reasons & Product Thinking
 
 This is the "why" behind the choices — the judgment layer.

    1. Why no-code first: Fast exploration of screens and design validation at low cost, before investing engineering effort.
    2. Why Figma-first before coding: Design fidelity and user flow validation before writing code — product risk reduction.
    3. Why Bravo Vision: To see actual app state and user flow from Figma exports before building, catching flow issues early.
    4. Why GitHub repo + AI codegen: To translate design JSON into JSX quickly while keeping human oversight of the architecture.
    5. Why screen isolation: Debugging all screens together was impossible; isolating screens was a deliberate engineering decision to make the system debuggable and testable.
    6. Why PWA over Flutter/native: Impractical, paywalled, and complex for a solo builder; Vite+React+PWA gave cross-platform reach with free-tier viability and later Android installability via manifest/service worker.
    7. Why Radix UI Sheet: Accessible drawer navigation for staff usage.
    8. Why localStorage auth prototype: Frontend-only prototype scope; real auth was handled at the backend level via Supabase JWT, so the prototype didn't duplicate it.
    9. Why CodeSandbox testing: Fast feedback loop before local environment friction
    10. Why Cloudflare Tunnel/ngrok/equivalent dynamic tunneling: For public HTTPS testing of the Vite dev server, allowing real-time debugging and feedback on actual mobile viewing conditions (without relying solely on local network configurations). To quickly expose a local React/Vite app to Android devices for testing actual mobile UI, transitions, animations, and user flow states without complex VPN or network setup — crucial for debugging realistic user experience across devices.
    11. Why mobile-first responsive design: Key decision to optimize for 9:16 phone aspect ratio since canteen staff use the app on mobile devices during their workflow.
    12. Why transitions and animations: Added subtle UI transitions and animation states to smooth the user experience between screens (register→login→dashboard→create-bill) and provide visual feedback during state changes.
    13. Why navigation state management: Used React state management to maintain app navigation logic, screen transition flows, and user session states (localStorage) for prototype reliability.
    14. Why Chrome device toolbar + local preview: For quick mobile preview testing without needing external tools, but recognized it couldn't replace real-device testing for Android experience.
    15. Why PWA features (manifest.json, service-worker): To enable Android installability and offline capabilities, enabling staff to save the app to their home screen and work in various network conditions.
    16. Why Vercel deployment + Cloudflare Tunnel: Vercel for reliable production hosting, Cloudflare Tunnel for temporary public testing while maintaining development environment security.



 ## Backend Journey

 ### Journey, Debugging, Iterative Building

    1. Initial stack decision: Started by evaluating custom code (Flask/SQLAlchemy) vs adopting a no-code platform — weighed speed of prototyping against need for transactional integrity and data control
    2. MySQL/phpMyAdmin attempt: Set up offline MySQL database with phpMyAdmin interface, but ditched it due to migration pain points, limited relational features, and poor developer ergonomics for a solo builder
    3. Airtable API deep-dive: Spent considerable time figuring out Airtable API workings and its purpose; had to learn that API keys were deprecated → switched to Personal Access Tokens (PAT) for authentication
    4. Relational data modeling dilemma: Spent significant effort deciding how to model relational data (users → orders → payments → outstanding balances) — compared Airtable's linked records approach vs. hosted SQL with proper foreign keys
    5. Supabase realization: Realized to host it on an online database using Supabase; key pivot moment where PostgreSQL via Supabase solved the relational modeling problem with familiar SQL
    6. Supabase learning curve: Had to self-teach PostgreSQL schema design, RLS (row-level security), and the Supabase client library from scratch — no prior SQL/ORM experience
    7. Authentication chain debugging: Figured out Supabase Auth flow: sign-up → email confirmation → JWT generation → route protection → least-privilege scope attachment
    8. Transactional order creation: Learned to implement atomic order creation with BEGIN/COMMIT/ROLLBACK — initially got partial states (order created but no order_items) and had to debug the commit scope
    9. Materialized view design: Designed user_balances materialized view to compute outstanding amounts automatically — had to debug rollup accumulation and stale-view refresh timing
    10. CORS & API contract: Spent time configuring Supabase CORS origins, adding proper JSON middleware, and designing an API contract stable enough for future MERN migration without breaking frontend change
    11. Integer-cents precision: Had to consciously decide to store monetary values as integer cents rather than floats — after encountering floating-point precision edge cases in balance calculations

 ### Key Decisions, Approaches, Reasons & Product Thinking

    1. Supabase over custom MERN/Flask-SQLAlchemy: Chose Supabase (PostgreSQL) for ACID guarantees on transactional order data, built-in auth with JWT, auto-generated REST API eliminating ORM boilerplate, and lower operational overhead vs maintaining a custom MERN stack alone
    2. Integer-cents monetary storage: Explicitly chose integer-cents to prevent floating-point precision errors — product decision to avoid "₹1.00 showing as ₹0.999999" bugs in outstanding balance displays
    3. PostgreSQL relational model: Chose PostgreSQL (via Supabase) because the relational model fits the transactional domain naturally — users, menu_items, orders, order_items, payments with proper foreign keys, rather than Airtable's limit-based linked records
    4. Supabase Auth + JWT: Selected Supabase Auth + JWT for route protection and least-privilege scopes — product decision to minimize auth surface area while supporting both employee and staff role differentiation
    5. Materialized view for balances: Decoded to use a materialized view (user_balances) rather than computed-on-read — trade-off: slight staleness vs. constant recalculation cost; product choice for real-ish balance display in dashboard
    6. Transactional order creation (BEGIN/COMMIT/ROLLBACK): Designed atomic order + order_items insertion as a product requirement — "order should never exist without its items" is a business rule, not just a technical one
    7. API contract stability for MERN migration: Designed the Supabase REST API endpoints and data models with future MERN migration in mind — product thinking: the next PM should be able to swap the backend without rewriting the React frontend
    8. Rejection of no-code for core backend: After evaluating 8+ platforms (Airtable, Thunkable, Glide, Retool, Bravo Studio, FlutterFlow, AppGyver), decided that while no-code is great for prototyping, the transactional, monetary, and relational requirements of a canteen order system required proper code-level control
    9. PAT over API keys: Switched from deprecated API keys to Personal Access Tokens for Airtable/Supabase auth — both a technical necessity (key rotation) and product decision for cleaner developer onboarding
