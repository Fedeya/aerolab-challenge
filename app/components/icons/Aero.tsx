const Aero: React.FC<{ brand?: boolean }> = ({ brand }) => {
  if (brand) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
          fill="url(#paint0_linear_7996_2892)"
        />
        <g clipPath="url(#clip0_7996_2892)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9341 7.20227C19.8203 7.00886 19.5682 6.94255 19.3711 7.05427L12.6241 10.8773C12.4706 10.9644 12.3908 11.1382 12.4265 11.3088L14.6971 22.1994C14.7081 22.2519 14.6854 22.3293 14.651 22.3673L14.3752 22.6727C13.8016 23.3076 13.3157 23.6515 12.3922 23.6515C11.3567 23.6515 10.8705 23.1158 10.1007 22.1689C9.18125 21.0382 8.03722 19.631 5.25568 19.631H5.1869C4.80754 19.631 4.5 19.9329 4.5 20.3052C4.5 20.6775 4.80754 20.9794 5.1869 20.9794H5.25568C7.37573 20.9794 8.17768 21.9657 9.02679 23.0099C9.78521 23.9428 10.6448 25 12.3922 25C13.9007 25 14.7308 24.3113 15.4031 23.5673L17.8829 20.8228C17.8829 20.8227 23.7809 14.2947 23.7809 14.2947C23.8985 14.1645 23.9181 13.975 23.8294 13.8241L19.9341 7.20227Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_7996_2892"
            x1="-1.7875"
            y1="-1.36"
            x2="39.9089"
            y2="7.85943"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#176FEB" />
            <stop offset="1" stopColor="#FF80FF" />
          </linearGradient>
          <clipPath id="clip0_7996_2892">
            <rect
              width="19.5"
              height="18"
              fill="white"
              transform="translate(4.5 7)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5Z"
        fill="white"
      />
      <g clipPath="url(#clip0_7996_1206)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9506 5.9017C14.8652 5.75665 14.6761 5.70691 14.5283 5.7907L9.46809 8.65799C9.35293 8.7233 9.29313 8.85368 9.31984 8.9816L11.0228 17.1496C11.0311 17.1889 11.014 17.247 10.9883 17.2755L10.7814 17.5045C10.3512 17.9807 9.9868 18.2386 9.29416 18.2386C8.51751 18.2386 8.15287 17.8369 7.5755 17.1267C6.88593 16.2786 6.02792 15.2233 3.94176 15.2233H3.89018C3.60565 15.2233 3.375 15.4496 3.375 15.7289C3.375 16.0081 3.60565 16.2345 3.89018 16.2345H3.94176C5.5318 16.2345 6.13326 16.9742 6.77009 17.7574C7.33891 18.4571 7.98362 19.25 9.29416 19.25C10.4255 19.25 11.0481 18.7335 11.5523 18.1755L13.4121 16.1171C13.4121 16.117 17.8356 11.2211 17.8356 11.2211C17.9239 11.1234 17.9386 10.9812 17.8721 10.8681L14.9506 5.9017Z"
          fill="url(#paint0_linear_7996_1206)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7996_1206"
          x1="2.56289"
          y1="5.17625"
          x2="21.3667"
          y2="9.65375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#176FEB" />
          <stop offset="1" stopColor="#FF80FF" />
        </linearGradient>
        <clipPath id="clip0_7996_1206">
          <rect
            width="14.625"
            height="13.5"
            fill="white"
            transform="translate(3.375 5.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Aero;
