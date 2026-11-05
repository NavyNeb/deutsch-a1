import type { Lesson } from '@/content/types';
import { lessonArt } from '@/lib/lesson-art';
import { genderMeta } from '@/lib/gender';

/** Generated Bauhaus artwork for a lesson. Fills its (relatively positioned) parent. */
export function LessonArt({ lesson, className = '' }: { lesson: Pick<Lesson, 'id' | 'level' | 'number'>; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative w-full h-full ${className}`}>
      {lessonArt(lesson).map((s) => {
        const meta = genderMeta(s.gender)!;
        return (
          <span
            key={s.kind}
            data-shape={s.kind}
            className="absolute block"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}%`,
              height: `${s.kind === 'triangle' ? s.size * 0.9 : s.size}%`,
              background: meta.fill,
              borderRadius: s.kind === 'circle' ? '50%' : undefined,
              clipPath: s.kind === 'triangle' ? 'polygon(50% 0, 100% 100%, 0 100%)' : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
