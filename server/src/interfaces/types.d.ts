export interface User {
  id: string;
  accessCode: string;
}

export interface Inspection {
  id: string;
  userId: string;
  name: string;
  responsible: string;
  type: Type;
  recordingUrl?: string | null;
  participants?: string | null;
  responsibleEmail: string;
  status: Status;
  createdAt: Datetime;
  updatedAt: Datetime;
  documents?: Document[];
  item?: Item[];
}
export interface Document {
  id: string;
  inspectionId: string;
  name: string;
  type: string;
  url: string;
  createdAt: Datetime;
  updatedAt: Datetime;
}
export interface Item {
  itemIndex: string;
  description: string;
  situation: string | null;
  observations: string;
  category?: string | null;
  trail?: Trail;
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
