import { useAuth } from "@/contexts/AuthContext";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const CallButton = () => {
  const { isAuthenticated } = useAuth();
  // Bengali digits for 01711111111
  const displayedNumber = "০১৭১১১১১১১১";
  const actualNumber = "01711111111";
  const hidenumber = "০১৭xxxxxxxx";

  if (isAuthenticated) {
    return (
      <a
        href={`tel:${actualNumber}`}
        className="w-full bg-[#157347] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
      >
        <FaPhoneAlt size={18} className="text-white" />
        {displayedNumber}
      </a>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="w-full bg-[#157347] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
          type="button"
        >
          <FaPhoneAlt size={18} className="text-white" />
          {hidenumber}
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-lg">মেসেজ পাঠাতে লগইন করুন</p>
          <Button asChild className="bg-[#157347] hover:bg-green-700">
            <a href="/login">লগইন করুন</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallButton;
