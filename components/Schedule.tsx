import type { Translations } from '@/lib/i18n'

interface ScheduleProps {
  t: Translations
  openModal: () => void
}

export default function Schedule({ t, openModal }: ScheduleProps) {
  return (
    <section className="schedule" id="schedule">
      <div className="schedule-inner">
        <div className="schedule-header">
          <div className="section-label">{t.sLabel}</div>
          <h2 className="section-title">{t.sTitle}</h2>
          <p className="section-body" style={{ margin: '14px auto 0' }}>{t.sBody}</p>
        </div>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>{t.sDay}</th>
              <th>{t.sTime}</th>
              <th>{t.sProgram}</th>
              <th>{t.sAvail}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{t.sMon}</strong></td>
              <td>4:30 PM – 6:30 PM</td>
              <td><span className="sched-tag beginner">{t.sIndOr}</span></td>
              <td><span className="spots-chip avail"><span className="spots-dot" />{t.sSpots}</span></td>
            </tr>
            <tr>
              <td><strong>{t.sTue}</strong></td>
              <td>4:00 PM – 6:00 PM</td>
              <td><span className="sched-tag beginner">{t.sIndOr}</span></td>
              <td><span className="spots-chip avail"><span className="spots-dot" />{t.sSpots}</span></td>
            </tr>
            <tr>
              <td><strong>{t.sThu}</strong></td>
              <td>4:30 PM – 6:30 PM</td>
              <td><span className="sched-tag beginner">{t.sIndOr}</span></td>
              <td><span className="spots-chip avail"><span className="spots-dot" />{t.sSpots}</span></td>
            </tr>
            <tr className="sat-row">
              <td><strong>{t.sSat}</strong></td>
              <td>1:00 PM – 7:00 PM</td>
              <td><span className="sched-tag beginner">{t.sIndOr}</span></td>
              <td><span className="spots-chip avail"><span className="spots-dot" />{t.sSpots}</span></td>
            </tr>
            <tr className="sat-row">
              <td><strong>{t.sSat}</strong></td>
              <td>3:30 PM – 5:00 PM</td>
              <td><span className="sched-tag kids">{t.sGroupKids}</span></td>
              <td>
                <span className="spots-chip limited">
                  <span className="spots-dot" />
                  {t.sLimited}
                </span>
              </td>
            </tr>
            <tr className="sat-row">
              <td><strong>{t.sSat}</strong></td>
              <td>5:00 PM – 6:30 PM</td>
              <td><span className="sched-tag beginner">{t.sGroupAdults}</span></td>
              <td><span className="spots-chip avail"><span className="spots-dot" />{t.sSpots}</span></td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-note">
          {t.sNote1}
          <a href="tel:0433883078" style={{ color: 'var(--orange)', fontWeight: 600 }}>{t.sNoteCall}</a>
          {t.sNoteOr}
          <button
            onClick={openModal}
            style={{ background: 'none', border: 'none', color: 'var(--orange)', fontWeight: 600, cursor: 'pointer', fontSize: '14px', padding: 0 }}
          >
            {t.sNoteBook}
          </button>
          {t.sNoteEnd}
        </p>
      </div>
    </section>
  )
}
