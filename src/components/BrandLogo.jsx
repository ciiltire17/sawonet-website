const logoPath = '/assets/sawonet-logo-512.png';

export default function BrandLogo({ size = 'md', showText = true, className = '' }) {
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
    xl: 'h-40 w-40',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoPath}
        alt="Sawonet Somali Pastoralist Women Network logo"
        className={`${sizes[size]} shrink-0 rounded-full object-contain ring-1 ring-slate-200`}
        height={size === 'xl' ? 160 : size === 'lg' ? 80 : size === 'md' ? 56 : 48}
        loading={size === 'xl' ? 'eager' : 'lazy'}
        width={size === 'xl' ? 160 : size === 'lg' ? 80 : size === 'md' ? 56 : 48}
      />
      {showText && (
        <span className="min-w-0">
          <span className="block truncate text-xl font-bold text-sawonet-navy">Sawonet</span>
          <span className="hidden max-w-56 truncate text-xs font-medium uppercase tracking-wide text-slate-500 sm:block">
            Somali Pastoralist Women Network
          </span>
        </span>
      )}
    </div>
  );
}
