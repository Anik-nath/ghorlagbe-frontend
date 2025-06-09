export interface HelpLink {
  text: string;
  href: string;
}

const HelpSection = ({ links }: { links: HelpLink[] }) => (
  <div className="mb-14">
    <h4 className="font-semibold mb-3 text-xl text-gray-800">সাহায্য বিষয়</h4>
    <div className="space-y-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block text-blue-500 border-b py-1 text-lg"
        >
          {link.text}
        </a>
      ))}
    </div>
  </div>
);
export default HelpSection;
