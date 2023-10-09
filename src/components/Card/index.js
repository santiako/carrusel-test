import React from 'react';
import cn from 'classnames';

const Card = ({ description, image, link, odd, title }) => (
  <div className={odd && 'mt-8'}>
    <div className={cn(
      'bg-white rounded-2xl shadow flex-col justify-center items-start flex lg:inline-flex',
      {
        'justify-start gap-2.5 flex': odd
      }
    )}>
      <img alt="images" className="self-stretch h-[152px] rounded-tl-2xl rounded-tr-2xl object-cover" src={image} />
      <div className="self-stretch h-[308px] px-4 pt-8 pb-4 flex-col justify-start items-end gap-8 flex">
        <div className="self-stretch justify-end items-start gap-2 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[260px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-900 text-2xl font-normal font-AvenirNext leading-7">{title}</div>
              <div className="self-stretch text-stone-500 text-lg font-normal font-AvenirNext leading-7">{description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-4 pb-8 lg:mt-5 justify-start items-center gap-[53px] inline-flex">
        <div className="justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <a
                className="inline-flex items-center text-sky-600 text-lg font-normal font-AvenirNext underline leading-7"
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                Learn more
                <img alt="arrow" className="w-4 h-4 ml-1" src='assets/link-arrow.svg' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
