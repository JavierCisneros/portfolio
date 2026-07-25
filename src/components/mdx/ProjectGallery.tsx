import type { ProjectImage } from "@/content/types";
import ImageGallery from "@/components/ImageGallery";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="my-10">
      <ImageGallery images={images} />
    </div>
  );
}
