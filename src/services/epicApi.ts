import { EpicItem } from "../types/epic";

const API_BASE = "https://epic.gsfc.nasa.gov/api";

export async function getLatestNatural(): Promise<EpicItem[]> {
  const res = await fetch(`${API_BASE}/natural`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function buildImageUrl(photo: EpicItem): string {
  const dateObj = new Date(photo.date);
  const year = dateObj.getUTCFullYear();
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  return "https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${photo.image}.jpg";
}