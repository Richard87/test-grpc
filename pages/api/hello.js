// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authenticatedLndGrpc } from "lightning";
import lnService from "ln-service";

export default async function handler(req, res) {
  const { lnd } = authenticatedLndGrpc({
    cert: "ABCD",
    macaroon: "ABCD",
    socket: "127.0.0.1:10009",
  });
  const version = await lnService.getWalletState({ lnd });

  res.status(200).json({ version });
}
