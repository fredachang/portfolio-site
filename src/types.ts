export interface Project {
  id: string;
  year: string;
  title: string;
  type: string;
  description: string;
  indexImage: string;
  images: Image[];
}

export interface Image {
  imagePath: string;
  imageText: string;
}
