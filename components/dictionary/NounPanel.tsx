'use client';
import { nounCases } from '@/lib/declension';
import type { DictEntry } from '@/lib/dictionary';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { Notice, PlayButton, TableShell } from './FormTable';

const CASE_KEY: Record<string, UIKey> = { nom: 'caseNom', acc: 'caseAcc', dat: 'caseDat', gen: 'caseGen' };

export function NounPanel({ entry }: { entry: DictEntry }) {
  const { locale } = useLocale();
  const { rows, note } = nounCases(entry);
  return (
    <section aria-label={t('dictCaseTable', locale)} className="grid gap-3">
      {note === 'plural-missing' && <Notice>{t('dictPluralMissing', locale)}</Notice>}
      {note === 'gender-ambiguous' && <Notice>{t('dictGenderAmbiguous', locale)}</Notice>}
      <TableShell caption={t('dictCaseTable', locale)}>
        <thead>
          <tr className="text-left">
            <td className="px-4 py-2" />
            <th scope="col" className="py-2 pr-2 label text-muted">{t('numSingular', locale)}</th>
            <th scope="col" className="py-2 pr-2 label text-muted">{t('numPlural', locale)}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.case} className="border-t border-border">
              <th scope="row" className="text-left font-semibold text-muted px-4 py-1.5 whitespace-nowrap">{t(CASE_KEY[r.case], locale)}</th>
              <td className="py-1.5 pr-2 font-rounded font-bold text-text whitespace-nowrap">
                <span className="inline-flex items-center">{r.sing}<PlayButton text={r.sing} /></span>
              </td>
              <td className="py-1.5 pr-2 font-rounded font-bold text-text whitespace-nowrap">
                {r.plur === '—' ? <span className="text-faint">—</span> : <span className="inline-flex items-center">{r.plur}<PlayButton text={r.plur} /></span>}
              </td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </section>
  );
}
