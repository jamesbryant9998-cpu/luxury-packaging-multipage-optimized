
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DrawerBoxProduct({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  return <main className="bg-black text-white p-10">
    <h1 className="text-5xl mb-6">{slug.replace(/-/g,' ').toUpperCase()}</h1>
    <p className="text-zinc-400 mb-6">Premium custom drawer box for luxury brands. MOQ 100 pcs.</p>
  </main>;
}
