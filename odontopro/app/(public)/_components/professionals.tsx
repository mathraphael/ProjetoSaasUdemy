    import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card"
import Image from "next/image"
import photo from "../../../public/photo1.png"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


    export function Professionals() {
        return (
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nossos Profissionais
                    </h2>   

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <Card className = " overflow-hidden p-0">
                            <CardContent className="p-0">
                            <div>
                               <div className="relative h-48">
                                <Image
                                    src={photo}
                                    alt="Foto do Profissional"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                            
                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Clínica Centro
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Rua Exemplo, 123 - Centro, Campo Grande - MS
                                        </p>
                    
                                    </div>
                                    
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>

                                </div>
                                <Link href="/clinica/123"
                                className="w-full flex items-center justify-center bg-emerald-500 text-white py-2 rounded hover:bg-emerald-300 transition-colors text-sm md:text-base font-medium  ">
                                Agendar horário
                                <ArrowRight className="ml-2">

                                </ArrowRight>
                                </Link>
                               </div>
                            </CardContent>
                        </Card>

                    </section>
                </div>
            </section>

        )
    }