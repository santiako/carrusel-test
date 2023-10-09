import React from 'react';
import cn from 'classnames';

const Button = ({ right, onClick }) => (
  <div
    className="p-3 rounded-[30px] border-2 border-white justify-start items-start gap-2.5 flex"
    onClick={onClick}
  >
    <img
      alt='arrow'
      className={cn(
        'w-6 h-6 relative',
        {
          'rotate-180': right,
        }
      )}
      src='assets/button-arrow.svg'
    />
  </div>
);

export default Button;
