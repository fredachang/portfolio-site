export interface Project {
  id: string;
  year: string;
  title: string;
  type: string;
  description: string;
  indexImage: IndexImage;
  images: Image[];
}

export interface IndexImage {
  imageId: string;
  imagePath: string;
}

export interface Image {
  imageId: string;
  imagePath: string;
  imageText: string;
}
