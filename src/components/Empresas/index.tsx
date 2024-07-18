import React from "react";
import Image from "next/image";
import style from "../Empresas/index.module.css";
import script from "../Banner/tailwind.config";
import BHM2550 from "../../../public/BHM2550.jpeg";
import BTred from "../../../public/businesstowerred.jpeg";
import BTretangular from "../../../public/businesstowerretangular.jpeg";
import Prisma from "../../../public/Prisma.jpeg";
import edhorizonte from "../../../public/edhorizonte.png";
import parqueavenida from "../../../public/parqueavenida.png";
import BTazul from "../../../public/businesstowerazul.png";
import Mirante from "../../../public/ed.mirante.png";
import BTpiramide from "../../../public/businesstowerpiramide.png";
import BTcinza from "../../../public/businesstowercinza.png";
import reuniaomesa from "../../../public/reuniaomesa.png";
import BHM2550Details from "../../../public/BHM2550Details.png";
import BTredDetails from "../../../public/businesstowerretangularDetails.png";
import BTretangularDetails from "../../../public/BusinesstowerredDetails.png";
import localidade from "../../../public/localidade.png";
import bannerazul from "../../../public/bannerazul.png";
import quadradoverde from "../../../public/quadradoverde.png";
import pessoa from "../../../public/pessoa.png";
import negocio from "../../../public/negocio.png";
import quadradomaior from "../../../public/quadradomaior.png";
import quadradomenor from "../../../public/quadradomenor.png";
import gsatransparente from "../../../public/gsatransparente.png";
import linearbranco from "../../../public/linearbranco.png";
import Script from "next/script";

export function Empresas() {
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
          <div>
            <Image
              className="z-50 fixed mt-[803px] ml-[117px] z-30"
              src={linearbranco}
              alt=""
            ></Image>
          </div>
          <div className="flex flex-row mx-[117.5px] mt-[80px] gap-[32px] z-10">
            <ul className="flex flex-col gap-[32px] mt-[120px]">
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BHM2550}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  BHM 2550
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTred}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  Business Tower
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTretangular}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px] opacity-0">
                  Business Tower
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px] opacity-0"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
            </ul>
            <ul className="flex flex-col gap-[32px]">
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={Prisma}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  Prisma
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={edhorizonte}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  Ed. Horizonte
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={parqueavenida}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px] opacity-0">
                  Parque Avenida
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px] opacity-0"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTazul}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px] opacity-0">
                  Business Tower
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px] opacity-0"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
            </ul>
            <ul className="flex flex-col gap-[32px] mt-[120px]">
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={Mirante}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  Ed. Mirante
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTpiramide}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]">
                  Business Tower
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
              <li className="w-[378px] relative h-[360px]">
                <Image
                  src={BTcinza}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px] opacity-0">
                  Business Tower
                </h1>
                <Image
                  className="w-346 h-[20px] gap-[8px] bg-image fixed mt-[313px] ml-[16px] opacity-0"
                  src={localidade}
                  alt=""
                ></Image>
              </li>
            </ul>
          </div>
        </section>
        <div className="justify-center mt-[8px] text-[#062665]">
          <button id="read_button" className={style.button}>
            Mostrar Mais
          </button>
        </div>
      </section>
    </section>
  );
}
