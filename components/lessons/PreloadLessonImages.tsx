interface Section {
  images?: string[];
}

interface PreloadLessonImagesProps {
  sections: Section[];
}

export function PreloadLessonImages({ sections }: PreloadLessonImagesProps) {
  // Preload the images by creating Image objects for each URL
  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((url) => {
      if (url) {
        // Check that the URL is not an empty string or undefined
        const img = new Image();
        img.src = url; // Preloads the image
      }
    });
  };

  // Accumulate all the image URLs from each section
  const allImageUrls = sections.reduce<string[]>((acc, section) => {
    if (section.images && section.images.length > 0) {
      return [...acc, ...section.images.filter((url) => url)]; // Filter out empty or undefined values
    }
    return acc;
  }, []);

  preloadImages(allImageUrls); // Preload the images immediately
}
