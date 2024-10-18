import Link from 'next/link';

const DirectLinks = () => {
  return (
    <div className="flex flex-col items-start justify-start py-0 pl-0 gap-[10px]">
      <div className="relative font-semibold inline-block min-w-[115px] md:text-base">
        Direct Links
      </div>

      <div className="grid grid-cols-2 gap-y-[8.5px] text-base text-white md:grid-cols-1">
        <Link href="/" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Home</li>
          </ul>
        </Link>

        <Link href="/listed-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Book Farm</li>
          </ul>
        </Link>

        <Link href="/listed-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Listed Farm</li>
          </ul>
        </Link>

        <Link href="/register-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[170px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Registered Farm</li>
          </ul>
        </Link>

        <Link href="/events" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Events</li>
          </ul>
        </Link>

        <Link href="/contact-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Contact Us</li>
          </ul>
        </Link>

        <Link href="/about-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>About Us</li>
          </ul>
        </Link>

        <Link href="/gallery" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Gallery</li>
          </ul>
        </Link>

        <Link href="/award" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Award</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default DirectLinks;
