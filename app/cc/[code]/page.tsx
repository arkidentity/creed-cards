import { GoDeeperPage } from "../../../components/cards/GoDeeperPage";

/** QR landing for printed cards: /cc/<deck>-<card>. */
export default async function CardCodePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <GoDeeperPage code={code} />;
}
