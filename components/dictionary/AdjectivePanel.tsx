'use client';
import { comparison } from '@/lib/declension';
import type { DictEntry } from '@/lib/dictionary';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Notice, PlayButton, TableShell } from './FormTable';

export function AdjectivePanel({ entry }: { entry: DictEntry }) {
  const { locale } = useLocale();
  const c = comparison(entry);
  const rows: [string, string][] = [
    [t('dictPositive', locale), c.positive],
    [t('dictComparative', locale), c.comparative],
    [t('dictSuperlative', locale), c.superlative],
  ];
  return (
    <section aria-label={t('dictComparison', locale)} className="grid gap-3">
      {c.check && <Notice tone="warn">{t('dictCheckForms', locale)}</Notice>}
      {c.irregular && <Notice>{t('dictIrregularComparison', locale)}</Notice>}
      <TableShell caption={t('dictComparison', locale)}>
        <tbody>
          {rows.map(([label, form]) => (
            <tr key={label} className="border-t border-border first:border-t-0">
              <th scope="row" className="text-left font-semibold text-muted px-4 py-1.5 w-[34%] whitespace-nowrap">{label}</th>
              <td className="py-1.5 pr-2 font-rounded font-bold text-text">{form}</td>
              <td className="w-12 pr-2 text-right"><PlayButton text={form} /></td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </section>
  );
}
