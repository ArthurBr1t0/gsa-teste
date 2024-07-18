'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import style from '../Empresas/index.module.css';
import BHM2550 from '../../../public/BHM2550.jpeg';
import BTred from '../../../public/businesstowerred.jpeg';
import BTretangular from '../../../public/businesstowerretangular.jpeg';
import Prisma from '../../../public/Prisma.jpeg';
import edhorizonte from '../../../public/edhorizonte.png';
import parqueavenida from '../../../public/parqueavenida.png';
import BTazul from '../../../public/businesstowerazul.png';
import Mirante from '../../../public/ed.mirante.png';
import BTpiramide from '../../../public/businesstowerpiramide.png';
import BTcinza from '../../../public/businesstowercinza.png';
import localidade from '../../../public/localidade.png';

export function Empresas() {
  const [isVisible, setIsVisible] = useState(false);
  function onClick() {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    console.log('clicou');
  }

  return (
    <section className="max-w-1440">
      <section>
        <div className="h-[86px] gap-[40px] mt-[80px]">
          <h1 className="text-black w-1280 font-visby h-[44px] text-[40px] font-extrabold leading-[44px] text-center">
            Temos as melhores opções para o seu negócio
          </h1>
          <p className="text-black w-1280 h-[34px] text-[24px] font-normal leading-[33.6px] text-center">
            Espaços cuidadosamente selecionados para atender as necessidades do
            seu negócio.
          </p>
        </div>
        <section className="h-[950px] overflow-hidden">
          {/* <div className="bg-gradient-to-t from-white to-accent-white-0/25 h-full" /> */}

          <div className="container mx-auto p-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={onClick}
              type='button'
            >
              {isVisible ? 'Esconder' : 'Mostrar'} Conteúdo
            </button>
            { isVisible ?
            <ul
              className={`overflow-hidden transition-all duration-300 ${
                isVisible ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li className="w-[378px] h-[360px]">
                <Image
                  src={BHM2550}
                  alt=""
                  className="rounded-lg"
                  width={100}
                  height={100}
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={BTred}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={BTretangular}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={Prisma}
                  alt=""
                  className="rounded-lg"
                  width={100}
                  height={100}
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={edhorizonte}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={parqueavenida}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] h-[360px]">
                <Image
                  src={BTazul}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={Mirante}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTpiramide}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTcinza}
                  alt=""
                  className="rounded-lg"
                  width={100}
                  height={100}
                />
              </li>
            </ul> : ''}
          </div>
        </section>
        {/* <div className="justify-center mt-[8px] text-[#062665]">
          <button id="read_button" className={style.button} onClick={onClick}>
            Mostrar Mais
          </button>
        </div> */}
      </section>
    </section>
  );
}
