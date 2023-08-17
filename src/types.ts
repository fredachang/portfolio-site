export interface Project {
  id: string;
  year: string;
  title: string;
  type: string;
  description: string;
  indexImage: string;
  images: Image[];
  links: Link[];
}

export interface Image {
  imagePath: string;
  imageText: string;
}

export interface Link {
  text: string;
  path: string;
}
