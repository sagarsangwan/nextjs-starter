import Link from "next/link"
import placeholder from "../public/placeholder.svg"
import Image from "next/image"
import { FlipWords } from "./ui/flip-words"
export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Next.js Starter with  <FlipWords words={['auth.js', 'prisma', 'shadcn', 'GoogleDrive']} duration={3000} />
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Jumpstart your Next.js projects with our comprehensive starter kit featuring Prisma for robust database management, CockroachDB for scalable and resilient data storage, Auth.js for seamless authentication, and Shadcn for stunning UI components. Perfect for building modern, secure, and scalable web applications effortlessly.                    </p>
                    <Link
                        href="https://github.com/sagarsangwan/nextjs-starter"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Get Started
                    </Link>
                </div>
                <Image
                    src={placeholder}
                    alt="Hero"
                />
                {/* <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        /> */}
            </div>
        </section>
    )
}