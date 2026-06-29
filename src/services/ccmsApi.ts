export const HVAC_MODE: Record<number, string> = {
  0: "No Mode",
  1: "Off Mode",
  2: "Manual",
  3: "Internal Smoke",
  4: "Emergency Ventilation",
  5: "External Smoke",
  6: "Restricted Power",
  7: "Pre Cooling",
  8: "Pre Heating",
  9: "Auto",
  10: "Not Ready",
  11: "Adjacent Internal Smoke",
  12: "Forced Ventilation",
  13: "Vent On",
  255: "Invalid"
};

export const ON_OFF = (v: number): string =>
  v === 1 ? "ON" : "OFF";

export const OPEN_CLOSE = (v: number): string =>
  v === 1 ? "Open" : "Close";

export const ACTIVE = (v: number): string =>
  v === 1 ? "Active" : "Inactive";

export const HEALTH = (v: number): string =>
  v === 0 ? "Healthy" : "Fault";

export const OK_NOK = (v: number): string =>
  v === 1 ? "OK" : "NOK";

export async function fetchCCMSData(): Promise<any> {
  const response = await fetch("/api/ccms.json");

  if (!response.ok) {
    throw new Error(`Failed to fetch CCMS data: ${response.status}`);
  }

  return response.json();
}