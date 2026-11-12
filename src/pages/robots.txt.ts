import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}

Host: ${SITE.website.replace(/\/$/, "")}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });