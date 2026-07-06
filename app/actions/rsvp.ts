"use server";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type RsvpState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type RsvpEntry = {
  submittedAt: string;
  name: string;
  side: string;
  guests: number;
  attending: string;
};

async function saveToLocalJson(entry: RsvpEntry) {
  const file = path.join(process.cwd(), "data", "rsvp.json");
  await mkdir(path.dirname(file), { recursive: true });

  let entries: RsvpEntry[] = [];
  try {
    entries = JSON.parse(await readFile(file, "utf8"));
  } catch {
    // first submission — file doesn't exist yet
  }

  entries.push(entry);
  await writeFile(file, JSON.stringify(entries, null, 2));
}

export async function submitRsvp(
  _prev: RsvpState,
  formData: FormData,
): Promise<RsvpState> {
  const name = String(formData.get("name") ?? "").trim();
  const side = String(formData.get("side") ?? "");
  const guests = Number(formData.get("guests") ?? 1);
  const attending = String(formData.get("attending") ?? "");

  if (!name) {
    return { status: "error", message: "Խնդրում ենք նշել Ձեր անունը։" };
  }

  const entry: RsvpEntry = {
    submittedAt: new Date().toISOString(),
    name,
    side,
    guests: Number.isFinite(guests) ? Math.min(Math.max(guests, 0), 9) : 1,
    attending,
  };

  try {
    const webhook = process.env.RSVP_WEBHOOK_URL;

    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!res.ok) {
        throw new Error(`Webhook responded with ${res.status}`);
      }
    } else {
      await saveToLocalJson(entry);
    }

    return { status: "success" };
  } catch (error) {
    console.error("RSVP submission failed:", error);
    return {
      status: "error",
      message: "Չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին։",
    };
  }
}
