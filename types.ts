
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
