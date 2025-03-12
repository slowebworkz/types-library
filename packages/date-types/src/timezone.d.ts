// src/timezone.d.ts

const WORLD_TIME_ZONES = [
  "UTC",              // Standard UTC
  "GMT",              // Greenwich Mean Time
  "America/New_York", // IANA Time Zones
  "America/Los_Angeles",
  "Europe/London",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Africa/Nairobi",
  "Europe/Berlin",
  "Pacific/Auckland",
  "Europe/Moscow",
  "Asia/Shanghai",
  "America/Chicago",
  "America/Denver",
  "Asia/Dubai",
  "Europe/Paris",
  "Asia/Kolkata",
  "Pacific/Honolulu",
  "Europe/Rome",
  "Africa/Johannesburg",
  "Australia/Brisbane",
  "Australia/Perth",
  "Europe/Amsterdam",
  "America/Sao_Paulo",
  "Asia/Singapore",
  "Pacific/Guam",
  "America/Argentina/Buenos_Aires",
  "Asia/Kuala_Lumpur",
  "America/Edmonton",
  "Asia/Seoul",

  "EST",              // Short Time Zone Abbreviations
  "PST",
  "CST",
  "JST",
  "GMT",
  "UTC",
  "BST",
  "CEST",
  "AEDT",
  "NZDT",

  "Local",            // Relative Time Zone Labels
  "ServerTime",
  "GameTime",
  "Game/ServerTime",
  "MUSH/GameTimezone"
] as const;

export type WorldTimezone =
  | (typeof WORLD_TIME_ZONES)[number]
  | `UTC${"-"}${number}`
  | `UTC+${number}` 
  | `UTC-${number}`;

