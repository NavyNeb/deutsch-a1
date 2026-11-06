'use client';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { isVisible, useKumpel } from '@/lib/kumpel-store';
import { openKumpel } from '@/lib/kumpel-events';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';
import { Switch } from '@/components/ui/Switch';
import { KumpelFace } from './KumpelFace';

function Row({ title, hint, className = '', stack = false, children }: { title: string; hint: string; className?: string; stack?: boolean; children: React.ReactNode }) {
  return (
    <div className={'flex items-center gap-4 py-4 border-b border-border last:border-b-0 ' + (stack ? 'max-sm:flex-col max-sm:items-start ' : '') + className}>
      <div className="flex-1 min-w-0">
        <b className="block font-display font-semibold text-[16px]">{title}</b>
        <p className="m-0 mt-1 text-[13px] leading-[1.45] text-text-2">{hint}</p>
      </div>
      {children}
    </div>
  );
}

const outlineButton =
  'shrink-0 inline-flex items-center h-11 px-5 rounded-full border border-border-strong bg-transparent text-text text-[14px] font-semibold cursor-pointer hover:bg-surface-2';

/** The Kumpel card in Settings: show or hide, where it sits, hints, motion, and a way back to the tour. */
export function KumpelSettings() {
  const { locale } = useLocale();
  const { state, update, resetHints } = useKumpel();

  return (
    <div data-kumpel="settings-kumpel"><Card padded={false} className="px-6 py-2">
      <div className="flex items-center gap-3.5 pt-4 pb-1">
        <KumpelFace mood="rest" size={40} />
        <h2 className="m-0 font-display font-semibold text-[22px]">{t('kumpelSettingsTitle', locale)}</h2>
      </div>

      <Row title={t('kumpelShow', locale)} hint={t('kumpelShowHint', locale)}>
        <Switch
          checked={isVisible(state)}
          onChange={(on) => update(on ? { enabled: true, muted: false } : { enabled: false })}
          label={t('kumpelShow', locale)}
        />
      </Row>

      <Row title={t('kumpelPosition', locale)} hint={t('kumpelPhoneNote', locale)} className="max-md:hidden">
        <Segmented
          label={t('kumpelPosition', locale)}
          value={state.side}
          onChange={(side) => update({ side })}
          options={[
            { value: 'left', label: t('kumpelLeft', locale) },
            { value: 'right', label: t('kumpelRight', locale) },
          ]}
        />
      </Row>

      <Row title={t('kumpelHints', locale)} hint={t('kumpelHintsHint', locale)}>
        <Switch checked={state.hints} onChange={(hints) => update({ hints })} label={t('kumpelHints', locale)} />
      </Row>

      <Row title={t('kumpelMotion', locale)} hint={t('kumpelMotionHint', locale)}>
        <Segmented
          label={t('kumpelMotion', locale)}
          value={state.motion}
          onChange={(motion) => update({ motion })}
          options={[
            { value: 'auto', label: t('kumpelMotionAuto', locale) },
            { value: 'calm', label: t('kumpelMotionCalm', locale) },
          ]}
        />
      </Row>

      <Row title="Tour starten" hint={t('kumpelRestartHint', locale)} stack>
        <button
          type="button"
          className={outlineButton}
          onClick={() => {
            // Asking for the tour is asking for Kumpel: bring it back if it was hidden or muted.
            update({ enabled: true, muted: false });
            openKumpel({ tour: 'app' });
          }}
        >
          {t('kumpelRestartTour', locale)}
        </button>
      </Row>

      <Row title={t('kumpelResetHints', locale)} hint={t('kumpelResetHintsHint', locale)} stack>
        <button type="button" className={outlineButton} onClick={resetHints}>{t('kumpelResetHints', locale)}</button>
      </Row>

      <p className="m-0 pt-3 pb-4 text-[12px] leading-[1.5] text-muted">{t('kumpelStoredNote', locale)}</p>
    </Card></div>
  );
}
