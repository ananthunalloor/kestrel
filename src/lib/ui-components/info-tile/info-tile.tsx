export interface InfoTileProps {
  title: string;
  value: string;
  subText?: string;
  icon?: string;
}

export function InfoTile({ title, value, icon, subText }: InfoTileProps) {
  return (
    <div className='drop-shadow-sm max-w-max h-auto flex bg-base-100 py-4 px-6 items-center rounded-2xl'>
      <div className='flex-grow '>
        <div class='opacity-60'>{title}</div>
        <div class='font-extrabold text-4xl'>{value}</div>
        {subText && <div class='text-xs opacity-60'>{subText}</div>}
      </div>
      {icon && (
        <span class='material-symbols-outlined !text-6xl ml-4'>{icon}</span>
      )}
    </div>
  );
}
