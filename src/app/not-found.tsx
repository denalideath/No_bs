import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="font-display text-sm font-bold tracking-wide text-brand-700 uppercase">404</p>
      <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">This page went missing.</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
        Unlike your leads will, once you&apos;re set up. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/book-a-demo" variant="secondary">
          Book a demo
        </ButtonLink>
      </div>
    </Container>
  );
}
