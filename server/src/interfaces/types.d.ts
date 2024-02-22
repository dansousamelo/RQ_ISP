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
}
export type DocumentItems = {
  fileName: string;
  fileUrl: string;
  fileType: string;
};

