import { useEffect, useRef, useState } from 'react';

export default function EventPhotoGallery({ photos }) {
  const groups = [...new Set(photos.map((photo) => photo.group))];
  const [filter, setFilter] = useState('All photographs');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const current = selected === null ? null : photos[selected];
  const visibleIndices = photos.flatMap((photo, index) => filter === 'All photographs' || photo.group === filter ? [index] : []);
  const selectedPosition = visibleIndices.indexOf(selected);

  useEffect(() => {
    if (selected === null) {
      dialog.current?.close();
      return;
    }
    if (!dialog.current.open) dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  function close() {
    setSelected(null);
    opener.current?.focus();
  }

  function advance(direction) {
    setSelected((index) => visibleIndices[(visibleIndices.indexOf(index) + direction + visibleIndices.length) % visibleIndices.length]);
  }

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter photographs">
        {['All photographs', ...groups].map((group) => <button type="button" key={group} aria-pressed={filter === group} onClick={() => setFilter(group)} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${filter === group ? 'border-sawonet-green bg-sawonet-green text-white' : 'border-slate-300 bg-white text-sawonet-navy hover:bg-sawonet-mint'}`}>{group}</button>)}
      </div>
      <p className="sr-only" role="status">{visibleIndices.length} photographs. Select an image to view it in full.</p>
      <div className="event-photo-grid mt-6 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
        {photos.map((photo, index) => (filter === 'All photographs' || photo.group === filter) && (
            <a key={photo.slug} href={photo.full} target="_blank" rel="noreferrer" aria-label={`View photo ${index + 1}: ${photo.caption}`} onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              opener.current = event.currentTarget;
              setSelected(index);
            }} className="group mb-4 block break-inside-avoid overflow-hidden rounded-lg bg-slate-100 shadow-sm sm:mb-5">
              <img src={photo.src} srcSet={photo.srcSet} sizes="(min-width: 1280px) 392px, (min-width: 1024px) calc((100vw - 104px) / 3), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 32px)" width={photo.width} height={photo.height} loading="lazy" decoding="async" alt={photo.caption} className="h-auto w-full transition duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none" />
            </a>
        ))}
      </div>
      <dialog ref={dialog} aria-labelledby="event-photo-title" className="event-photo-dialog fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none bg-sawonet-navy p-4 text-white shadow-xl open:flex open:flex-col sm:p-6" onClose={close} onCancel={close} onKeyDown={(event) => {
        if (event.key === 'ArrowRight') { event.preventDefault(); advance(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); advance(-1); }
      }}>
        <h2 id="event-photo-title" className="sr-only">COP17 photograph viewer</h2>
        {current && <>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-200" role="status">Photograph {selectedPosition + 1} of {visibleIndices.length}</p>
            <button type="button" onClick={close} className="min-h-11 rounded border border-white/40 px-4 font-semibold hover:bg-white/10">Close <span aria-hidden="true">×</span></button>
          </div>
          <div className="min-h-0 flex-1">
            <img src={current.full} width={current.width} height={current.height} alt={current.caption} decoding="async" className="h-full w-full object-contain" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={() => advance(-1)} className="min-h-11 rounded border border-white/40 px-5 hover:bg-white/10">← Previous photo</button>
            <button type="button" onClick={() => advance(1)} className="min-h-11 rounded border border-white/40 px-5 hover:bg-white/10">Next photo →</button>
          </div>
        </>}
      </dialog>
    </>
  );
}
