import Mission from "@/components/About/Misson";
import HelpSection, { HelpLink } from "@/components/PostAds/HelpSection";
import PostOptionCard, {
  PostOption,
} from "@/components/PostAds/PostOptionCard";
import WarningCard, { WarningTip } from "@/components/PostAds/WarningCard";
import SearchForm from "@/components/Search/SearchForm";

export default function HomePage() {
  // Post options data
  const postOptions: PostOption[] = [
    {
      title: "বাড়িওয়ালা",
      description: "আমি বাসা ভাড়া দিতে চাই",
      image: "/assets/room.jpg",
      buttonText: "ফ্রি বিজ্ঞাপন পোস্ট করুন",
      href: "/post-rent",
    },
    {
      title: "ভাড়াটিয়া",
      description: "আমি একটি রুম/বাসা খুঁজছি",
      image: "/assets/room-wanted.jpg",
      buttonText: "ফ্রি বিজ্ঞাপন পোস্ট করুন",
      href: "/post-rent",
    },
  ];

  // Help links data
  const helpLinks: HelpLink[] = [
    { text: "ঘর লাগবে কিভাবে কাজ করে?", href: "#" },
    { text: "আমি কিভাবে উপযুক্ত ভাড়া বাড়ি খুঁজে পাব?", href: "#" },
    { text: "কিভাবে ভাড়া রুম খুঁজে পেতে?", href: "#" },
  ];

  // Warning tips data
  const warningTips: WarningTip[] = [
    { text: "অপরিচিত জায়গায় একা যাবেন না" },
    { text: "তৃতীয় পক্ষকে সম্পূর্ণ অর্থ প্রদান করবেন না" },
  ];

  return (
    <div className="min-h-screen">
      <div className="my-12 max-w-6xl mx-auto md:px-4 px-7">
        {/* Search */}
        <section className="max-w-6xl mb-6">
          <SearchForm setSearchType={() => {}} />
        </section>

        {/* Post Options */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="md:text-3xl text-2xl font-medium mb-8 text-gray-800">
                বিনামূল্যে বিজ্ঞাপন পোস্ট করুন
              </h2>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                আপনি কি বিজ্ঞাপন দিতে চান?
              </h3>

              <div className="space-y-4">
                {postOptions.map((option, index) => (
                  <PostOptionCard key={index} option={option} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <HelpSection links={helpLinks} />
              <WarningCard tips={warningTips} />
            </div>
          </div>
        </section>
      </div>

      {/* Mission */}
      <Mission />
    </div>
  );
}
