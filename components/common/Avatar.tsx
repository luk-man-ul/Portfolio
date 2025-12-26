import { cn } from '@/lib/utils'

interface AvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  // Use a placeholder avatar if src is not a valid URL or starts with /
  const isPlaceholder = src.startsWith('/') && !src.startsWith('http')
  
  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden border-2 border-accent-500 bg-gray-200 dark:bg-gray-800 flex items-center justify-center',
        sizeClasses[size],
        className
      )}
    >
      {isPlaceholder ? (
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
          {alt.charAt(0).toUpperCase()}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}
