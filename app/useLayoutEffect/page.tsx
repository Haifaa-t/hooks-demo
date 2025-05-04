'use client';

import { useLayoutEffect, useRef, useState } from 'react';

export default function AyahDisplay() {
  const ayahRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);

  useLayoutEffect(() => {
    if (ayahRef.current && ayahRef.current.clientHeight > 100) {
      setShowMore(true);
    }
  }, []);

  return (
    <div className="p-4">
      <div ref={ayahRef} className="overflow-hidden max-h-24">
       
        <p>
          الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض...
        </p>
      </div>
      {showMore && (
        <button className="mt-2 text-blue-500">عرض المزيد</button>
      )}
    </div>
  );
}
