import { USER_STORY, PRIVACY_REQUIREMENT } from "../../constants/constants";

export interface InspectionsResult {
  id: string;
  name: string;
  created_at: string;
  type: Type;
  status: Status;
}

export interface ItemsResult {
  item_index: string;
  situation: string | null;
  category?: string;
  description: string;
  observations: string | null;
  trail?: TrailResult[] | null;
}

export interface TrailResult {
  traild_id: string;
  text: string;
  page_number?: string | null;
}

export interface DocumentResult {
  name: string;
  url: string;
  type: string;
}

export interface InspectionAttributesResult {
  name: string;
  responsible: string;
  type: Type;
  recording_url?: string | null;
  participants?: string | null;
  responsible_email: string;
  status: Status;
  updated_at: Datetime;
  documents?: DocumentResult[] | null;
}

export type InspectionType = typeof USER_STORY | typeof PRIVACY_REQUIREMENT;
