interface LightboxProps {
  src: string | null
  onClose: () => void
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <div
      className={`lightbox-overlay${src ? ' open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close preview">✕</button>
      {src && (
        // Using a regular img here intentionally: lightbox images are user-triggered,
        // not layout-critical, and next/image adds complexity without benefit in an overlay.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="Preview"
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  )
}
