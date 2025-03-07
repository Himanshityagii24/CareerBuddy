'use client';

import Image from 'next/image';
import Link from 'next/link'; // Add this import for Link component

const Waytosuccess = () => {
  return (
    <div className="flex bg-white py-16 relative group overflow-hidden min-h-[300px] mb-0">
      {/* Left Div */}
      <div className="w-2/4 h-64 flex items-center justify-center p-4 rounded-lg shadow-md">
        <Image src="/assets/panda-bear.png" alt="Success" width={400} height={300} className="object-contain" />
      </div>

    
    </div>
  );
};

export default Waytosuccess;
