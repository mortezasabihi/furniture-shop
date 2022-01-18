import type { FC } from "react";
import Image from "next/image";

interface IProps {
  padding: number;
}

const ProductDetailsRight: FC<IProps> = ({ padding }) => {
  return (
    <div
      style={{ paddingRight: `${padding}px` }}
      className="bg-white w-5/12 flex pl-[122px]"
    >
      <div className="flex-grow pt-[83px] pb-[204px]">
        <div className="mb-[84px]">
          <h3 className="text-lg mb-[41px]">Intro</h3>
          <p className="text-neutral-700 font-light">
            Simple, timeless design that’s still going strong after 40 years in
            our stores. It’s loved by all ages so we made a grown-up size and a
            children’s size.
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <h3 className="text-lg mb-[41px]">Product Information</h3>
            <ul>
              <li className="pb-6 mb-6 border-b border-neutral-700 flex items-center">
                <strong className="w-[138px] font-bold text-neutral-700">
                  Dimensions
                </strong>
                <p className="font-light text-neutral-700 leading-6 w-[calc(100%-138px)]">
                  52 x 50 x 88 cm.
                </p>
              </li>
              <li className="pb-6 mb-6 border-b border-neutral-700 flex items-center">
                <strong className="w-[138px] font-bold text-neutral-700">
                  Materials
                </strong>
                <p className="font-light text-neutral-700 leading-6 w-[calc(100%-138px)]">
                  Polypropylene plastic <br />
                  Aluminium <br />
                  Solid birch
                </p>
              </li>
              <li className="pb-6 mb-6 border-b border-neutral-700 flex items-center">
                <strong className="w-[138px] font-bold text-neutral-700">
                  Good to know
                </strong>
                <p className="font-light text-neutral-700 leading-6 w-[calc(100%-138px)]">
                  Wipe clean with a cloth dampened in a mild cleaner.
                </p>
              </li>
            </ul>

            <div className="relative w-full h-[120px] rounded-sm">
              <Image src="/image-lookbook.png" alt="Lookbook" layout="fill" />
            </div>
          </div>

          <div className="w-[122px] flex flex-col justify-end items-end">
            <ul>
              <li className="mb-4">
                <svg
                  id="facebook_black.1"
                  data-name="facebook black.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <g id="Black">
                    <path
                      id="Facebook"
                      d="M211.751,182H201.214A1.214,1.214,0,0,1,200,180.786V161.214A1.214,1.214,0,0,1,201.214,160h19.572A1.214,1.214,0,0,1,222,161.214v19.571A1.214,1.214,0,0,1,220.786,182H215.18v-8.52h2.86l.428-3.32H215.18v-2.12c0-.961.267-1.616,1.645-1.616h1.758v-2.97a23.507,23.507,0,0,0-2.562-.131,4,4,0,0,0-4.27,4.389v2.449h-2.867v3.32h2.867V182Z"
                      transform="translate(-200 -160)"
                      fillRule="evenodd"
                      opacity="0.8"
                    />
                  </g>
                </svg>
              </li>
              <li className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18.333"
                  viewBox="0 0 22 18.333"
                >
                  <g
                    id="twitter_black.1"
                    data-name="twitter black.1"
                    opacity="0.8"
                  >
                    <g id="Black">
                      <path
                        id="Twitter"
                        d="M322,166.17a8.816,8.816,0,0,1-2.592.728,4.618,4.618,0,0,0,1.985-2.56,8.889,8.889,0,0,1-2.868,1.122A4.451,4.451,0,0,0,315.231,164a4.572,4.572,0,0,0-4.512,4.628,4.722,4.722,0,0,0,.116,1.054,12.707,12.707,0,0,1-9.3-4.837,4.712,4.712,0,0,0-.611,2.329,4.659,4.659,0,0,0,2.008,3.852,4.432,4.432,0,0,1-2.045-.577v.057a4.6,4.6,0,0,0,3.622,4.538,4.3,4.3,0,0,1-1.189.163,4.384,4.384,0,0,1-.85-.082,4.531,4.531,0,0,0,4.216,3.212,8.912,8.912,0,0,1-5.606,1.982,9.033,9.033,0,0,1-1.077-.064,12.567,12.567,0,0,0,6.919,2.078c8.3,0,12.842-7.051,12.842-13.168,0-.2,0-.4-.012-.6a9.263,9.263,0,0,0,2.251-2.4"
                        transform="translate(-300 -164)"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <g
                    id="pinterest_black.1"
                    data-name="pinterest black.1"
                    opacity="0.8"
                  >
                    <g id="Black">
                      <path
                        id="Pinterest"
                        d="M311,260a11,11,0,0,0-4.415,21.075,9.734,9.734,0,0,1,.19-2.526c.212-.893,1.415-5.993,1.415-5.993a4.236,4.236,0,0,1-.351-1.741c0-1.63.946-2.847,2.122-2.847a1.474,1.474,0,0,1,1.484,1.652,23.693,23.693,0,0,1-.971,3.9,1.7,1.7,0,0,0,1.736,2.119c2.084,0,3.487-2.676,3.487-5.848,0-2.41-1.623-4.214-4.577-4.214a5.208,5.208,0,0,0-5.415,5.266A3.173,3.173,0,0,0,306.43,273a.534.534,0,0,1,.158.614c-.052.2-.173.689-.224.882a.379.379,0,0,1-.55.276c-1.538-.627-2.253-2.31-2.253-4.2,0-3.124,2.635-6.873,7.861-6.873,4.2,0,6.965,3.041,6.965,6.3,0,4.315-2.4,7.539-5.936,7.539a3.157,3.157,0,0,1-2.687-1.37s-.639,2.534-.774,3.023a9.175,9.175,0,0,1-1.107,2.356A11,11,0,1,0,311,260"
                        transform="translate(-300 -260)"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsRight;
