import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white h-[100px] flex border-b-2 border-[#F0F0F0]">
      <div className="container flex justify-between items-center flex-grow">
        <Link href="/" passHref>
          <h1 className="text-2xl font-medium">The Furnish</h1>
        </Link>

        <div className="flex items-center">
          <nav>
            <ul className="flex items-center">
              <li className="mr-[30px] text-[#707070] font-light">Shop</li>
              <li className="font-bold">Collection</li>
            </ul>
          </nav>

          <button type="button" className="ml-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.006"
              height="28"
              viewBox="0 0 25.006 28"
            >
              <g id="icon-bag" transform="translate(-10.509 -5.5)">
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(11.012 6)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M23.016,958.362a5.615,5.615,0,0,0-5.463,5.762v.575h-1.51a3.605,3.605,0,0,0-3.463,3.25l-1.549,14.066a2.906,2.906,0,0,0,2.828,3.346h18.3a2.906,2.906,0,0,0,2.828-3.346L33.443,967.95a3.613,3.613,0,0,0-3.472-3.25h-1.5v-.575A5.607,5.607,0,0,0,23.016,958.362Zm0,.8a4.8,4.8,0,0,1,4.655,4.967v.575h-9.32v-.575A4.806,4.806,0,0,1,23.016,959.158ZM16.043,965.5h1.51v2.4a1.23,1.23,0,0,0-.769,1.151,1.165,1.165,0,1,0,2.328,0,1.235,1.235,0,0,0-.76-1.151v-2.4h9.32v2.4a1.235,1.235,0,0,0-.76,1.151,1.165,1.165,0,1,0,2.328,0,1.23,1.23,0,0,0-.769-1.151v-2.4h1.5a2.855,2.855,0,0,1,2.683,2.541L34.2,982.1a2.066,2.066,0,0,1-2.039,2.464H13.86a2.066,2.066,0,0,1-2.039-2.464l1.558-14.066A2.835,2.835,0,0,1,16.043,965.5Z"
                    transform="translate(-11.012 -958.362)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </g>
              </g>
            </svg>

            <span className="sr-only">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
