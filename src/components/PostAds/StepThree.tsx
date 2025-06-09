import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const StepThree = ({
  formData,
  handleInputChange,
  handleFileChange,
  handlePrevStep,
}) => {
  return (
    <div className="space-y-6">
      <h5 className="text-xl font-semibold text-gray-700">অনন্যা বিবরণ</h5>
      <div>
        <Label htmlFor="description" className="text-md text-gray-700">
          বাসা সম্পর্কে
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="আপনার বাসার অনন্যা সুবিধা সম্পর্কে লিখুন"
          className="text-md"
          rows={5}
          required
        />
      </div>

      <div>
        <Label htmlFor="images" className="text-md text-gray-700">
          ছবি যুক্ত করুন *
        </Label>
        <Input
          id="images"
          name="images"
          type="file"
          onChange={handleFileChange}
          multiple
          required
          className="text-lg" 
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-400/90 md:text-lg text-md text-gray-800"
          variant="outline"
          onClick={handlePrevStep}
        >
          পূর্ববর্তী ধাপ
        </Button>
        <Button
          type="submit"
          className="bg-[#198754] hover:bg-[#157347] md:px-8 md:text-lg text-md"
        >
          পোস্টটি সাবমিট করুন
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
