import './globals.css';

export const metadata = {
  title: 'Nextjs13 Todolist + Jest',
  description: '투두리스트 테스트 코드 작성 연습용',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
