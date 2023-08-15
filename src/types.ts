export interface Project {
  id: string;
  year: string;
  title: string;
  type: string;
  description: string;
  indexImage: Image;
  images: Image[];
  imageTexts: string[];
}

export interface Image {
  imageId: string;
  imagePath: string;
}
