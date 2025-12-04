import React from "react";
import { CheckCircle, Video, Calendar } from "lucide-react";

// --- Type Definition ---
export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  priceDisplay: string;
  rating: number;
  ratingCount: number;
  description: string;
  details?: React.ReactNode;
  features: string[];
  fileSize: string;
  author: string;
};


export const PRODUCTS: Product[] = [

  {

    id: 1,

    title: "Small AI - AI Travel Agent Automation",

    image: "/travel agent thumb.png",

    price: 0,

    priceDisplay: "$10+",

    rating: 5.0,

    ratingCount: 15,

    fileSize: "13.5 KB",

    author: "Prakarsh Gupta",

    description: "Automate custom travel itinerary generation and email delivery using AI. From a simple webhook trigger to a personalized plan.",

    features: ["Webhook Trigger", "OpenAI Itinerary", "Gmail Delivery", "SERP API Live Search"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>✈️ Automate custom travel itinerary generation and email delivery using AI.</h5>

          <p className="text-lg leading-relaxed">

            From a simple webhook trigger, this workflow searches flights & resorts, creates a personalized plan with OpenAI, and emails it directly to the user — all on autopilot.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">





            <a href="https://youtu.be/zeh7cXpzJ4Y" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>





            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>



          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <ul className="space-y-3">

            {[

              "Accepts travel request data via webhook",

              "Extracts and verifies dates, locations, and airport codes",

              "Searches live data for resorts and flights using SERP API",

              "Uses LLM (GPT-4) to generate an email-friendly itinerary",

              "Sends the travel plan to the user's inbox",

              "Logs lead data into Google Sheets"

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> – Visual automation</li>

                <li><span className="font-semibold text-gray-900">OpenAI</span> – LLM logic</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Voice generation (Optional)</li>

                <li><span className="font-semibold text-gray-900">SERP API</span> – Live flight search</li>

                <li><span className="font-semibold text-gray-900">Google Sheets</span> – Database</li>

                <li><span className="font-semibold text-gray-900">Gmail</span> – Dispatch</li>

              </ul>

            </div>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-6">📊 Workflow Overview</h3>

          <p className="text-gray-600 mb-3">Here’s what the automation looks like inside n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="ai travel.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        {/* Section: Step-by-Step Logic */}

        <div>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🔄 Step-by-Step Logic</h3>

          <ol className="list-decimal pl-5 space-y-3 text-gray-700">

            <li>

              <span className="font-bold text-gray-900">Webhook Trigger</span> – Starts when a user submits a travel request

            </li>

            <li>

              <span className="font-bold text-gray-900">Location + Date Processing</span> – Extracts usable data from raw inputs

            </li>

            <li>

              <span className="font-bold text-gray-900">Live Search</span> – SERP API queries for flights and resorts

            </li>

            <li>

              <span className="font-bold text-gray-900">Plan Generation</span> – OpenAI LLM writes a trip summary

            </li>

            <li>

              <span className="font-bold text-gray-900">Delivery</span> – Gmail sends the final plan

            </li>

            <li>

              <span className="font-bold text-gray-900">Storage</span> – Google Sheets logs the user lead

            </li>

            <li>

              <span className="font-bold text-gray-900">Webhook Response</span> – Final confirmation response sent

            </li>

          </ol>

        </div>



        {/* Section: Ideal For */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">👥 Ideal For</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Travel agencies scaling itinerary delivery</li>

              <li>Solo entrepreneurs selling AI travel planners</li>

              <li>Developers building AI assistants</li>

              <li>Agencies productizing automation</li>

            </ul>

          </div>

        </div>



        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 2,

    title: "Small AI - HR Agent – Automate Hiring with AI + LinkedIn + n8n",

    image: "hr agent thumb.png",

    price: 10,

    priceDisplay: "$10+",

    rating: 5.0,

    ratingCount: 1,

    fileSize: "10.2 KB",

    author: "Prakarsh Gupta",

    description: "A complete AI Travel agent workflow that helps plan trips, book flights, and manage itineraries automatically.",

    features: ["Flight search", "Itinerary generation", "Email automation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>Automate resume parsing, job posting, and candidate extraction directly from Gmail attachments and chat commands.</h5>

          <p className="text-lg leading-relaxed">

            This powerful n8n workflow acts as your AI-powered HR assistant — parsing resumes, extracting key info, and posting jobs on LinkedIn with minimal input.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/sYEy6Hgg1Kw" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <ul className="space-y-3">

            {[

              "Automatically detects new resumes from Gmail",

              "Extracts structured candidate data from PDFs",

              "Uses OpenAI to generate human-level job descriptions",

              "Saves candidate profiles in Google Sheets",

              "Posts jobs directly to LinkedIn via API — all from a single chat command",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  No-code workflow builder: <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI</span> – Contextual parsing + job description generation</li>

                <li><span className="font-semibold text-gray-900">Gmail</span> – Resume intake</li>

                <li><span className="font-semibold text-gray-900">Google Drive</span> – Document staging</li>

                <li><span className="font-semibold text-gray-900">Google Sheets</span> – Candidate database</li>

                <li><span className="font-semibold text-gray-900">LinkedIn API</span> – Job posting</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Voice generation (Optional): <b><a href="n8n"><u>https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>

                <li><span className="font-semibold text-gray-900">Structured Output Parser</span> – Ensures reliable formatting of AI-generated data</li>

              </ul>

            </div>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-6">🧠 Workflow Structure</h3>

          <h4 className=" mb-2 mt-5">Part 1: Resume Intake & Candidate Parsing</h4>

          <div>

            <ol className="list-decimal pl-5 space-y-3 text-gray-700">

              <li>Gmail trigger fetches incoming resumes</li>

              <li>PDF resumes are uploaded to Google Drive</li>

              <li>OpenAI parses resumes and extracts key information</li>

              <li>Candidate data is saved in Google Sheets</li>

              <li>Files are deleted from Drive to avoid clutter</li>

            </ol>

          </div>

          <h4 className=" mb-2 mt-5">Part 2: Job Posting via Chat Command</h4>

          <div>

            <ol className="list-decimal pl-5 space-y-3 text-gray-700">

              <li>A chat message triggers the LinkedIn job posting flow</li>

              <li>LinkedIn HR ID is fetched</li>

              <li>Job data is added using AI and structured fields</li>

              <li>Job is posted via LinkedIn API</li>

            </ol>

          </div>

          <h4 className="text-xl font-bold mb-5 mt-6">🖼 Visual Overview</h4>

          <h5 className=" mb-3 mt-5">1. LinkedIn Job Posting via Chat Command:</h5>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="hr agent linkedin.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h5 className=" mb-3 mt-5">2. Resume Intake & Candidate Extraction:</h5>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="hr agent resume.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        {/* Section: Who Its For */}

        <div>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">👤 Who It’s For</h3>

          <ul className="list-decimal pl-5 space-y-3 text-gray-700">

            <li>HR managers automating screening and posting</li>

            <li>SaaS builders integrating hiring into internal tools</li>

            <li>AI agencies productizing recruiting workflows</li>

            <li>Startups managing lean hiring teams</li>

          </ul>

        </div>



        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Community & More</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 3,

    title: "Small AI - RAG AI Agent",

    image: "rag.webp",

    price: 10,

    priceDisplay: "$0+",

    rating: 5.0,

    ratingCount: 2,

    fileSize: "15 KB",

    author: "Prakarsh Gupta",

    description: "Automate your hiring pipeline with this HR Agent. It scans LinkedIn profiles and scores resumes.",

    features: ["LinkedIn scraping", "Resume scoring", "Auto-email drafting"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>🤖 Build a fully automated RAG (Retrieval-Augmented Generation) AI Agent to chat over your documents in real time.</h5>

          <p className="text-lg leading-relaxed">

            From Google Drive upload to vector embedding and contextual replies — this workflow makes it seamless.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/Vdwnm_2NOtQ" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a custom setup or help?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <ul className="space-y-3">

            {[

              "Monitors Google Drive for file uploads or updates",

              "Extracts and splits document text intelligently",

              "Embeds the content using OpenAI",

              "Stores vector data into Supabase",

              "Enables contextual Q&A using OpenAI Chat Model with memory + retrieval",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> – Visual automation:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI</span> –  Embedding + GPT-based conversational model</li>

                <li><span className="font-semibold text-gray-900">Supabase</span> – Vector store + PostgreSQL memory</li>

                <li><span className="font-semibold text-gray-900">Google Drive</span> –  Live document syncing</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Text-to-speech for voice output: <b><a href="n8n"><u> https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>

              </ul>

            </div>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Here’s what the full workflow looks like in n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="rag ai agent.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        {/* Section: Tools Used */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🚀 Ideal Use Cases</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Travel agents responding to user questions with up-to-date documents</li>

              <li>Customer support bots trained on internal policies</li>

              <li>Knowledge assistants trained on product manuals</li>

              <li>AI agents personalized for any domain with dynamic docs</li>

            </ul>

          </div>

        </div>



        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 4,

    title: "Small AI - SEO Blog Writer",

    image: "/maxresdefault.jpg",

    price: 0,

    priceDisplay: "$0+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>📈 Automate long-form SEO blog creation using AI, real-time research, and human-like flow.</h5>

          <p className="text-lg leading-relaxed">

            This n8n workflow writes entire blogs from scratch — researched, filtered, and styled — directly into Google Sheets. No fluff. Fully automated.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/7qYgrKoRhJg" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <ul className="space-y-3">

            {[

              "Accepts blog topics via form submission",

              "Searches & filters real articles for context",

              "Uses OpenAI to generate briefs, structure, and draft",

              "Humanizes tone for SEO-friendly, natural flow",

              "Saves final blog in a Google Sheet",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> – No-code automation:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI</span> –  Content creation + cleanup</li>

                <li><span className="font-semibold text-gray-900">Apify</span> – Real-time article scraping for relevance</li>

                <li><span className="font-semibold text-gray-900">Google Sheets</span> –  Store final blog posts</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Text-to-speech for voice output: <b><a href="n8n"><u> https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>

              </ul>

            </div>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Here’s what the full workflow looks like in n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="seo blog.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        {/* Section: Ideal For */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🚀 Ideal For</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Marketing teams scaling SEO content</li>

              <li>AI freelancers or automation developers</li>

              <li>Agencies automating client content production</li>

              <li>Niche blog creators & solopreneurs</li>

            </ul>

          </div>

        </div>



        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 5,

    title: "Small AI - Voice + RAG Agent for Restaurant using RetellAI",

    image: "/thumb voice ai agent.png",

    price: 0,

    priceDisplay: "$0+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>⚡ Turn your restaurant's phone calls into intelligent conversations with AI.</h5>

          <p className="text-lg leading-relaxed">

            This workflow combines a voice AI agent with real-time document-based chat using RAG (Retrieval-Augmented Generation). Built fully in n8n using RetellAI, OpenAI, Supabase, and Google Drive.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href=" https://youtu.be/5XsaOIkwjBU" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <ul className="space-y-3">

            {[

              "Voice Calls: Handle inbound customer calls with a Retell AI voice agent.",

              "Dynamic Responses: Power the conversation with RAG-based context from your documents.",

              "Live Document Sync: Upload menus, policies, or FAQs to Google Drive — your AI agent learns them instantly.",

              "Fully Automated: No manual intervention once set up. Just upload and go.",



            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> – No-code automation:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI</span> –  Embedding & Chat Completion</li>

                <li><span className="font-semibold text-gray-900">Supabase </span> – Vector Store + PostgreSQL</li>

                <li><span className="font-semibold text-gray-900">Google Drive</span> –  Dynamic File Uploads</li>

                <li><span className="font-semibold text-gray-900">RetellAI</span> – Voice AI Agent:<b><a href="n8n"><u> https://dashboard.retellai.com/agents</u></a></b></li>

              </ul>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">📈 Who This Is For</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li>Restaurant owners who want to automate FAQs and reservations via voice</li>

                <li>AI developers building agentic workflows</li>

                <li>Agencies delivering AI automation to hospitality clients</li>

              </ul>

            </div>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Here’s what the full workflow looks like in n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="rag agent.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        {/* Section: What You Get */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🧩 what You Get</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Complete n8n workflow JSON</li>

              <li>Setup instructions (RetellAI, Supabase, OpenAI)</li>

              <li>Support via our Discord community</li>

              <li>Developer-ready, modular design</li>

            </ul>

          </div>

        </div>



        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 6,

    title: "Small AI - Social Media Automation",

    image: "social mediathumb.png",

    price: 0,

    priceDisplay: "$10+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <p className="text-lg leading-relaxed">

            Use AI to auto-generate content for LinkedIn, Twitter, and Instagram — including summarization, ranking, and direct posting. Ideal for content teams, solopreneurs, and growth marketers.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href=" https://youtu.be/4E542HDDqbo" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>





          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <p>This AI-powered automation system allows you to go from search keyword ➝ social post across platforms in minutes.</p>



          <h4>✨ Features</h4>

          <ul className="space-y-3">

            {[

              "Finds top-performing articles based on your target domain",

              "Extracts key insights and ranks them using AI",

              "Summarizes and turns insights into platform-ready social posts",

              "Publishes or sends for approval (optional)",

              "Unified flow across LinkedIn, Twitter, and Instagram",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> – No-code automation:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI GPT-4</span> –  Summarization, article insights, content drafting, ranking logic</li>

                <li><span className="font-semibold text-gray-900">SERP API </span> – Pulls top K articles from Google search results</li>

                <li><span className="font-semibold text-gray-900">  FlowSearch & Ranking</span> –  Scrapes and ranks relevant articles from the web</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – <b><a href="n8n"><u>  https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Here’s what the full workflow looks like in n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="social media automation.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

            <p>Search → Summarize → Write → Format → Publish</p>

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🎯 Ideal For</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Content creators & personal brand managers</li>

              <li>Social media teams managing multiple accounts</li>

              <li>Newsletters & media brands scaling short-form content</li>

              <li>Founders & agencies automating client content</li>

            </ul>

          </div>

        </div>

        <div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">✅ What You’ll Automate</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li><span >🔎 Topic Discovery</span> –  Pulls trending, high-quality articles  </li>

              <li><span >🧠 Summarization & Ranking</span> –  Uses GPT for insight extraction & sorting</li>

              <li><span >✍️ Content Generation  </span> –  Creates LinkedIn, Twitter, and IG captions</li>

              <li><span > 📬 Publishing Automation</span> – Preps formatted content for scheduling or posting</li>

              <li><span >🔊 Optional Voice Output</span></li>

            </ul>

          </div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 7,

    title: "SmallAI - Instagram AI Agent for Digital Marketing agency",

    image: "instagram.png",

    price: 0,

    priceDisplay: "$20+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <p className="text-lg leading-relaxed">

            Automate Instagram analysis, lead research, and email generation — all using AI. This workflow is built for agencies that want to scale client acquisition using intelligent automation.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/zpU0XGcDbNc" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>



          <ul className="space-y-3">

            {[

              "Scrapes Reels, Posts, and Comments from user pages",

              "Analyzes tone, niche, and engagement patterns via GPT",

              "Creates a highly personalized cold outreach email",

              "Logs everything to Google Sheets for easy follow-up",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI GPT-4</span> –   User analysis and AI-written outreach emails.</li>

                <li><span className="font-semibold text-gray-900">Instagram Scraper API (Apify)</span> – Extracts reels, posts, captions & comments.</li>

                <li><span className="font-semibold text-gray-900">  Google Sheets</span> –  Logs all leads, comments, and final email outputs.</li>

                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – <b><a href="n8n"><u>  https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Workflow – Instagram Lead Analyzer + Email Generator</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="instagram agent.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🎯 Who It's For</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>📈 Digital Marketing Agencies</li>

              <li>👥 Lead Gen Consultants</li>

              <li>📣 Influencer Marketers</li>

              <li>🛠 No-code Builders scaling outreach</li>

              <li>🤝 Founders who want leads without hiring SDRs</li>

            </ul>

          </div>

        </div>

        <div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">✅ What You’ll Automate</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li><span >🕵️ Lead Discovery </span> –  Scrapes Reels & captions via API  </li>

              <li><span >🧠 AI Analysis</span> –  Understand tone, niche, behavior</li>

              <li><span >✍️ Email Creation  </span> –  Personalized cold emails generated via GPT</li>

              <li><span > 📊 Lead Logging</span> – Google Sheet entry for every processed lead</li>

              <li><span >🎙️ (Optional)</span>- Voice-based email via ElevenLabs</li>

            </ul>

          </div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <a href=" https://twitter.com/prakkarshh" className="text-blue-600 hover:underline">🐦 Follow on Twitter/X</a>

            <a href="https://youtube.com/@smallgrp" className="text-blue-600 hover:underline">📺 More on YouTube</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 8,

    title: "SmallAI - How I Automate Blog Creation from YouTube Videos (100% Hands-Free)",

    image: "Blog writer 2 video.png",

    price: 0,

    priceDisplay: "$10+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <p className="text-lg leading-relaxed">

            Turn any YouTube video into a fully formatted blog post

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/HZxDh55YfQ4" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>



          <ul className="space-y-3">

            {[

              "Accepts a YouTube URL via input form",

              "Extracts full video transcript using Apify",

              "AI agent writes the blog based on topics, structure, and keywords",

              "Auto-generates visuals using OpenAI’s image API",

              "Adds metadata, converts to HTML, and publishes to WordPress",

              "All done 100% hands-free"

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI GPT-4</span> –   Blog writing, metadata generation, and image prompts</li>

                <li><span className="font-semibold text-gray-900">OpenAI Image API</span> – Auto-generates featured visuals</li>

                <li><span className="font-semibold text-gray-900">  WordPress API</span> –   Publishes post + sets featured image</li>

                <li><span >  ✍️ Markdown Parser</span> –   Clean HTML output</li>

                <li><span className="font-semibold text-gray-900">Apify</span> –(YouTube Transcript Scraper) : <b><a href="n8n"><u>  https://console.apify.com/actors/CTQcdDtqW5dvELvur/?fpr=9nvl6</u></a></b></li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Workflow Visual</h3>

          <p className="text-gray-600 mb-3">Workflow – YouTube to Blog Post Generator</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="blog creation.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🎯 Who Should Use This</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Content creators repurposing videos to blogs</li>

              <li>SEO marketers turning videos into traffic sources</li>

              <li>Solo founders automating content ops</li>

              <li>No-code/automation builders building AI tools</li>

            </ul>

          </div>

        </div>

        <div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">✅ What You’ll Automate</h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li> Eliminate manual blog writing </li>

              <li>Publish consistently without touching WordPress</li>

              <li>Automatically turn video content into SEO blogs</li>

              <li>Combine AI + automation for real content systems</li>

            </ul>

          </div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 9,

    title: "SmallAI -AI Agent Designs Ad Creatives in Minutes",

    image: "Small AI Thumbnails.png",

    price: 0,

    priceDisplay: "$5+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>👥 Want to Build AI-Powered Creative Ads?</h5>

          <p className="text-lg leading-relaxed">

            Automate the ad creative process using GPT, Gemini, and OpenAI image APIs. Design scroll-stopping ads in multiple formats with zero design experience.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href=" https://www.youtube.com/watch?v=6M49tWFXoMo" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <p>This system allows your AI agent to generate ad creatives—Post, Story, and 4:3—within minutes using a single form input.</p>

          <h4>✨ Key Features:</h4>

          <ul className="space-y-3">

            {[

              "Single prompt → multiple ad variants (caption + image)",

              "Uses OpenAI Image generation for rendering visuals",

              "Supports multiple formats: Post, Story, Landscape (4:3)",

              "Auto-saves final creatives to Google Drive",

              "No manual design work required",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Tools Used</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">OpenAI GPT-4 / Gemini </span> –   For creative copy and prompt generation</li>

                <li><span className="font-semibold text-gray-900">OpenAI Image API</span> –  For editing and generating visual assets</li>

                <li><span > 📁 Google Drive</span> –   Stores and organizes creatives in folders</li>

                <li><span >  🕹 Structured Output Parser</span> –   For transforming AI output into usable formats</li>

                <li><span >🕹 Structured Output Parser</span> –For transforming AI output into usable formats </li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">🧭 Workflow Visuals</h3>

          <p className="text-gray-600 mb-3">Here’s how the AI-powered creative generation system is structured inside n8n:</p>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="ad creation.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🎯 Who It’s For</h4>

            <p>This automation is ideal for:</p>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Founders launching fast-moving campaigns</li>

              <li>Growth marketers scaling paid ads</li>

              <li>Content teams producing high-volume creatives</li>

              <li>No-code builders automating design workflows</li>

            </ul>

          </div>

        </div>

        <div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">✅ What You’ll Achieve</h4>

            <p>With this automation, you’ll:</p>

            <ul className="space-y-2 text-sm text-gray-600">

              <li> Save hours of manual design work </li>

              <li>Generate AI-powered visuals instantly</li>

              <li>Organize creatives by format for easy deployment</li>

              <li>Turn a simple idea into a complete ad pack in minutes</li>

            </ul>

          </div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 10,

    title: "SmallAI - Master SEO Blog Writer that you can sell for $10,000",

    image: "Small AI Thumbnails (2).png",

    price: 0,

    priceDisplay: "$40+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>Generate Long-Form, SEO-Optimized Blog Posts Automatically Using AI + SERP Data</h5>



          <div className="flex flex-wrap gap-3 mt-4">

            <a href=" https://youtu.be/ww3Wq5LIsa0" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a custom setup or help?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <p>This end-to-end workflow automatically generates long-form, SEO-optimized blog posts using AI and live SERP data. It’s perfect for content creators, agencies, SEO freelancers, and automation builders.</p>



          <ul className="space-y-3">

            {[

              "🔍 Researches SEO-friendly keywords using SERP scraping",

              "🧠 Uses Claude or GPT-4 to draft content following SEO best practices",

              "🪄 Automatically formats posts with headings, metadata, links, and CTAs",

              "🚀 Uploads directly to WordPress or stores in Google Docs, Sheets, or Drive",

              "🧩 Modular: Trigger via form, webhook, or schedule",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ">

              <h4 className="font-bold mb-3">🛠 Important Links</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">🔎 SERP API </span> – <b><a href="serp"><u>http://serpapi.com</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >📺 Watch the Demo on Youtube</span> – <b><a href="yt"><u>: https://youtu.be/ww3Wq5LIsa0</u></a></b> </li>

              </ul>

            </div>

          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mt-7">

            <h4 className="font-bold mb-3">🧭 Workflow Overview</h4>



            <ul className="space-y-2 text-sm text-gray-600">

              <li>A user submits a topic (via form or webhook) to trigger the workflow.</li>

              <li>SERP API gathers keyword suggestions and competing content.</li>

              <li>AI writes a full-length blog post, including SEO-structured sections and suggested images.</li>

              <li>External links, CTAs, and FAQs are added using verified sources.</li>

              <li>The blog is preprocessed (headings, metadata, shortcodes) and published to WordPress.</li>

              <li>Assets and logs are stored in Google Sheets and Drive through a secondary flow.</li>

            </ul>

          </div>

          <h3 className="text-xl font-bold mb-5 mt-8">🖼 Visual Walkthrough</h3>

          <h3 className=" mb-3 mt-5">1. Main Blog Generation Workflow</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="master seo blog.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className="mb-3 mt-5">2. Google Docs + Image to WordPress Uploader</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="master seo wordpress.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">🎯 Who It’s For</h4>

            <p>This automation is ideal for:</p>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>Founders launching fast-moving campaigns</li>

              <li>Growth marketers scaling paid ads</li>

              <li>Content teams producing high-volume creatives</li>

              <li>No-code builders automating design workflows</li>

            </ul>

          </div>

        </div>

        <div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href=" https://twitter.com/prakkarshh" className="text-blue-600 hover:underline">🐦 Follow on Twitter/X</a>

            <a href="https://youtube.com/@smallgrp" className="text-blue-600 hover:underline">📺 More on YouTube</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 11,

    title: "Small AI - Claude Project That Builds n8n Automation",

    image: "claude 4.png",

    price: 0,

    priceDisplay: "$0+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>🤖 Build n8n Workflows with Just a Prompt or Screenshot</h5>

          <p>AI-powered Automation Engineering with Claude 4.0 + n8n</p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href=" https://www.youtube.com/watch?v=9hzsEY_Tjv0" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a similar setup or custom build?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>

          <p>In this tutorial, I demonstrate how Claude 4.0 Sonnet acts as a smart workflow architect — designing and generating ready-to-deploy n8n JSON workflows from minimal inputs.</p>



          <ul className="space-y-3">

            {[

              "A freelancer working with automation,",

              "An agency building client workflows at scale,",

              "Or a no-code builder streamlining backend tasks...",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

            <p>This method helps you deliver faster, better, and smarter.</p>

          </ul>

        </div>



        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🛠 Important Links</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">🧠 Claude 4.0 (Sonnet model)  </span> – <b><a href="serp"><u> https://claude.aii</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">📁 Google Drive →</span>Used for training Claude with existing workflows</li>

                <li><span className="font-semibold text-gray-900">📜 Custom Claude Prompt Instructions →</span>Included in resource pack</li>

              </ul>

            </div>

          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mt-6">

            <h4 className="font-bold mb-3">🎓 What You’ll Learn</h4>



            <ul className="space-y-2 text-sm text-gray-600">

              <li>- Feed Claude screenshots or prompts to build functional workflows</li>

              <li>- Train Claude using your own workflow library (templates from Google Drive)</li>

              <li>- Auto-generate HTTP Request Nodes with correct headers, URLs, and payloads</li>

              <li>- Implement best practices for naming, modular design & reusability</li>

              <li>- Resell or scale workflows for multiple clients or use cases</li>



            </ul>

            <p>⚡ Bonus: Includes a pre-built Claude prompt + JSON structure library to kickstart your setup instantly!</p>

          </div>

        </div>



        <div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 12,

    title: "I Built The BEST Lead Generation + Follow Up Automation (Steal This!)",

    image: "Lead Gen - YT.png",

    price: 0,

    priceDisplay: "$5+",

    rating: 4.8,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>👥 Want to Learn or Build with Us?</h5>

          <p>Take your lead generation and outreach to the next level with AI-powered workflows and automation.</p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/0teUiWQydRo" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a custom setup or help?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">What You’ll Get from This Workflow</h3>

          <p>This isn’t just another automation hack — it’s real workflow engineering, blending the power of AI and automation for maximum impact.</p>



          <ul className="space-y-3">

            {[

              "Lead Generation Automatically import and enrich leads from LinkedIn in real time.",

              "Email Follow-Ups Create personalized, intelligent cold email sequences that adapt based on engagement.",

              "LinkedIn Follow-Ups Execute a structured connection and messaging strategy to build authentic relationships.",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🔧 Tools & Resources</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">🧠 OpenAI (AI for Personalization): </span> – <b><a href="serp"><u>https://openai.com/</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >📧 Hunter.io (Email Enrichment):</span> – <b><a href="yt"><u> https://hunter.io/?via=prakarsh</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >🕵️‍♂️ LinkedIn Profile Scraper (Apify):</span> – <b><a href="yt"><u> https://apify.com/curious_coder/linkedin-profile-scraper?fpr=9nvl6</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >👻 PhantomBuster (LinkedIn Automation):</span> – <b><a href="LinkedIn Automation"><u>https://phantombuster.com/</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >📁 Other Workflow Templates:</span> – <b><a href="workflow"><u>https://ai.smallgrp.com</u></a></b> </li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">Workflow Visuals</h3>

          <p>Here’s a visual overview of the actual workflow setup built in n8n:</p>

          <h3 className=" mb-3 mt-5">Workflow 1 – Lead Import from LinkedIn</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="lead generation import.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className="mb-3 mt-5">Workflow 2 – Email Follow-up Automation</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="lead generation email.png"

              alt="Email Follow-up Automation"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className="mb-3 mt-5">Workflow 3 – LinkedIn Messaging System</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="lead generation linkedin.png"

              alt="LinkedIn Messaging System workflow"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">Ideal For:</h4>



            <ul className="space-y-2 text-sm text-gray-600">

              <li>Founders & solopreneurs scaling outreach</li>

              <li>Growth marketers building automated funnels</li>

              <li>Agencies creating high-touch lead gen systems</li>

              <li>No-code builders leveraging AI to streamline workflows</li>

            </ul>

          </div>

        </div>

        <div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <a href=" https://twitter.com/prakkarshh" className="text-blue-600 hover:underline">🐦 Follow on Twitter/X</a>

            <a href="https://youtube.com/@smallgrp" className="text-blue-600 hover:underline">📺 More on YouTube</a>



            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 13,

    title: "I Built an AI That Creates Viral Reels While I Sleep (FREE Template)",

    image: "ArcAds Thumbnail.png",

    price: 0,

    priceDisplay: "$5+",

    rating: 4.5,

    ratingCount: 32,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>👥 Want to Learn or Build with Us?</h5>

          <p>Take your lead generation and outreach to the next level with AI-powered workflows and automation.</p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/q3HToWiJhaM" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a custom setup or help?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🔧 Tools & Resources Included:</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n</span> –  Automation backbone:  <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">🧠 OpenAI (AI for Personalization): </span> –for intelligent personalization </li>

                <li><span className="font-semibold text-gray-900" >ArcAds:</span>  <b><a href="yt"><u> https://hunter.io/?via=prakarsh</u></a></b> </li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">Workflow Visuals</h3>



          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="viral reel.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <a href=" https://twitter.com/prakkarshh" className="text-blue-600 hover:underline">🐦 Follow on Twitter/X</a>

            <a href="https://youtube.com/@smallgrp" className="text-blue-600 hover:underline">📺 More on YouTube</a>



            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

  {

    id: 14,

    title: "This Outreach Automation can 10x Your Revenue (n8n Template)",

    image: "outreach agent.png",

    price: 0,

    priceDisplay: "$25+",

    rating: 4,

    ratingCount: 12,

    fileSize: "8.5 KB",

    author: "Small Group",

    description: "Generate high-ranking SEO articles automatically using this specialized agent workflow.",

    features: ["Keyword research", "Article drafting", "Meta tag generation"],

    details: (

      <div className="space-y-8 text-gray-800">

        <div>

          <h5>👥 Want to Learn or Build with Us?</h5>

          <p>Take your lead generation and outreach to the next level with AI-powered workflows and automation.</p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a href="https://youtu.be/JDg_bNvu-JE" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">

              <Video size={16} /> Watch Demo

            </a>

            <h3>📞 Need a custom setup or help?</h3>

            <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

              <Calendar size={16} /> Book Strategy Call

            </a>

          </div>

        </div>



        {/* Section: What This Workflow Does */}

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">What You’ll Get from This Workflow</h3>

          <p>This isn’t just another automation hack — it’s real workflow engineering, blending the power of AI and automation for maximum impact.</p>



          <ul className="space-y-3">

            {[

              "Lead Generation Automatically import and enrich leads from LinkedIn in real time.",

              "Email Follow-Ups Create personalized, intelligent cold email sequences that adapt based on engagement.",

              "LinkedIn Follow-Ups Execute a structured connection and messaging strategy to build authentic relationships.",

            ].map((item, i) => (

              <li key={i} className="flex items-start gap-2">

                <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>



        {/* Section: Workflow Overview (Image) */}

        <div>

          <div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

              <h4 className="font-bold mb-3">🔧 Tools & Resources</h4>

              <ul className="space-y-2 text-sm text-gray-600">

                <li><span className="font-semibold text-gray-900">n8n - Automation backbone: </span> <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>

                <li><span className="font-semibold text-gray-900">🧠 OpenAI (AI for Personalization): </span><b><a href="serp"><u>https://openai.com/</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >📧 Hunter.io (Email Enrichment):</span> <b><a href="yt"><u> https://hunter.io/?via=prakarsh</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >🕵️‍♂️ LinkedIn Profile Scraper (Apify):</span><b><a href="yt"><u> https://apify.com/curious_coder/linkedin-profile-scraper?fpr=9nvl6</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >👻 PhantomBuster (LinkedIn Automation):</span><b><a href="LinkedIn Automation"><u>https://phantombuster.com/</u></a></b> </li>

                <li><span className="font-semibold text-gray-900" >📁 Other Workflow Templates:</span><b><a href="workflow"><u>https://ai.smallgrp.com</u></a></b> </li>

              </ul>

            </div>

          </div>



          <h3 className="text-xl font-bold mb-5 mt-8">Workflow Visuals</h3>

          <p>Here’s a visual overview of the actual workflow setup built in n8n:</p>

          <h3 className="mb-3 mt-5">Workflow 1 – Lead Generation from Keywords</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="outreach keyword.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className="mb-3 mt-5">Workflow 2 - Lead Enrichment</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="outreach lead.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className="mb-3 mt-5">Workflow 3 – Email Follow-up Automation</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="outreach emailflow.png"

              alt="n8n Workflow Diagram"

              className="w-full h-auto object-cover"

            />

          </div>

          <h3 className=" mb-3 mt-5">Workflow 4 – LinkedIn Messaging System - Browserflow</h3>

          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">

            <img

              src="outreach browerflow.png"

              alt="Browserflow"

              className="w-full h-auto object-cover"

            />

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">

            <h4 className="font-bold mb-3">Ideal For:</h4>



            <ul className="space-y-2 text-sm text-gray-600">

              <li>Founders & solopreneurs scaling outreach</li>

              <li>Growth marketers building automated funnels</li>

              <li>Agencies creating high-touch lead gen systems</li>

              <li>No-code builders leveraging AI to streamline workflows</li>

            </ul>

          </div>

        </div>

        <div>

        </div>

        {/* Footer Links */}

        <div className="pt-6 border-t border-gray-200">

          <h4 className="font-bold mb-2">🌐 Stay Connected</h4>

          <div className="flex flex-col gap-2">

            <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>

            <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>

            <a href=" https://twitter.com/prakkarshh" className="text-blue-600 hover:underline">🐦 Follow on Twitter/X</a>

            <a href="https://youtube.com/@smallgrp" className="text-blue-600 hover:underline">📺 More on YouTube</a>



            <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>

          </div>

        </div>

      </div>

    )

  },

];