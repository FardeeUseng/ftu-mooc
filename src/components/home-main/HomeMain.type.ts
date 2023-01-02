export interface RecommandedCoursesCardProps {
  data: {
    name: string;
    description: string;
    category: {
      name: string;
      image: string;
    };
    course_image: string;
  };
}