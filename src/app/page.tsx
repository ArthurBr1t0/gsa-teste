import { Empresas } from '@/components/Empresas';
import { Header } from '../components/Header';
import React from 'react';

export default function Home() {
  return (
    <>
      <main className="flex-col justify-center mx-auto">
        <Empresas />
      </main>
    </>
  );
}
