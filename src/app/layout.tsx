import { Metadata } from 'next';
import Provider from './(lib)/Provider';
import './globals.css';

export const metadata: Metadata = {
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
      <body className="flex flex-col items-center">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
