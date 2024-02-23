import { Datetime } from "aws-sdk/clients/costoptimizationhub";

export interface User {
  id: string;
  access_code: string;
}

export interface Inspection {
  id: string;
  user_id: string;
  name: string;
  responsible: string;
  type: Type;
  recording_url?: string | null;
  participants?: string | null;
  responsible_email: string;
  status: Status;
  created_at: Datetime;
  updated_at: Datetime;
}

export interface Template {
  id: string;
  inspection_id: string;
  name: string;
  description: string;
}
export interface Item {
  item_index: int;
  description: string;
  situation: string | null;
  observations: string;
  category?: string | null;
  trail? : Trail;
}

export interface Trail {
  id: string;
  item_id: string;
  page_number?: int | null;
  text: string;
}

export type DocumentItems = {
  fileName: string;
  fileUrl: string;
  fileType: string;
};
