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
      <h5 className="text-lg font-medium text-gray-800">অনন্যা বিবরণ</h5>
      <div>
        <Label htmlFor="description">বাসা সম্পর্কে*</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="আপনার বাসার অনন্যা সুবিধা সম্পর্কে লিখুন"
          rows={5}
          required
        />
      </div>

      <div>
        <Label htmlFor="images">ছবি যুক্ত করুন *</Label>
        <Input
          id="images"
          name="images"
          type="file"
          onChange={handleFileChange}
          multiple
          required
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={handlePrevStep}>
          পূর্ববর্তী ধাপ
        </Button>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 px-6">
          পোস্টটি সাবমিট করুন
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
