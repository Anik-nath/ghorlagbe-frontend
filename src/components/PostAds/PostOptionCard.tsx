import { Card, CardContent } from "@/components/ui/card";
export interface PostOption {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  href: string;
}
const PostOptionCard = ({ option }: { option: PostOption }) => (
  <Card>
    <CardContent className="p-4">
      <div className="flex flex-row items-center gap-2">
        <img
          src={option.image}
          alt={option.title}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md"
        />
        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900">
              {option.title}
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {option.description}
            </p>
          </div>
          <a
            href={option.href}
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 md:px-4 rounded transition-colors duration-200 shadow w-fit  "
          >
            {option.buttonText}
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);
export default PostOptionCard;
