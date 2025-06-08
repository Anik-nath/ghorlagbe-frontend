import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
const StepTwo = ({
  formData,
  setFormData,
  handleInputChange,
  handleRadioChange,
  handleNextStep,
  handlePrevStep,
  handleCheckboxChange,
  handleFileChange,
  getRentToOptions,
}) => {
  return (
    <div className="space-y-6">
      <h5 className="text-lg font-medium text-gray-800">ব্যক্তিগত তথ্য</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name">নাম *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="uphone">মোবাইল নম্বর * (In English)</Label>
          <Input
            id="uphone"
            name="uphone"
            type="tel"
            value={formData.uphone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">ইমেইল এড্রেস</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ইমেইল এড্রেস লিখুন"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="postasother"
          name="postasother"
          checked={formData.postasother}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({
              ...prev,
              postasother: Boolean(checked),
            }))
          }
        />
        <Label htmlFor="postasother">আমি অন্যের হয়ে পোস্টটি করছি</Label>
      </div>

      <hr className="my-4" />

      <h5 className="text-lg font-medium text-gray-800">
        ভাড়া সংক্রান্ত তথ্য
      </h5>
      <div>
        <Label htmlFor="location">বাসার ঠিকানা *</Label>
        <Textarea
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="বাসার ঠিকানা লিখুন"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="district">শহর সিলেক্ট করুন *</Label>
          <Select
            name="district"
            value={formData.district}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                district: value,
              }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="শহর" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="13">কক্সবাজার(Cox's Bazar)</SelectItem>
              <SelectItem value="29">কিশোরগঞ্জ(kishoreganj)</SelectItem>
              <SelectItem value="12">কুমিল্লা(Cumilla)</SelectItem>
              {/* Add other district options */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="area">এলাকা সিলেক্ট করুন *</Label>
          <Select
            name="area"
            value={formData.area}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                area: value,
              }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="এলাকা" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1113">আনোয়ারা(Anwara)</SelectItem>
              <SelectItem value="1145">বন্দর(Bandor)</SelectItem>
              <SelectItem value="1148">বাঁশখালী(Banshkhali)</SelectItem>
              {/* Add other area options */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-lg font-medium text-gray-800">বাসার বিবরন</h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="bedrooms">বেড রুমের সংখ্যা *</Label>
          <Select
            name="bedrooms"
            value={formData.bedrooms}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                bedrooms: value,
              }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="bathrooms">ওযাস রুমের সংখ্যা *</Label>
          <Select
            name="bathrooms"
            value={formData.bathrooms}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                bathrooms: value,
              }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="balconies">বারিন্দা সংখ্যা *</Label>
          <Select
            name="balconies"
            value={formData.balconies}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                balconies: value,
              }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="floor">ফ্লাটটি কত তলাতে অবস্থিত</Label>
          <Select
            name="floor"
            value={formData.floor}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                floor: value,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-lg font-medium text-gray-800">
        অন্যান্য সুবিধা সমুহ
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label>লিফট সুবিধা *</Label>
          <RadioGroup
            defaultValue="no"
            value={formData.lift}
            onValueChange={(value) => handleRadioChange("lift", value)}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="lift-yes" />
              <Label htmlFor="lift-yes">আছে</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="lift-no" />
              <Label htmlFor="lift-no">নাই</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label>জেনেরেটর সুবিধা *</Label>
          <RadioGroup
            defaultValue="no"
            value={formData.generator}
            onValueChange={(value) => handleRadioChange("generator", value)}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="generator-yes" />
              <Label htmlFor="generator-yes">আছে</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="generator-no" />
              <Label htmlFor="generator-no">নাই</Label>
            </div>
          </RadioGroup>
        </div>
        {/* Add other amenities similarly */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>গ্যাস সুবিধা *</Label>
          <RadioGroup
            defaultValue="no"
            value={formData.gas}
            onValueChange={(value) => handleRadioChange("gas", value)}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="line" id="gas-yes" />
              <Label htmlFor="gas-yes">লাইন</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cylinder" id="gas-s" />
              <Label htmlFor="gas-s">সিলিন্ডার</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="gas-no" />
              <Label htmlFor="gas-no">নাই</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="text-lg font-medium text-gray-800">ভাড়ার বিবরণ</h5>
      <div>
        <Label htmlFor="rent_amount">ভাড়ার পরিমান *</Label>
        <div className="flex">
          <Input
            id="rent_amount"
            name="rent_amount"
            type="number"
            value={formData.rent_amount}
            onChange={handleInputChange}
            className="rounded-r-none"
            required
          />
          <RadioGroup
            defaultValue="month"
            value={formData.rent_type}
            onValueChange={(value) => handleRadioChange("rent_type", value)}
            className="flex"
          >
            <div className="flex items-center space-x-2 border border-l-0 px-2">
              <RadioGroupItem value="daily" id="vara-daily" />
              <Label htmlFor="vara-daily">দিনে</Label>
            </div>
            <div className="flex items-center space-x-2 border border-l-0 px-2">
              <RadioGroupItem value="week" id="vara-week" />
              <Label htmlFor="vara-week">সপ্তাহে</Label>
            </div>
            <div className="flex items-center space-x-2 border border-l-0 px-2">
              <RadioGroupItem value="month" id="vara-month" />
              <Label htmlFor="vara-month">মাসে</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="rent_negotiable"
            name="rent_negotiable"
            checked={formData.rent_negotiable}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                rent_negotiable: Boolean(checked),
              }))
            }
          />
          <Label htmlFor="rent_negotiable">
            ভাড়ার পরিমান আলোচনার সাপেক্ষে নির্ধারন করা হবে
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div>
          <Label htmlFor="electric_bill">বিদ্যুৎ বিল</Label>
          <Input
            id="electric_bill"
            name="electric_bill"
            type="number"
            value={formData.electric_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
          />
        </div>
        <div>
          <Label htmlFor="gas_bill">গ্যাস বিল</Label>
          <Input
            id="gas_bill"
            name="gas_bill"
            type="number"
            value={formData.gas_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
          />
        </div>
        <div>
          <Label htmlFor="water_bill">পানির বিল</Label>
          <Input
            id="water_bill"
            name="water_bill"
            type="number"
            value={formData.water_bill}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
          />
        </div>
        <div>
          <Label htmlFor="service_charge">সার্ভিস চার্জ</Label>
          <Input
            id="service_charge"
            name="service_charge"
            type="number"
            value={formData.service_charge}
            onChange={handleInputChange}
            placeholder="টাকার পরিমাণ"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label htmlFor="available_from">কোন তারিখ থেকে ভাড়া হবে *</Label>
          <Input
            id="available_from"
            name="available_from"
            type="date"
            value={formData.available_from}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="ad_expiry">
            কোন তারিখ পর্যন্ত বিজ্ঞাপনটি সাইটে থাকবে *
          </Label>
          <Input
            id="ad_expiry"
            name="ad_expiry"
            type="date"
            value={formData.ad_expiry}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={handlePrevStep}>
          পূর্ববর্তী ধাপ
        </Button>
        <Button
          type="button"
          onClick={handleNextStep}
          className="bg-green-600 hover:bg-green-700 px-6"
        >
          পরের ধাপ
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
