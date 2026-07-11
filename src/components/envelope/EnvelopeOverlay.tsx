import { Envelope3D } from './Envelope3D'
import { useEnvelopeAnimation } from './useEnvelopeAnimation'

interface EnvelopeOverlayProps {
  onComplete: () => void
}

export function EnvelopeOverlay({ onComplete }: EnvelopeOverlayProps) {
  const { openEnvelope } = useEnvelopeAnimation(onComplete)

  return (
    <div
      id="envelope-overlay"
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[1000] cursor-pointer overflow-hidden"
      style={{ background: '#F8F4EE' }}
      onClick={openEnvelope}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openEnvelope()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="Briefumschlag öffnen"
    >
      {/* Botanical background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/botanical-bg.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Soft radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,253,249,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Petals container */}
        <div
          id="petals-container"
          className="absolute pointer-events-none z-10"
          style={{ top: '50%', left: '50%', width: 0, height: 0 }}
        />

        {/* Logo */}
        <img
          src={`${import.meta.env.BASE_URL}assets/logo.png`}
          alt="Malika & Dario"
          className="env-logo relative z-[5] mb-6"
          style={{ width: 180, filter: 'drop-shadow(0 2px 8px rgba(107,87,64,0.15))' }}
        />

        {/* 3D Envelope */}
        <div className="envelope-scene" style={{ perspective: 1200 }}>
          <Envelope3D />
        </div>

        {/* Hint */}
        <p
          className="env-hint mt-10 font-body text-base text-warm-gray tracking-wide"
          style={{ animation: 'hintPulse 2.5s ease-in-out infinite' }}
        >
          Klick zum Öffnen
        </p>
      </div>
    </div>
  )
}
