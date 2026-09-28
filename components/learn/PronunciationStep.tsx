'use client';
import type { VocabItem } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GermanText } from '@/components/ui/GermanText';
import { SyllableStress } from '@/components/ui/SyllableStress';
import { AudioButton } from '@/components/ui/AudioButton';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { Card } from '@/components/ui/Card';

export function PronunciationStep({ focus, focusFr, items }: { focus: string; focusFr?: string; items: VocabItem[] }) {
  const { locale } = useLocale();
  return (
    <Card>
      <h2 className="text-[24px] font-extrabold m-0 mb-2">{t('pronunciation', locale)}</h2>
      <p className="text-muted mb-4">{pick(focus, focusFr, locale)}</p>
      <div className="grid gap-3.5">
        {items.map((item) => (
          <div key={item.id} className="border-t border-border pt-3 flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <GermanText de={item.german} en={pick(item.english, item.french, locale)} deSize={20} />
              <div className="mt-1"><SyllableStress syllables={item.syllables} /></div>
              <div className="mt-2"><SpeakButton target={item.german} size={30} /></div>
            </div>
            <AudioButton src={ttsSrc(item.german)} label={`Anhören: ${item.german}`} size={32} />
          </div>
        ))}
      </div>
    </Card>
  );
}
