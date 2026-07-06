import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../public/doctor-hero.png"

export function Hero(){
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
                <main className="flex items-center justify-center">
                    <article className="flex-2 max-w-3xl space-y-8 flex flex-col justify-center">
                        <h1 className="pt-4 text-4xl font-bold lg:text-5xl max-w-2xl tracking-tight">
                            Encontre os melhores profissionais em um único Local!
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Descubra e conecte-se com o melhor profissional para suas necessidades odontológicas. Nossa plataforma oferece uma ampla gama de especialistas qualificados, garantindo que você encontre o cuidado certo para o seu sorriso.
                        </p>

                        <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit px-6 font-semibold">
                            Profissionais disponíveis
                        </Button>
                    </article>

                    <div className="hidden lg:block">
                        <Image
                            src={doctorImg}
                            alt="Foto ilustrativa de um dentista sorrindo, com jaleco e estetoscópio, representando a confiança e profissionalismo dos serviços odontológicos oferecidos."
                            width={340}
                            height={400}
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                </main>
            </div>
        </section>
    )
}