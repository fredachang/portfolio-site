export interface Project {
  id: string;
  year: string;
  title: string;
  type: string;
  description: string;
  images: Image[];
}

export interface Image {
  imageId: string;
  imagePath: string;
}
