import type { Translations } from '@/lib/i18n'

interface FormData {
  name: string
  phone: string
  email: string
  program: string
  message: string
  bookingFor: string
  childName: string
  age: string
  level: string
}

interface BookingModalProps {
  t: Translations
  open: boolean
  onClose: () => void
  formStep: 'form' | 'success'
  setFormStep: (s: 'form' | 'success') => void
  formData: FormData
  setFormData: (d: FormData) => void
}

export default function BookingModal({
  t, open, onClose, formStep, setFormStep, formData, setFormData,
}: BookingModalProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormStep('success')
  }

  function update(field: keyof FormData, value: string) {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={t.mTitle}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {formStep === 'success' ? (
          <div className="form-success">
            <div className="check">🎉</div>
            <h3>{t.mSuccessTitle}</h3>
            <p>{t.mSuccessBody}</p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--navy)', fontWeight: 600 }}>{t.mSuccessCall}</p>
            <button
              className="btn-primary"
              style={{ marginTop: '24px' }}
              onClick={() => { onClose(); setFormStep('form') }}
            >
              {t.mDone}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>{t.mTitle}</h2>
            <p className="modal-sub">{t.mSub}</p>

            {/* Booking for */}
            <div className="form-group">
              <label>{t.mBookFor}</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {([['myself', `🙋 ${t.mMyself}`], ['child', `👧 ${t.mChild}`]] as [string, string][]).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => update('bookingFor', val)}
                    style={{
                      flex: 1, padding: '11px', borderRadius: '10px',
                      fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                      fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all .2s',
                      background: formData.bookingFor === val ? 'var(--navy)' : 'var(--section-alt)',
                      color: formData.bookingFor === val ? 'white' : 'var(--dark)',
                      border: formData.bookingFor === val ? '2px solid var(--navy)' : '2px solid #E5E7EB',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Your name */}
            <div className="form-group">
              <label>{t.mYourName}</label>
              <input type="text" placeholder={t.mNamePh} required value={formData.name} onChange={(e) => update('name', e.target.value)} />
            </div>

            {/* Child name (conditional) */}
            {formData.bookingFor === 'child' && (
              <div className="form-group">
                <label>{t.mChildName}</label>
                <input type="text" placeholder={t.mChildPh} required value={formData.childName} onChange={(e) => update('childName', e.target.value)} />
              </div>
            )}

            {/* Phone */}
            <div className="form-group">
              <label>{t.mPhone}</label>
              <input type="tel" placeholder={t.mPhonePh} required value={formData.phone} onChange={(e) => update('phone', e.target.value)} />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>{t.mEmail}</label>
              <input type="email" placeholder={t.mEmailPh} required value={formData.email} onChange={(e) => update('email', e.target.value)} />
            </div>

            {/* Program */}
            <div className="form-group">
              <label>{t.mProgram}</label>
              <select value={formData.program} onChange={(e) => update('program', e.target.value)}>
                <option value="">{t.mSelectProgram}</option>
                <option value="individual">{t.mProgInd}</option>
                <option value="1on2">{t.mProg1on2}</option>
                <option value="group-kids">{t.mProgGroup}</option>
              </select>
            </div>

            {/* Age */}
            <div className="form-group">
              <label>{formData.bookingFor === 'child' ? t.mChildAge : t.mYourAge}</label>
              <select value={formData.age} onChange={(e) => update('age', e.target.value)}>
                <option value="">{t.mSelectAge}</option>
                {formData.bookingFor === 'child' ? (
                  <>
                    <option value="4-8">{t.mAge48}</option>
                    <option value="9-12">{t.mAge912}</option>
                    <option value="13-17">{t.mAge1317}</option>
                    <option value="18+">{t.mAge18p}</option>
                  </>
                ) : (
                  <>
                    <option value="18-24">{t.mAge1824}</option>
                    <option value="25-34">{t.mAge2534}</option>
                    <option value="35-49">{t.mAge3549}</option>
                    <option value="50+">{t.mAge50p}</option>
                  </>
                )}
              </select>
            </div>

            {/* Skill level */}
            <div className="form-group">
              <label>{t.mLevel}</label>
              <select value={formData.level} onChange={(e) => update('level', e.target.value)}>
                <option value="">{t.mSelectLevel}</option>
                <option value="beginner">{t.mBeg}</option>
                <option value="intermediate">{t.mInt}</option>
                <option value="advanced">{t.mAdv}</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group">
              <label>{t.mElse}</label>
              <textarea placeholder={t.mElsePh} value={formData.message} onChange={(e) => update('message', e.target.value)} />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '16px', padding: '16px' }}>
              {t.mSubmit}
            </button>
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--muted)', marginTop: '12px' }}>
              {t.mOrCall}
              <a href="tel:0433883078" style={{ color: 'var(--orange)', fontWeight: 600 }}>0433 883 078</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
