// Exam practice always renders in the light "Papier" theme — it should feel like the paper exam.
export default function ExamsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="light" className="bg-bg text-text min-h-[100dvh]">
      {children}
    </div>
  );
}
