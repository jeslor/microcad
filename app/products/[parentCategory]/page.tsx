"use client"

import {usePathname, useParams} from 'next/navigation';

const page = () => {
    let { parentCategory } = useParams();

  return (
    <div>
        <h1>
            {parentCategory}
        </h1>
    </div>
  )
}

export default page