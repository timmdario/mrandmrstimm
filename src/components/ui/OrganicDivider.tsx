interface OrganicDividerProps {
  flip?: boolean
  color?: string
  className?: string
}

export function OrganicDivider({ flip = false, color = '#F8F5F0', className = '' }: OrganicDividerProps) {
  return (
    <div className={`organic-divider ${className}`} style={{ transform: flip ? 'rotate(180deg)' : undefined }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{ height: '80px' }}
      >
        <path
          d="M0,40 C120,80 240,10 360,50 C480,90 600,20 720,55 C840,90 960,15 1080,45 C1200,75 1320,25 1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
        <path
          d="M0,60 C160,30 320,80 480,50 C640,20 800,70 960,45 C1120,20 1280,65 1440,40 L1440,100 L0,100 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
