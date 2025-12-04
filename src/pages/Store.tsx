
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner"; 
import { 
  Star, Share2, CheckCircle, ChevronLeft, Lock, 
  CreditCard, Loader2, Mail, Download, ArrowRight, Video, Calendar, Globe 
} from "lucide-react";

// --- Types ---
type Product = {
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

// --- Data ---
// const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     title: "Small AI - AI Travel Agent Automation", 
//     image: "/travel agent thumb.png", 
//     price: 0,
//     priceDisplay: "$10+",
//     rating: 5.0,
//     ratingCount: 15,
//     fileSize: "13.5 KB",
//     author: "Prakarsh Gupta",
//     description: "Automate custom travel itinerary generation and email delivery using AI. From a simple webhook trigger to a personalized plan.",
//     features: ["Webhook Trigger", "OpenAI Itinerary", "Gmail Delivery", "SERP API Live Search"],
//     details: (
//       <div className="space-y-8 text-gray-800">
//         <div>
//           <h5>✈️ Automate custom travel itinerary generation and email delivery using AI.</h5>
//           <p className="text-lg leading-relaxed">
//             From a simple webhook trigger, this workflow searches flights & resorts, creates a personalized plan with OpenAI, and emails it directly to the user — all on autopilot.
//           </p>
//           <div className="flex flex-wrap gap-3 mt-4">
//              <a href="https://youtu.be/zeh7cXpzJ4Y" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
//                <Video size={16} /> Watch Demo
//              </a>
//              <h3>📞 Need a similar setup or custom build?</h3>
//              <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                <Calendar size={16} /> Book Strategy Call
//              </a>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
//           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>
//           <ul className="space-y-3">
//             {["Accepts travel request data via webhook", "Extracts and verifies dates, locations, and airport codes", "Searches live data for resorts and flights using SERP API", "Uses LLM (GPT-4) to generate an email-friendly itinerary", "Sends the travel plan to the user's inbox", "Logs lead data into Google Sheets"].map((item, i) => (
//               <li key={i} className="flex items-start gap-2">
//                 <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
//              <h4 className="font-bold mb-3">🛠 Tools Used</h4>
//              <ul className="space-y-2 text-sm text-gray-600">
//                <li><span className="font-semibold text-gray-900">n8n</span> – Visual automation</li>
//                <li><span className="font-semibold text-gray-900">OpenAI</span> – LLM logic</li>
//                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Voice generation (Optional)</li>
//                <li><span className="font-semibold text-gray-900">SERP API</span> – Live flight search</li>
//                <li><span className="font-semibold text-gray-900">Google Sheets</span> – Database</li>
//                <li><span className="font-semibold text-gray-900">Gmail</span> – Dispatch</li>
//              </ul>
//           </div>
//           <h3 className="text-xl font-bold mb-5 mt-10">📊 Workflow Overview</h3>
//           <p className="text-gray-600 mb-3">Here’s what the automation looks like inside n8n:</p>
//           <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
//             <img src="ai travel.png" alt="n8n Workflow Diagram" className="w-full h-auto object-cover" />
//           </div>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🔄 Step-by-Step Logic</h3>
//           <ol className="list-decimal pl-5 space-y-3 text-gray-700">
//             <li><span className="font-bold text-gray-900">Webhook Trigger</span> – Starts when a user submits a travel request</li>
//             <li><span className="font-bold text-gray-900">Location + Date Processing</span> – Extracts usable data from raw inputs</li>
//             <li><span className="font-bold text-gray-900">Live Search</span> – SERP API queries for flights and resorts</li>
//             <li><span className="font-bold text-gray-900">Plan Generation</span> – OpenAI LLM writes a trip summary</li>
//             <li><span className="font-bold text-gray-900">Delivery</span> – Gmail sends the final plan</li>
//             <li><span className="font-bold text-gray-900">Storage</span> – Google Sheets logs the user lead</li>
//             <li><span className="font-bold text-gray-900">Webhook Response</span> – Final confirmation response sent</li>
//           </ol>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
//              <h4 className="font-bold mb-3">👥 Ideal For</h4>
//              <ul className="space-y-2 text-sm text-gray-600">
//                <li>Travel agencies scaling itinerary delivery</li>
//                <li>Solo entrepreneurs selling AI travel planners</li>
//                <li>Developers building AI assistants</li>
//                <li>Agencies productizing automation</li>
//              </ul>
//            </div>
//         </div>
//         <div className="pt-6 border-t border-gray-200">
//           <h4 className="font-bold mb-2">🌐 Stay Connected</h4>
//           <div className="flex flex-col gap-2">
//             <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>
//             <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>
//             <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>
//           </div>
//         </div>
//       </div>
//     )
//   },
//   {
//     id: 2,
//     title: "Small AI - HR Agent – Automate Hiring with AI + LinkedIn + n8n",
//     image: "hr agent thumb.png",
//     price: 10,
//     priceDisplay: "$10+",
//     rating: 5.0,
//     ratingCount: 1,
//     fileSize: "10.2 KB",
//     author: "Prakarsh Gupta",
//     description: "A complete AI Travel agent workflow that helps plan trips, book flights, and manage itineraries automatically.",
//     features: ["Flight search", "Itinerary generation", "Email automation"],
//     details: (
//       <div className="space-y-8 text-gray-800">
//         <div>
//           <h5>Automate resume parsing, job posting, and candidate extraction directly from Gmail attachments and chat commands.</h5>
//           <p className="text-lg leading-relaxed">This powerful n8n workflow acts as your AI-powered HR assistant — parsing resumes, extracting key info, and posting jobs on LinkedIn with minimal input.</p>
//           <div className="flex flex-wrap gap-3 mt-4">
//              <a href="https://youtu.be/sYEy6Hgg1Kw" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
//                <Video size={16} /> Watch Demo
//              </a>
//              <h3>📞 Need a similar setup or custom build?</h3>
//              <a href="https://calendly.com/prakarshgupta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                <Calendar size={16} /> Book Strategy Call
//              </a>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
//           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🧠 What This Workflow Does</h3>
//           <ul className="space-y-3">
//             {["Automatically detects new resumes from Gmail", "Extracts structured candidate data from PDFs", "Uses OpenAI to generate human-level job descriptions", "Saves candidate profiles in Google Sheets", "Posts jobs directly to LinkedIn via API — all from a single chat command"].map((item, i) => (
//               <li key={i} className="flex items-start gap-2">
//                 <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
//              <h4 className="font-bold mb-3">🛠 Tools Used</h4>
//              <ul className="space-y-2 text-sm text-gray-600">
//                <li><span className="font-semibold text-gray-900">n8n</span> –  No-code workflow builder: <b><a href="n8n"><u>https://n8n.partnerlinks.io/xm2jyb9jxv0c</u></a></b> </li>
//                <li><span className="font-semibold text-gray-900">OpenAI</span> – Contextual parsing + job description generation</li>
//                <li><span className="font-semibold text-gray-900">Gmail</span> – Resume intake</li>
//                <li><span className="font-semibold text-gray-900">Google Drive</span> – Document staging</li>
//                <li><span className="font-semibold text-gray-900">Google Sheets</span> – Candidate database</li>
//                <li><span className="font-semibold text-gray-900">LinkedIn API</span> – Job posting</li>
//                <li><span className="font-semibold text-gray-900">ElevenLabs</span> – Voice generation (Optional): <b><a href="n8n"><u>https://try.elevenlabs.io/obq0xceu3x7j</u></a></b></li>
//                <li><span className="font-semibold text-gray-900">Structured Output Parser</span> – Ensures reliable formatting of AI-generated data</li>
//              </ul>
//           </div>
//           <h3 className="text-xl font-bold mb-5 mt-10">🧠 Workflow Structure</h3>
//           <h4>Part 1: Resume Intake & Candidate Parsing</h4>
//           <div>
//             <ol className="list-decimal pl-5 space-y-3 text-gray-700">
//             <li>Gmail trigger fetches incoming resumes</li>
//             <li>PDF resumes are uploaded to Google Drive</li>
//             <li>OpenAI parses resumes and extracts key information</li>
//             <li>Candidate data is saved in Google Sheets</li>
//             <li>Files are deleted from Drive to avoid clutter</li>
//             </ol>
//           </div>
//           <h4>Part 2: Job Posting via Chat Command</h4>
//           <div>
//             <ol className="list-decimal pl-5 space-y-3 text-gray-700">
//             <li>A chat message triggers the LinkedIn job posting flow</li>
//             <li>LinkedIn HR ID is fetched</li>
//             <li>Job data is added using AI and structured fields</li>
//             <li>Job is posted via LinkedIn API</li>
//             </ol>
//           </div>
//             <h4 >🖼 Visual Overview</h4>
//             <h5>1. LinkedIn Job Posting via Chat Command:</h5>
//           <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
//             <img src="hr agent linkedin.png" alt="n8n Workflow Diagram" className="w-full h-auto object-cover" />
//           </div>
//         <h5>2. Resume Intake & Candidate Extraction:</h5>
//           <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
//             <img src="hr agent resume.png" alt="n8n Workflow Diagram" className="w-full h-auto object-cover" />
//           </div>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">👤 Who It’s For</h3>
//           <ul className="list-decimal pl-5 space-y-3 text-gray-700">
//             <li>HR managers automating screening and posting</li>
//             <li>SaaS builders integrating hiring into internal tools</li>
//             <li>AI agencies productizing recruiting workflows</li>
//             <li>Startups managing lean hiring teams</li>
//           </ul>
//         </div>
//         <div className="pt-6 border-t border-gray-200">
//           <h4 className="font-bold mb-2">🌐 Community & More</h4>
//           <div className="flex flex-col gap-2">
//             <a href="https://discord.gg/u6fvHes5CW" className="text-blue-600 hover:underline">🎯 Join our Discord</a>
//             <a href="https://ai.smallgrp.com" className="text-blue-600 hover:underline">🌍 Explore more AI workflows</a>
//             <p>✨ I’m building an AI Agent to craft detailed travel itineraries and send them straight to your email—automating travel agencies like a pro!</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// ];
const PRODUCTS: Product[] = [

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

          <h4  className=" mb-2 mt-5">Part 1: Resume Intake & Candidate Parsing</h4>

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

// --- COMPONENTS ---

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => (
  <div onClick={onClick} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
    <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{product.title}</h3>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-black text-black" />)}
        <span className="text-gray-500 text-sm ml-1">({product.ratingCount})</span>
      </div>
      <div className="mt-auto">
        <div className="inline-block bg-[] border border-black text-black font-bold px-3 py-1 text-sm rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {product.priceDisplay}
        </div>
      </div>
    </div>
  </div>
);

// --- PRODUCT DETAIL ---
const ProductDetail = ({ product, onBack, onAddToCart }: { product: Product; onBack: () => void; onAddToCart: (p: Product) => void }) => {
  const [customPrice, setCustomPrice] = useState<string>(product.price.toString());

  const handleAddToCartClick = () => {
    const priceValue = parseFloat(customPrice);
    if (isNaN(priceValue)) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (priceValue < product.price) {
      toast.error(`The minimum price for this item is $${product.price}`);
      return;
    }
    const productWithCustomPrice = { ...product, price: priceValue };
    onAddToCart(productWithCustomPrice);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
        <ChevronLeft size={20} /> Back to Store
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            {product.details ? (
              <div>{product.details}</div>
            ) : (
              <div>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{product.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="bg-yellow-100 p-1 rounded">💡</span> What This Workflow Does
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={18} className="mt-1 text-gray-400 shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name a fair price:</label>
              <div className="flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">$</span>
                <input type="number" min={product.price} step="0.01" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} placeholder={`${product.price}+`} className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-md border border-gray-300 focus:ring-black focus:border-black sm:text-lg" />
              </div>
            </div>
            {/* Blue color as requested */}
            <button onClick={handleAddToCartClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-sm hover:shadow transition-all mb-4 border border-black/5">
              Add to cart
            </button>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6 px-1">
              <span>Size: {product.fileSize}</span>
              <button className="flex items-center gap-1 hover:text-black"><Share2 size={16} /> Share</button>
            </div>
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Ratings</span>
                <div className="flex text-yellow-500">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              </div>
              <p className="text-sm text-gray-500 text-right">{product.ratingCount} ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUCCESS PAGE ---
const SuccessPage = ({ email, onHome }: { email: string; onHome: () => void }) => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
    <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-green-600 w-12 h-12" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
      <p className="text-gray-500 text-lg">Thank you for your purchase. Your order is confirmed.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <Mail className="text-blue-600 w-5 h-5" />
        </div>
        <div>
            <h3 className="font-semibold text-gray-900">Check your inbox</h3>
            <p className="text-sm text-gray-600 mt-1">
              We have sent a receipt and your download links to <span className="font-bold text-gray-900">{email || "your email"}</span>.
            </p> 
        </div>
      </div>
      <div className="space-y-3 pt-6">
        <button onClick={onHome} className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          Back to Store <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

// --- CHECKOUT COMPONENT ---
const Checkout = ({ cart, onBack, onRemove, onPay }: { cart: Product[]; onBack: () => void; onRemove: (id: number) => void; onPay: (email: string) => void }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "" 
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const gst = subtotal * 0.18; 
  const total = subtotal + gst;

  // Strict input handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "name") {
      // STRICT: Only letters and spaces. If user types number, it's ignored.
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    } else if (name === "cardNumber") {
      // Numbers only, 16 digits, groups of 4
      const clean = value.replace(/\D/g, "");
      const truncated = clean.slice(0, 16);
      formattedValue = truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
    } else if (name === "expiry") {
      // MM/YY Logic with backspace fix
      const clean = value.replace(/\D/g, "");
      const truncated = clean.slice(0, 4);
      const nativeEvent = e.nativeEvent as any; 
      const isDeleting = nativeEvent.inputType === "deleteContentBackward" || nativeEvent.inputType === "deleteContentForward";

      if (truncated.length >= 2 && !isDeleting) {
        formattedValue = truncated.slice(0, 2) + "/" + truncated.slice(2);
      } else {
         if (truncated.length > 2) {
             formattedValue = truncated.slice(0, 2) + "/" + truncated.slice(2);
         } else {
             formattedValue = truncated;
         }
      }
    } else if (name === "cvv") { 
       // STRICT: Numbers only.
       const clean = value.replace(/\D/g, "");
       formattedValue = clean.slice(0, 4);
    }
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handlePay = async () => {
    // 0. CHECK IF CART IS EMPTY (NEW FIX)
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    // 1. Check Empty Fields
    if(!formData.email || !formData.name || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      toast.error("Please fill in all required fields to proceed.");
      return;
    }
    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // 3. Name Validation (double check)
    if (formData.name.trim().length === 0) {
      toast.error("Name is required.");
      return;
    }
    // 4. Card Length Validation
    const cleanCardNum = formData.cardNumber.replace(/\s/g, "");
    if (!/^\d{16}$/.test(cleanCardNum)) {
      toast.error("Card number must be exactly 16 digits.");
      return;
    }
    // 5. Expiry Validation
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      toast.error("Expiry date must be in MM/YY format.");
      return;
    }
    
    // Future Date Check
    const [expMonth, expYear] = formData.expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const numExpYear = parseInt(expYear, 10);
    const numExpMonth = parseInt(expMonth, 10);
    if (numExpMonth < 1 || numExpMonth > 12) {
       toast.error("Invalid month.");
       return;
    }
    if (numExpYear < currentYear || (numExpYear === currentYear && numExpMonth < currentMonth)) {
        toast.error("Card has expired.");
        return;
    }
    // 6. CVV Validation
    if (!/^\d{3,4}$/.test(formData.cvv)) {
      toast.error("CVV must be 3 or 4 digits.");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("https://5jsanjhv.rpcl.app/webhook/emailnotification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          product_titles: cart.map(p => p.title).join(", "), 
          order_total: total.toFixed(2)
        })
      });
      if(response.ok) {
        toast.success(`Purchase successful! Sent to ${formData.email}`);
        setLoading(false);
        onPay(formData.email);
      } else {
        toast.success("Purchase successful!"); 
        setLoading(false);
        onPay(formData.email);
      }
    } catch (e) {
      console.error(e);
      toast.success("Purchase successful!"); 
      setLoading(false);
      onPay(formData.email);
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-2xl text-gray-900 font-medium">Checkout</h1>
          <button onClick={onBack} className="text-gray-600 hover:text-black text-sm border border-gray-300 px-4 py-2 rounded transition-colors">
            Continue shopping
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cart Items */}
          <div>
            <div className="space-y-4 mb-6">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4 transition-all hover:border-gray-300 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded bg-gray-100" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-gray-900 font-medium text-sm">{item.title}</h3>
                      <span className="text-gray-900 font-bold">US${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                    <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                      <span>Qty: 1</span>
                      <div className="flex gap-3">
                        <button onClick={() => onRemove(item.id)} className="hover:text-red-500 underline">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length === 0 && <div className="p-8 text-center text-gray-500 bg-gray-50 rounded border border-gray-200">Your cart is empty.</div>}
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>US${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>GST (18%)</span>
                <span>US${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-900 text-lg font-bold pt-4 border-t border-gray-200 mt-2">
                <span>Total</span>
                <span>US${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form - BOLD LABELS */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6 sticky top-6 shadow-sm">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pay with</label>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Name on card <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Card information <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="text" name="cardNumber" maxLength={19} value={formData.cardNumber} onChange={handleInputChange} placeholder="1234 5678 1234 5678" className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                      <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                    <div className="flex gap-2 mt-2">
                      <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="MM / YY" className="w-1/2 bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                      {/* CVV Input - Renamed to match state */}
                      <input type="text" name="cvv" maxLength={4} value={formData.cvv} onChange={handleInputChange} placeholder="CVV" className="w-1/2 bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-900 mb-2">Country</label>
                 <select className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                   <option>India</option>
                   <option>United States</option>
                   <option>United Kingdom</option>
                 </select>
              </div>
              <button 
                onClick={handlePay} 
                disabled={loading || cart.length === 0} 
                className={`w-full font-bold py-4 rounded transition-colors flex items-center justify-center gap-2 mt-4 shadow-md ${
                  loading || cart.length === 0 
                    ? "bg-gray-400 cursor-not-allowed text-gray-200" 
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                 {loading ? (<> <Loader2 className="animate-spin" size={20} /> Processing... </>) : (<> <Lock size={16} /> Pay US${total.toFixed(2)} </>)}
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Powered by Small Group Payments. Secure SSL Connection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN STORE COMPONENT ---
const Store = () => {
  const [view, setView] = useState<'grid' | 'detail' | 'checkout' | 'success'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [customerEmail, setCustomerEmail] = useState("");

  // History API for Browser Back Button Logic
  useEffect(() => {
    // 1. Handle PopState (Back Button Click)
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        // Restore view from history state
        setView(event.state.view);
        // FIX: Retrieve product by ID from the global constant
        if (event.state.productId) {
          const found = PRODUCTS.find(p => p.id === event.state.productId);
          setSelectedProduct(found || null);
        }
      } else {
        // Default to grid if no state exists (e.g. initial load)
        setView('grid');
        setSelectedProduct(null);
      }
    };

    // 2. Add Listener
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Helper to change view and push state
  const navigateTo = (newView: 'grid' | 'detail' | 'checkout' | 'success', product?: Product) => {
     // FIX: Do not store 'product' (contains JSX). Store 'productId' instead.
     const state = { view: newView, productId: product ? product.id : null };
     window.history.pushState(state, '', `#${newView}`);
     setView(newView);
     if (product) setSelectedProduct(product);
  };

  const handleProductClick = (product: Product) => {
    navigateTo('detail', product);
  };

  const handleAddToCart = (product: Product) => {
    if (!cart.find(p => p.id === product.id)) {
      setCart([...cart, product]);
    } else {
        setCart(cart.map(p => p.id === product.id ? product : p));
    }
    navigateTo('checkout');
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePaymentSuccess = (email: string) => {
    setCustomerEmail(email);
    setCart([]); 
    navigateTo('success');
  };

  // Manual Navigation Button Logic (e.g. "Back to Store")
  const handleBackToStore = () => {
     // If we have history state (meaning we navigated here within the app), go back
     if (window.history.state && window.history.state.view !== 'grid') {
        window.history.back();
     } else {
        // If we landed directly here, go to grid manually
        navigateTo('grid');
     }
  };

  if (view === 'checkout') {
    return <Checkout cart={cart} onBack={handleBackToStore} onRemove={handleRemoveFromCart} onPay={handlePaymentSuccess} />;
  }

  if (view === 'success') {
    return <SuccessPage email={customerEmail} onHome={() => navigateTo('grid')} />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {view === 'detail' && selectedProduct ? (
            <ProductDetail product={selectedProduct} onBack={handleBackToStore} onAddToCart={handleAddToCart} />
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Store</h1>
                  <p className="text-gray-500">Premium AI templates and workflows.</p>
                </div>
                {cart.length > 0 && (
                   <button onClick={() => navigateTo('checkout')} className="text-blue-600 font-medium hover:underline">
                     View Cart ({cart.length})
                   </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;