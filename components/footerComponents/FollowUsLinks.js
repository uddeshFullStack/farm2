import Link from 'next/link';

const FollowUsLinks = () => {
  return (
    <div className="mt-4">
      <h2 className="m-0 text-inherit font-semibold font-inherit mq450:text-3xl">
        Follow us:
      </h2>
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <Link href="https://www.linkedin.com" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt="LinkedIn"
                src="/group-1-2.svg"
              />
            </a>
          </Link>
          <Link href="https://www.facebook.com" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt="Facebook"
                src="/vector-70.svg"
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt="YouTube"
                src="/group-2.svg"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt="Instagram"
                src="/vector-6.svg"
              />
            </a>
          </Link>
          <Link href="https://www.twitter.com" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt="X (Twitter)"
                src="/group-2-2.svg"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUsLinks;
