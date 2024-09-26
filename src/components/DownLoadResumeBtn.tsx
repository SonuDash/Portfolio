import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import HackerBtn from './HackerBtn';

function DownLoadResumeBtn() {
  const resumeLink = "https://drive.google.com/file/d/1qMOk5kv491F6A9QxXKNXKTTcrgdaWbki/view?usp=sharing"; //drive link for resume

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href={resumeLink} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
        <Download className="mx-1" />
        Download Resume
      </Link>
      {/* <HackerBtn label='Download Resume' /> */}
    </div>
  );
}

export default DownLoadResumeBtn;
