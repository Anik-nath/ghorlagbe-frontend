import { Card, CardContent } from "@/components/ui/card";
import { FaShieldHalved } from "react-icons/fa6";

export interface WarningTip {
  text: string;
}
const WarningCard = ({ tips }: { tips: WarningTip[] }) => (
  <Card className="border-red-400">
    <CardContent className="p-4">
      <div className="flex items-center mb-2">
        <span className="text-[#157347] mr-2 text-2xl">
          <FaShieldHalved />
        </span>
        <h5 className="font-bold text-xl text-gray-800">সতর্ক বাণী</h5>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {tips.map((tip, index) => (
          <li key={index}>{tip.text}</li>
        ))}
      </ul>
      <a href="#" className="text-blue-500 mt-3 inline-block">
        সমস্ত নিরাপত্তা টিপস দেখুন
      </a>
    </CardContent>
  </Card>
);

export default WarningCard;
