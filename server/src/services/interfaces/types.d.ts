import { USER_STORY, PRIVACY_REQUIREMENT } from "../../constants/constants";

export interface InspectionsResult {
  id: string;
  name: string;
  createdAt: string;
  type: Type;
  status: Status;
  trail?: TrailResult[] | null;
}

export interface ItemsResult {
  itemIndex: string;
  situation: string | null;
  category?: string;
  description: string;
  observations: string | null;
}

export interface TrailResult {
  id: string;
  text: string;
  pageNumber?: string | null;
}

export interface DocumentResult {
  id: string;
  name: string;
  url: string;
  type: string;
}

export interface InspectionAttributesResult {
  name: string;
  responsible: string;
  type: Type;
  recordingUrl?: string | null;
  participants?: string | null;
  responsibleEmail: string;
  status: Status;
  updatedAt: Datetime;
  documents?: DocumentResult[] | null;
}

export type InspectionType = typeof USER_STORY | typeof PRIVACY_REQUIREMENT;

export interface PositionRect {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  width: string;
  height: string;
  pageNumber: number;
}

export interface Position {
  boundingRect: PositionRect;
  rects: PositionRect[];
  pageNumber: number;
}

export interface Comment {
  text: string;
  emoji: string;
}

export interface Content {
  text: string;
}

export interface TrailData {
  id: string;
  content: Content;
  comment: Comment;
  position: Position;
}