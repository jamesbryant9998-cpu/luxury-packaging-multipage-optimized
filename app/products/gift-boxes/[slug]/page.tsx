
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GiftBoxProduct({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <main className="bg-black text-white p-10">
      <h1 className="text-5xl mb-6">{slug.replace(/-/g,' ').toUpperCase()}</h1>
      <p className="text-zinc-400">
        Premium custom gift box solution. MOQ 100 pcs, luxury finishing and global shipping.
      </p>
    </main>
  );
}
